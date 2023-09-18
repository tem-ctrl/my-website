import React, { forwardRef, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

interface FormInputProps extends InputProps {
	className?: string;
	inputClass?: string;
	iconClass?: string;
	icon?: React.ReactNode;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {
	const { className, icon, inputClass, iconClass, ...restProps } = props;

	return (
		<div className={`${className} ${!icon && 'contents'} relative`}>
			<input
				className={`${inputClass} ${
					!!icon ? 'pl-12' : 'pl-4'
				} bg-neutral-300 dark:bg-neutral-800 rounded-full h-12 w-full focus:outline-none focus:ring-1 focus:ring-primary`}
				ref={ref}
				{...restProps}
			/>
			{!!icon && (
				<span className={`${iconClass} inline absolute top-4 left-4 text-lg`}>{icon}</span>
			)}
		</div>
	);
});

FormInput.displayName = 'FormInput';

export default FormInput;
