import InfoItem from '@/app/components/pages/about-me/InfoItem';
import PageHeader from '@/app/components/common/PageHeader';
import Photo from '@/app/components/common/Photo';
import Separator from '@/app/components/common/Separator';
import TimelineItem from '@/app/components/pages/about-me/TimelineItem';
import { SKILLS } from '@/app/utils/constants';
import { PageProps } from '@/app/utils/types';
import { createTranslator, useLocale, useTranslations } from 'next-intl';
import SkillItem from '@/app/components/pages/about-me/SkillItem';
import TimelineBlock from '@/app/components/pages/about-me/TimelineBlock';
import { Metadata, NextPage } from 'next';
import { getMessages } from '@/app/utils/getMessages';
import PrimaryButtonLink from '@/app/components/common/PrimaryButtonLink';
import { FaDownload } from 'react-icons/fa';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
	const messages = await getMessages(locale);
	const t = createTranslator({ locale, messages });

	return {
		title: t('AboutPage.title'),
		description: t('AboutPage.description'),
	};
};

const AboutPage: NextPage = () => {
	const t = useTranslations('AboutPage');
	const locale = useLocale();

	const personalInfo = ['name', 'lastName', 'phone', 'email', 'country', 'city'];
	const professionalInfo = [
		'experience',
		'openToWork',
		'availability',
		'jobtype',
		'jobLocation',
		'relocateTo',
	];
	const experiences = [1];
	const experienceDesc = [[1, 2, 3, 4, 5, 6]];
	const education = [1, 2, 3];

	return (
		<main className="scrollbar-none overflow-y-scroll px-2.5 md:px-[100px] lg:px-[120px] hFill py-10 flex flex-col gap-12 items-center w-full">
			<PageHeader
				simpleText={t('PageHeader.simpleText')}
				primaryText={t('PageHeader.primaryText')}
				tagline={t('PageHeader.tagline')}
			/>
			<div className="flex smm:flex-col mdm:items-center items-start w-full md:pt-3">
				<Photo />
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 text-lg smm:mt-5">
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
						{professionalInfo.map((info, i) => (
							<InfoItem
								key={`professional-info-${i}`}
								label={t(`professionalInfo.${info}`)}
								value={t(`professionalInfo.${info}Value`)}
							/>
						))}
					</div>
					<PrimaryButtonLink
						text={t('downloadCvButton')}
						href={`cvs/gilbert_temgoua_cv_${locale}.pdf`}
						icon={<FaDownload />}
						className={`!w-fit text-sm col-span-full smm:justify-self-center`}
						newTab
					/>
				</div>
			</div>
			<Separator />
			<div className="flex smm:flex-col items-start justify-start gap-10">
				<TimelineBlock title="Experience">
					{experiences.map((i) => (
						<TimelineItem
							key={`experience-${i}`}
							startDate={t(`experience-${i}.startDate`)}
							endDate={t(`experience-${i}.endDate`)}
							title={t(`experience-${i}.title`)}
							location={t(`experience-${i}.location`)}
							place={t(`experience-${i}.place`)}
							description={experienceDesc[i - 1].map((j) =>
								t(`experience-${i}.description.desc-${j}`)
							)}
						/>
					))}
				</TimelineBlock>

				<TimelineBlock title="Education">
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
				<h2 className="uppercase text-2xl mb-16">{t('skills')}</h2>
				<div className="grid md:grid-cols-3 gap-x-8 gap-y-20 w-full">
					{SKILLS.map((skill, i) => (
						<SkillItem key={`skill-${i}`} {...skill} />
					))}
				</div>
			</section>
		</main>
	);
};

export default AboutPage;
