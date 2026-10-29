import { FC, useId } from 'react';

interface LogoMarkProps {
	className?: string;
	size?: number;
	/** id of the gradient: must be unique in the page (next/og cards can keep the default) */
	gradientId?: string;
}

/**
 * The "GT" monogram on a brand-gradient tile (primary to accent, see app/globals.css).
 * Plain SVG without hooks, so next/og can draw it too; app/icon.svg is the same drawing.
 */
export const LogoMark: FC<LogoMarkProps> = ({
	className = '',
	size = 32,
	gradientId = 'logo-gradient',
}) => (
	<svg className={className} width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
		<defs>
			<linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
				<stop offset="0" stopColor="#8a2be2" />
				<stop offset="1" stopColor="#e12afb" />
			</linearGradient>
		</defs>
		<rect width="64" height="64" rx="16" fill={`url(#${gradientId})`} />
		<path
			d="M27.9 24.3A10 10 0 1 0 31.5 32H24M38.5 22H52.5M45.5 22V42"
			fill="none"
			stroke="#fff"
			strokeWidth="5.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

// Mark + wordmark, for the header
const Logo: FC = () => {
	const gradientId = useId();

	return (
		<span className="flex items-center gap-2.5">
			<LogoMark size={36} gradientId={gradientId} />
			<span className="text-lg leading-none font-black tracking-tight whitespace-nowrap">
				Gilbert{' '}
				<span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
					Temgoua
				</span>
			</span>
		</span>
	);
};

export default Logo;
