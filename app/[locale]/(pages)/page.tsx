import { Metadata } from 'next';
import { use } from 'react';
import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Photo from '@/components/common/Photo';
import PrimaryButtonLink from '@/components/common/PrimaryButtonLink';
import { PAGES } from '@/lib/routes';
import { BiSolidUser } from 'react-icons/bi';
import { BsBriefcaseFill } from 'react-icons/bs';

export const generateMetadata = async ({ params }: PageProps<'/[locale]'>): Promise<Metadata> => {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'HomePage' });

	return {
		title: t('title'),
		description: t('description'),
	};
};

const HomePage = ({ params }: PageProps<'/[locale]'>) => {
	const { locale } = use(params);

	setRequestLocale(locale);

	const t = useTranslations('HomePage');

	return (
		<main className="flex min-h-page items-center justify-start px-2.5 max-lg:flex-col max-lg:pt-10 md:px-10 lg:justify-center">
			<Photo />
			<div className="flex w-full flex-col items-start justify-center gap-3 text-lg max-lg:mt-4 lg:w-2/3">
				<p className="uppercase max-lg:mx-auto">{t('hi')}</p>
				<h1 className="mb-2 text-3xl uppercase md:mb-5 md:text-4xl">
					<span>{t('iAm')}</span> <span className="font-black text-primary">Gilbert Temgoua</span>
				</h1>
				<p>{t('whoIAm')}</p>
				<p>
					{t('whatIdo.firstPart')} <br className="max-md:hidden" />
					{t('whatIdo.secondPart')}
				</p>
				<div className="mt-5 flex items-center justify-around gap-2 max-md:w-full md:justify-center md:gap-5">
					<PrimaryButtonLink
						href={PAGES.aboutMe}
						text={t('moreButtonText')}
						icon={<BiSolidUser />}
						className="uppercase"
					/>
					<PrimaryButtonLink
						href={PAGES.projects}
						text={t('portfolioButtonText')}
						icon={<BsBriefcaseFill />}
						className="uppercase"
					/>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
