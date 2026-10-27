'use client';

import React, { Ref, TextareaHTMLAttributes, useState } from 'react';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

interface FormTextareaProps extends TextareaProps {
	className?: string;
	textareaClass?: string;
	iconClass?: string;
	icon?: React.ReactNode;
	ref?: Ref<HTMLTextAreaElement>;
}

const FormTextarea = ({
	className,
	icon,
	textareaClass,
	iconClass,
	ref,
	...restProps
}: FormTextareaProps) => {
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
				} scrollbar-none h-32 w-full overflow-scroll rounded-[28px] bg-field py-4 pr-4 ring-1 ring-field-ring focus:ring-1 focus:ring-primary focus:outline-none md:h-36`}
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

export default FormTextarea;
