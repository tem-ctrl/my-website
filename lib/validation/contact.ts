// Contact form rules, shared by the form (live validation) and the server action.

export type ContactField = 'name' | 'email' | 'company' | 'message';

export type ContactFieldError = 'required' | 'tooShort' | 'tooLong' | 'invalidEmail';

export type ContactValues = Record<ContactField, string>;

interface FieldRule {
	required?: boolean;
	min?: number;
	max?: number;
	email?: boolean;
}

export const CONTACT_RULES: Record<ContactField, FieldRule> = {
	name: { required: true, min: 3, max: 100 },
	email: { required: true, max: 254, email: true },
	company: { max: 100 },
	message: { required: true, min: 10, max: 5000 },
};

export const CONTACT_FIELDS = Object.keys(CONTACT_RULES) as ContactField[];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateContactField = (
	field: ContactField,
	rawValue: string
): ContactFieldError | null => {
	const { required, min, max, email } = CONTACT_RULES[field];
	const value = rawValue.trim();

	if (!value) return required ? 'required' : null;
	if (min && value.length < min) return 'tooShort';
	if (max && value.length > max) return 'tooLong';
	if (email && !EMAIL_PATTERN.test(value)) return 'invalidEmail';

	return null;
};
