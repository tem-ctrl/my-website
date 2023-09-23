'use client';

import React, { forwardRef, TextareaHTMLAttributes, useState } from 'react';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

interface FormTextareaProps extends TextareaProps {
	className?: string;
	textareaClass?: string;
	iconClass?: string;
	icon?: React.ReactNode;
}

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>((props, ref) => {
	const { className, icon, textareaClass, iconClass, ...restProps } = props;
	const [isFocused, setIsFocused] = useState(false);

	return (
		<div
			className={`${className} ${!icon && 'contents'} relative`}
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
		>
			<textarea
				className={`${textareaClass} ${
					!!icon ? 'pl-12' : 'pl-4'
				} rounded-[28px] ring-1 ring-neutral-300 dark:ring-neutral-900 bg-neutral-200 dark:bg-neutral-900 py-4 pl-12 pr-4 h-32 md:h-36 w-full focus:outline-none focus:ring-1 focus:ring-primary overflow-scroll scrollbar-none`}
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

FormTextarea.displayName = 'FormTextarea';

export default FormTextarea;
