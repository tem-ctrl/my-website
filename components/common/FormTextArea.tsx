'use client';

import React, { Ref, TextareaHTMLAttributes, useId, useState } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import { FieldStatus, statusRingClass } from '@/components/common/FormInput';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

interface FormTextareaProps extends TextareaProps {
	className?: string;
	textareaClass?: string;
	iconClass?: string;
	icon?: React.ReactNode;
	status?: FieldStatus;
	error?: string;
	ref?: Ref<HTMLTextAreaElement>;
}

const FormTextarea = ({
	className,
	icon,
	textareaClass,
	iconClass,
	status,
	error,
	ref,
	id,
	placeholder,
	...restProps
}: FormTextareaProps) => {
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
				<textarea
					className={`${textareaClass} ${!!icon ? 'pl-12' : 'pl-4'} ${statusRingClass(status)} scrollbar-none h-32 w-full overflow-scroll rounded-[28px] bg-field py-4 pr-12 ring-1 transition-shadow focus:outline-none md:h-36`}
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
						className={`${!!icon ? 'left-12' : 'left-4'} pointer-events-none absolute top-4 text-foreground/40`}
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

export default FormTextarea;
