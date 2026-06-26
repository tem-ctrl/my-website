import { Metadata, NextPage } from 'next';
import Photo from '@/components/common/Photo';
import { useTranslations } from 'next-intl';
import { PageProps } from '@/utils/types';
import { getTranslations } from 'next-intl/server';
import PrimaryButtonLink from '@/components/common/PrimaryButtonLink';
import { PAGES } from '@/config';
import { BiSolidUser } from 'react-icons/bi';
import { BsBriefcaseFill } from 'react-icons/bs';

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'HomePage' });

	return { title: t('title'), description: t('description') };
};

const HomePage: NextPage = () => {
	const t = useTranslations('HomePage');

	return (
		<main className="scrollbar-none overflow-y-scroll pt-10 md:pt-0 px-2.5 md:px-10 hFill flex flex-col md:flex-row items-center justify-start lg:justify-center">
			<Photo />
			<div className="mt-4 md:mt-0 w-full lg:w-2/3 flex flex-col justify-center items-start gap-3 text-lg">
				<p className="mx-auto md:mx-0 uppercase">{t('hi')}</p>
				<h1 className="text-3xl md:text-4xl uppercase mb-2 md:mb-5">
					<span>{t('iAm')}</span> <span className="text-primary font-black">Gilbert Temgoua</span>
				</h1>
				<p>{t('whoIAm')}</p>
				<p>
					{t('whatIdo.firstPart')} <br className="hidden sm:inline" />
					{t('whatIdo.secondPart')}
				</p>
				<div
					className={`w-full md:w-fit flex justify-around md:justify-center items-center gap-2 md:gap-5 mt-5`}
				>
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
