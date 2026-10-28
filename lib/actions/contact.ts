'use server';

import { CONTACT_EMAIL } from '@/lib/constants';

export type ContactStatus = 'idle' | 'success' | 'invalid' | 'error';

export interface ContactState {
	status: ContactStatus;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Sends the contact form to CONTACT_EMAIL through Resend (https://resend.com/docs/api-reference/emails/send-email).
export const sendContactMessage = async (
	_previous: ContactState,
	formData: FormData
): Promise<ContactState> => {
	// Honeypot: invisible to humans, bots fill it in. Pretend it worked.
	if (formData.get('website')) return { status: 'success' };

	const name = String(formData.get('name') ?? '').trim();
	const email = String(formData.get('email') ?? '').trim();
	const company = String(formData.get('company') ?? '').trim();
	const message = String(formData.get('message') ?? '').trim();

	if (
		name.length < 3 ||
		name.length > 100 ||
		!EMAIL_PATTERN.test(email) ||
		company.length > 100 ||
		message.length < 10 ||
		message.length > 5000
	) {
		return { status: 'invalid' };
	}

	const apiKey = process.env.RESEND_API_KEY;

	if (!apiKey) {
		console.error('Contact form: RESEND_API_KEY is not set');

		return { status: 'error' };
	}

	const sender = company ? `${name} (${company})` : name;

	try {
		const response = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
			body: JSON.stringify({
				from: process.env.CONTACT_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>',
				to: [CONTACT_EMAIL],
				reply_to: email,
				subject: `Portfolio: new message from ${sender}`,
				text: `${message}\n\n${sender} <${email}>`,
			}),
		});

		if (!response.ok) {
			console.error('Contact form: Resend error', response.status, await response.text());

			return { status: 'error' };
		}

		return { status: 'success' };
	} catch (error) {
		console.error('Contact form: request failed', error);

		return { status: 'error' };
	}
};
