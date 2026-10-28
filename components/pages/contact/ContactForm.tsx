'use client';

import {
	ChangeEvent,
	FC,
	FocusEvent,
	SubmitEvent,
	startTransition,
	useActionState,
	useEffect,
	useRef,
	useState,
} from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { BiSolidUser } from 'react-icons/bi';
import { FaBuilding } from 'react-icons/fa';
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import { HiChatAlt2 } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import FormInput, { FieldStatus } from '@/components/common/FormInput';
import FormTextarea from '@/components/common/FormTextArea';
import SendButtonAndSocial from '@/components/pages/contact/SendButonAndSocial';
import { ContactState, sendContactMessage } from '@/lib/actions/contact';
import { CONTACT_EMAIL } from '@/lib/constants';
import {
	CONTACT_FIELDS,
	CONTACT_RULES,
	ContactField,
	ContactValues,
	validateContactField,
} from '@/lib/validation/contact';

interface ContactFormProps {
	className?: string;
}

const initialState: ContactState = { status: 'idle' };

const emptyValues: ContactValues = { name: '', email: '', company: '', message: '' };

// How long the status message stays on screen (ms). Errors stay longer so the email can be copied.
const STATUS_TIMEOUT = { success: 5000, invalid: 8000, error: 10000 } as const;

const ContactForm: FC<ContactFormProps> = ({ className = '' }) => {
	const t = useTranslations('ContactPage');
	const formRef = useRef<HTMLFormElement>(null);
	const [values, setValues] = useState<ContactValues>(emptyValues);
	// A field shows its validation state once it is touched: on blur, or as soon as it
	// becomes valid while typing. From then on it is re-validated on every keystroke.
	const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});

	const [state, formAction, isPending] = useActionState(
		async (previous: ContactState, data: FormData) => {
			const result = await sendContactMessage(previous, data);

			if (result.status === 'success') {
				setValues(emptyValues);
				setTouched({});
			}

			return result;
		},
		initialState
	);
	// Each submission returns a new state object, so storing the dismissed one hides
	// only that message and lets the next submission show again.
	const [dismissed, setDismissed] = useState<ContactState | null>(null);

	useEffect(() => {
		if (state.status === 'idle') return;

		const timer = setTimeout(() => setDismissed(state), STATUS_TIMEOUT[state.status]);

		return () => clearTimeout(timer);
	}, [state]);

	const getStatus = (field: ContactField): FieldStatus | undefined => {
		if (!touched[field]) return undefined;
		// An empty optional field is neither valid nor invalid.
		if (!CONTACT_RULES[field].required && !values[field].trim()) return undefined;

		return validateContactField(field, values[field]) ? 'invalid' : 'valid';
	};

	const getError = (field: ContactField) => {
		const error = validateContactField(field, values[field]);
		const { min, max } = CONTACT_RULES[field];

		return error ? t(`validation.${error}`, { min: min ?? 0, max: max ?? 0 }) : undefined;
	};

	const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const field = event.target.name as ContactField;
		const value = event.target.value;

		setValues((previous) => ({ ...previous, [field]: value }));

		if (value.trim() && !validateContactField(field, value)) {
			setTouched((previous) => ({ ...previous, [field]: true }));
		}
	};

	const onBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const field = event.target.name as ContactField;

		// Leaving an untouched, empty field (e.g. tabbing through) shouldn't flag it.
		if (!values[field].trim() && !touched[field]) return;

		setTouched((previous) => ({ ...previous, [field]: true }));
	};

	// Submitting through onSubmit (instead of <form action>) keeps the fields filled in
	// when the server rejects them; they are cleared only once the message is sent.
	const onSubmit = (event: SubmitEvent<HTMLFormElement>) => {
		event.preventDefault();

		const invalidField = CONTACT_FIELDS.find((field) => validateContactField(field, values[field]));

		if (invalidField) {
			setTouched(Object.fromEntries(CONTACT_FIELDS.map((field) => [field, true])));
			formRef.current?.querySelector<HTMLElement>(`[name="${invalidField}"]`)?.focus();

			return;
		}

		const data = new FormData(event.currentTarget);

		startTransition(() => formAction(data));
	};

	const fieldProps = (field: ContactField) => ({
		name: field,
		value: values[field],
		placeholder: t(`${field}Placeholder`),
		required: CONTACT_RULES[field].required,
		maxLength: CONTACT_RULES[field].max,
		status: getStatus(field),
		error: getError(field),
		onChange,
		onBlur,
	});

	const isSuccess = state.status === 'success';

	return (
		<form
			ref={formRef}
			className={`${className} relative flex flex-col gap-3 md:gap-5`}
			onSubmit={onSubmit}
			noValidate
		>
			<p>{t('invitation')}</p>
			<div className="grid w-full grid-cols-1 items-start gap-3 md:grid-cols-2 md:gap-5">
				<FormInput type="text" autoComplete="name" icon={<BiSolidUser />} {...fieldProps('name')} />
				<FormInput type="email" autoComplete="email" icon={<MdEmail />} {...fieldProps('email')} />
			</div>
			<FormInput
				type="text"
				autoComplete="organization"
				icon={<FaBuilding />}
				{...fieldProps('company')}
			/>
			<FormTextarea icon={<HiChatAlt2 />} iconClass="text-xl" {...fieldProps('message')} />
			{/* Honeypot for bots, hidden from people and assistive tech */}
			<input
				type="text"
				name="website"
				tabIndex={-1}
				autoComplete="off"
				aria-hidden
				className="pointer-events-none absolute top-0 left-0 size-px overflow-hidden opacity-0"
			/>

			<AnimatePresence mode="wait">
				{state.status !== 'idle' && !isPending && dismissed !== state && (
					<motion.p
						key={state.status}
						role="status"
						initial={{ opacity: 0, y: -8, height: 0 }}
						animate={{ opacity: 1, y: 0, height: 'auto' }}
						exit={{ opacity: 0, y: -8, height: 0 }}
						transition={{ duration: 0.3, ease: 'easeOut' }}
						className={`flex items-start gap-3 rounded-2xl border px-4 py-3 ${
							isSuccess
								? 'border-success/40 bg-success/10 text-success'
								: 'border-danger/40 bg-danger/10 text-danger'
						}`}
					>
						{isSuccess ? (
							<FiCheckCircle className="mt-1 shrink-0" />
						) : (
							<FiAlertCircle className="mt-1 shrink-0" />
						)}
						<span>{t(`status.${state.status}`, { email: CONTACT_EMAIL })}</span>
					</motion.p>
				)}
			</AnimatePresence>

			<SendButtonAndSocial className="flex w-full justify-between" isPending={isPending} />
		</form>
	);
};

export default ContactForm;
