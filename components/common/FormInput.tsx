'use client';

import { ReactNode, InputHTMLAttributes, Ref, useId, useState } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export type FieldStatus = 'valid' | 'invalid';

interface FormInputProps extends InputProps {
	className?: string;
	inputClass?: string;
	iconClass?: string;
	icon?: ReactNode;
	status?: FieldStatus;
	error?: string;
	ref?: Ref<HTMLInputElement>;
}

export const statusRingClass = (status?: FieldStatus) =>
	status === 'invalid'
		? 'ring-danger focus:ring-danger'
		: status === 'valid'
			? 'ring-success focus:ring-success'
			: 'ring-field-ring focus:ring-primary';

const FormInput = ({
	className,
	icon,
	inputClass,
	iconClass,
	status,
	error,
	ref,
	id,
	placeholder,
	...restProps
}: FormInputProps) => {
	const [isFocused, setIsFocused] = useState(false);
	const generatedId = useId();
	const errorId = `${id ?? generatedId}-error`;
	const showError = status === 'invalid' && !!error;
	// A native placeholder can't hold a red asterisk, so required fields draw their own.
	const customPlaceholder = restProps.required && !!placeholder;

	return (
		<div className={`${className} flex flex-col gap-1.5`}>
			<div
				className="relative"
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			>
				<input
					className={`${inputClass} ${!!icon ? 'pl-12' : 'pl-4'} ${statusRingClass(status)} h-12 w-full rounded-full bg-field pr-12 text-foreground/80 ring-1 transition-shadow focus:outline-none`}
					ref={ref}
					id={id}
					placeholder={customPlaceholder ? undefined : placeholder}
					aria-label={placeholder}
					aria-invalid={status === 'invalid' || undefined}
					aria-describedby={showError ? errorId : undefined}
					{...restProps}
				/>
				{customPlaceholder && !restProps.value && (
					<span
						className={`${!!icon ? 'left-12' : 'left-4'} pointer-events-none absolute top-1/2 -translate-y-1/2 text-foreground/40`}
						aria-hidden
					>
						{placeholder}
						<span className="ml-0.5 text-danger">*</span>
					</span>
				)}
				{!!icon && (
					<span
						className={`${iconClass} ${isFocused && 'text-primary-text'} absolute top-4 left-4 inline text-lg`}
					>
						{icon}
					</span>
				)}
				{status === 'valid' && (
					<FiCheck className="absolute top-4 right-4 text-lg text-success" aria-hidden />
				)}
				{status === 'invalid' && (
					<FiX className="absolute top-4 right-4 text-lg text-danger" aria-hidden />
				)}
			</div>
			{showError && (
				<p id={errorId} className="pl-4 text-sm text-danger">
					{error}
				</p>
			)}
		</div>
	);
};

export default FormInput;
