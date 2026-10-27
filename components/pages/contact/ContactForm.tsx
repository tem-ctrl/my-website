'use client';

import { FC, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { BiSolidUser } from 'react-icons/bi';
import { HiChatAlt2 } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import FormInput from '@/components/common/FormInput';
import FormTextarea from '@/components/common/FormTextArea';
import SendButtonAndSocial from '@/components/pages/contact/SendButonAndSocial';
import { CONTACT_EMAIL } from '@/lib/constants';

interface ContactFormProps {
	className?: string;
}

// Opens the visitor's mail client with the message pre-filled.
// To be replaced by a server-side sender
const ContactForm: FC<ContactFormProps> = ({ className = '' }) => {
	const t = useTranslations('ContactPage');

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = new FormData(event.currentTarget);
		const name = String(data.get('name'));
		const subject = encodeURIComponent(t('subject', { name }));
		const body = encodeURIComponent(`${data.get('message')}\n\n${name} <${data.get('email')}>`);

		window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
	};

	return (
		<form className={`${className} flex flex-col gap-3 md:gap-5`} onSubmit={onSubmit}>
			<p>{t('invitation')}</p>
			<div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
				<FormInput
					type="text"
					name="name"
					placeholder={t('namePlaceholder')}
					icon={<BiSolidUser />}
					minLength={3}
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
				icon={<HiChatAlt2 />}
				iconClass="text-xl"
				required
			/>
			<SendButtonAndSocial className="flex w-full justify-between" />
		</form>
	);
};

export default ContactForm;
