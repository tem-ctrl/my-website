import React, { forwardRef, InputHTMLAttributes, useState } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

interface FormInputProps extends InputProps {
	className?: string;
	inputClass?: string;
	iconClass?: string;
	icon?: React.ReactNode;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {
	const { className, icon, inputClass, iconClass, ...restProps } = props;
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
				} text-light/80 dark:text-dark/80 ring-1 ring-neutral-300 dark:ring-neutral-900 bg-neutral-200 dark:bg-neutral-900 rounded-full h-12 w-full focus:outline-none focus:ring-primary`}
				ref={ref}
				{...restProps}
			/>
			{!!icon && (
				<span
					className={`${iconClass} ${
						isFocused && 'text-primary'
					} inline absolute top-4 left-4 text-lg`}
				>
					{icon}
				</span>
			)}
		</div>
	);
});

FormInput.displayName = 'FormInput';

export default FormInput;
