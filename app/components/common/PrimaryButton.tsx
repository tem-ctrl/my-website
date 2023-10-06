'use client';

import React, { ReactNode, ButtonHTMLAttributes, forwardRef } from 'react';
import Ripples from 'react-ripples'

type Mybutton = ButtonHTMLAttributes<HTMLButtonElement>;

interface PrimaryButtonProps extends Mybutton {
	className?: string;
	icon?: ReactNode;
	text?: string;
}

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>((props, ref) => {
	const { className, icon, text, ...restProps } = props;

	return (
    <Ripples during={750} color='rgba(0,0,0,.4)' className='rounded-full'>
      <button
        className={`${className} smm:text-sm text-white font-medium rounded-full h-10 px-3 md:px-5 flex justify-center items-center gap-1.5 md:gap-3 bg-primary/90 hover:bg-primary`}
        ref={ref}
        {...restProps}
      >
        <span>{icon}</span>
        <span>{text}</span>
      </button>
    </Ripples>
	);
});

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
