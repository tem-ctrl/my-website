import { Metadata } from 'next';
import { Suspense } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';
import { pageMetadata } from '@/lib/seo';
import { PAGES } from '@/lib/routes';
import AvailabilityBadge from '@/components/common/AvailabilityBadge';
import InfoItem from '@/components/pages/about-me/InfoItem';
import PageHeader from '@/components/common/PageHeader';
import Photo from '@/components/common/Photo';
import Separator from '@/components/common/Separator';
import TimelineItem from '@/components/pages/about-me/TimelineItem';
import SkillGroups from '@/components/pages/about-me/SkillGroups';
import TimelineBlock from '@/components/pages/about-me/TimelineBlock';
import PrimaryButtonLink from '@/components/common/PrimaryButtonLink';
import { cvPath, EXPERIENCES } from '@/lib/constants';
import { formatMonth } from '@/lib/experience';
import { FaDownload } from 'react-icons/fa';

export const generateMetadata = async (): Promise<Metadata> => {
	const locale = await getLocale();
	const t = await getTranslations('AboutPage');

	return pageMetadata({
		locale,
		path: PAGES.aboutMe,
		title: t('title'),
		description: t('description'),
	});
};

const AboutPage = () => {
	const locale = useLocale();
	const t = useTranslations('AboutPage');

	const personalInfo = ['name', 'lastName', 'phone', 'email', 'country', 'city'];
	const professionalInfo = [
		'experience',
		'openToWork',
		'availability',
		'jobtype',
		'jobLocation',
		'relocateTo',
	];
	const experienceDesc = [
		[1, 2, 3],
		[1, 2, 3, 4, 5, 6, 7, 8],
		[1, 2, 3, 4, 5, 6],
	];
	const education = [1, 2, 3];

	return (
		<main className="mx-auto flex min-h-page w-full max-w-6xl flex-col items-center gap-12 py-10">
			<PageHeader
				simpleText={t('PageHeader.simpleText')}
				primaryText={t('PageHeader.primaryText')}
				tagline={t('PageHeader.tagline')}
			/>
			<div className="flex w-full items-start max-lg:items-center max-md:flex-col md:pt-3">
				<Photo />
				<div className="grid grid-cols-1 gap-x-8 gap-y-4 text-lg max-md:mt-5 lg:grid-cols-2">
					<AvailabilityBadge className="col-span-full max-md:justify-self-center" />
					<div className="col-span-1 flex flex-col gap-4">
						{personalInfo.map((info, i) => (
							<InfoItem
								key={`personal-info-${i}`}
								label={t(`personalInfo.${info}`)}
								value={t(`personalInfo.${info}Value`)}
							/>
						))}
					</div>
					<div className="col-span-1 flex flex-col gap-4">
						{professionalInfo.map((info, i) => {
							const label = t(`professionalInfo.${info}`);
							const value = t(`professionalInfo.${info}Value`);
							const key = `professional-info-${i}`;

							// Experience is computed from today's date, so it is rendered per request
							return info === 'experience' ? (
								<Suspense key={key} fallback={<InfoItem label={label} value="" />}>
									<InfoItem label={label} value={value} isExperience />
								</Suspense>
							) : (
								<InfoItem key={key} label={label} value={value} />
							);
						})}
					</div>
					<PrimaryButtonLink
						text={t('downloadCvButton')}
						href={cvPath(locale)}
						icon={<FaDownload />}
						className="col-span-full w-fit! text-sm max-md:justify-self-center"
						download
					/>
				</div>
			</div>
			<Separator />
			<div className="grid w-full items-start gap-10 md:grid-cols-2">
				<TimelineBlock title={t('experienceTitle')}>
					{EXPERIENCES.map(({ start, end }, index) => {
						const i = index + 1;

						return (
							<TimelineItem
								key={`experience-${i}`}
								startDate={formatMonth(start, locale)}
								endDate={end && formatMonth(end, locale)}
								title={t(`experience-${i}.title`)}
								location={t(`experience-${i}.location`)}
								place={t(`experience-${i}.place`)}
								description={experienceDesc[index].map((j) =>
									t(`experience-${i}.description.desc-${j}`)
								)}
							/>
						);
					})}
				</TimelineBlock>

				<TimelineBlock title={t('educationTitle')}>
					{education.map((i) => (
						<TimelineItem
							key={`education-${i}`}
							startDate={t(`education-${i}.startDate`)}
							endDate={t(`education-${i}.endDate`)}
							place={t(`education-${i}.place`)}
							title={t(`education-${i}.title`)}
							location={t(`education-${i}.location`)}
							description={t(`education-${i}.description`)}
						/>
					))}
				</TimelineBlock>
			</div>
			<Separator />
			<section className="w-full">
				<h2 className="mb-10 text-2xl font-black uppercase">{t('skills')}</h2>
				<SkillGroups />
			</section>
		</main>
	);
};

export default AboutPage;
