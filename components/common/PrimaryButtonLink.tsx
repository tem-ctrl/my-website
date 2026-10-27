import React, { ReactNode, AnchorHTMLAttributes, Ref } from 'react';
import Link from 'next/link';
import { MdOpenInNew } from 'react-icons/md';

type MyButtonLink = AnchorHTMLAttributes<HTMLAnchorElement>;

interface PrimaryButtonLinkProps extends MyButtonLink {
	className?: string;
	icon?: ReactNode;
	text: string;
	href: string;
	newTab?: boolean;
	ref?: Ref<HTMLAnchorElement>;
}

const PrimaryButtonLink = ({
	className,
	icon,
	text,
	href,
	newTab,
	ref,
	...restProps
}: PrimaryButtonLinkProps) => {
	const blank = newTab && href !== '/';

	return (
		<Link
			className={`${className} flex h-10 items-center justify-center gap-1.5 rounded-full bg-primary/90 px-3 font-medium text-white hover:bg-primary max-md:text-sm md:gap-3 md:px-5`}
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
	);
};

export default PrimaryButtonLink;
