'use client';

import React, { FC, FormEvent, startTransition, useActionState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { BiSolidUser } from 'react-icons/bi';
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import { HiChatAlt2 } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import FormInput from '@/components/common/FormInput';
import FormTextarea from '@/components/common/FormTextArea';
import SendButtonAndSocial from '@/components/pages/contact/SendButonAndSocial';
import { ContactState, sendContactMessage } from '@/lib/actions/contact';
import { CONTACT_EMAIL } from '@/lib/constants';

interface ContactFormProps {
	className?: string;
}

const initialState: ContactState = { status: 'idle' };

const ContactForm: FC<ContactFormProps> = ({ className = '' }) => {
	const t = useTranslations('ContactPage');
	const formRef = useRef<HTMLFormElement>(null);
	const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);

	// Submitting through onSubmit (instead of <form action>) keeps the fields filled in
	// when validation fails; they are cleared only once the message is sent.
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = new FormData(event.currentTarget);

		startTransition(() => formAction(data));
	};

	useEffect(() => {
		if (state.status === 'success') formRef.current?.reset();
	}, [state]);

	const isSuccess = state.status === 'success';

	return (
		<form
			ref={formRef}
			className={`${className} relative flex flex-col gap-3 md:gap-5`}
			onSubmit={onSubmit}
		>
			<p>{t('invitation')}</p>
			<div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
				<FormInput
					type="text"
					name="name"
					placeholder={t('namePlaceholder')}
					icon={<BiSolidUser />}
					minLength={3}
					maxLength={100}
					required
				/>
				<FormInput
					type="email"
					name="email"
					placeholder={t('emailPlaceholder')}
					icon={<MdEmail />}
					required
				/>
			</div>
			<FormTextarea
				name="message"
				placeholder={t('messagePlaceholder')}
				minLength={10}
				maxLength={5000}
				icon={<HiChatAlt2 />}
				iconClass="text-xl"
				required
			/>
			{/* Honeypot for bots, hidden from people and assistive tech */}
			<input
				type="text"
				name="company"
				tabIndex={-1}
				autoComplete="off"
				aria-hidden
				className="absolute -left-[9999px] size-px opacity-0"
			/>

			<AnimatePresence mode="wait">
				{state.status !== 'idle' && !isPending && (
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
