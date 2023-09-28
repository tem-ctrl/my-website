import React, { ReactNode, AnchorHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';
import { MdOpenInNew } from 'react-icons/md';

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

	return (
		<Link
			className={`${className} smm:text-sm text-white font-medium rounded-full h-10 px-3 md:px-5 flex justify-center items-center gap-1.5 md:gap-3 bg-primary/90 hover:bg-primary`}
			ref={ref}
			href={href}
			{...restProps}
			target={newTab ? '_blank' : '_self'}
		>
			<span>{icon}</span>
			<span>
				{text}
				{newTab && <MdOpenInNew className="ml-1 inline" />}
			</span>
		</Link>
	);
});

PrimaryButtonLink.displayName = 'PrimaryButtonLink';

export default PrimaryButtonLink;
