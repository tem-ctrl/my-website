import { FC } from 'react';
import { useTranslations } from 'next-intl';

interface AvailabilityBadgeProps {
	className?: string;
}

const AvailabilityBadge: FC<AvailabilityBadgeProps> = ({ className = '' }) => {
	const t = useTranslations('HomePage.hero');

	return (
		<span
			className={`${className} inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary-text`}
		>
			<span className="relative flex size-2">
				<span className="absolute inline-flex size-full animate-ping rounded-full bg-online opacity-75" />
				<span className="relative inline-flex size-2 rounded-full bg-online" />
			</span>
			{t('badge')}
		</span>
	);
};

export default AvailabilityBadge;
