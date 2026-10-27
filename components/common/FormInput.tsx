'use client';

import React, { InputHTMLAttributes, Ref, useState } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

interface FormInputProps extends InputProps {
	className?: string;
	inputClass?: string;
	iconClass?: string;
	icon?: React.ReactNode;
	ref?: Ref<HTMLInputElement>;
}

const FormInput = ({
	className,
	icon,
	inputClass,
	iconClass,
	ref,
	...restProps
}: FormInputProps) => {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<div
			className={`${className} ${!icon && 'contents'} relative`}
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
		>
			<input
				className={`${inputClass} ${
					!!icon ? 'pl-12' : 'pl-4'
				} h-12 w-full rounded-full bg-field text-foreground/80 ring-1 ring-field-ring focus:ring-primary focus:outline-none`}
				ref={ref}
				{...restProps}
			/>
			{!!icon && (
				<span
					className={`${iconClass} ${isFocused && 'text-primary'} absolute top-4 left-4 inline text-lg`}
				>
					{icon}
				</span>
			)}
		</div>
	);
};

export default FormInput;
