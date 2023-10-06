'use client'

import React, { ReactNode, AnchorHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';
import { MdOpenInNew } from 'react-icons/md';
import Ripples from 'react-ripples'

type MyButtonLink = AnchorHTMLAttributes<HTMLAnchorElement>;

interface PrimaryButtonLinkProps extends MyButtonLink {
	className?: string;
	icon?: ReactNode;
	text: string;
	href: string;
	newTab?: boolean;
}

const PrimaryButtonLink = forwardRef<HTMLAnchorElement, PrimaryButtonLinkProps>((props, ref) => {
	const { className, icon, text, href, newTab, ...restProps } = props;
	const blank = newTab && href !== '/';

	return (
    <Ripples during={1000} color='rgba(255,255,255,.4)' className='rounded-full'>
      <Link
        className={`${className} smm:text-sm text-white font-medium rounded-full h-10 px-3 md:px-5 flex justify-center items-center gap-1.5 md:gap-3 bg-primary/90 hover:bg-primary`}
        ref={ref}
        href={href}
        {...restProps}
        target={blank ? '_blank' : '_self'}
      >
        {!!icon && <span>{icon}</span>}
        <span>
          {text}
          {blank && <MdOpenInNew className="ml-1 inline" />}
        </span>
      </Link>
    </Ripples>
	);
});

PrimaryButtonLink.displayName = 'PrimaryButtonLink';

export default PrimaryButtonLink;
