'use client';

import { ReactNode, ButtonHTMLAttributes, Ref } from 'react';

type Mybutton = ButtonHTMLAttributes<HTMLButtonElement>;

interface PrimaryButtonProps extends Mybutton {
	className?: string;
	icon?: ReactNode;
	text?: string;
	ref?: Ref<HTMLButtonElement>;
}

const PrimaryButton = ({ className, icon, text, ref, ...restProps }: PrimaryButtonProps) => {
	return (
		<button
			className={`${className} flex h-10 items-center justify-center gap-1.5 rounded-full bg-primary/90 px-3 font-medium text-white hover:bg-primary max-md:text-sm md:gap-3 md:px-5`}
			ref={ref}
			{...restProps}
		>
			<span>{icon}</span>
			<span>{text}</span>
		</button>
	);
};

export default PrimaryButton;
