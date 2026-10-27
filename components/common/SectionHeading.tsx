import { FC } from 'react';
import Reveal from '@/components/common/Reveal';

interface SectionHeadingProps {
	className?: string;
	title: string;
	subtitle?: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({ className = '', title, subtitle }) => {
	return (
		<Reveal className={`${className} flex flex-col items-center gap-3 text-center`}>
			<h2 className="text-3xl font-black uppercase md:text-4xl">{title}</h2>
			<div className="h-1 w-16 rounded-full bg-linear-to-r from-primary to-fuchsia-500" />
			{subtitle && <p className="max-w-xl text-foreground/70">{subtitle}</p>}
		</Reveal>
	);
};

export default SectionHeading;
