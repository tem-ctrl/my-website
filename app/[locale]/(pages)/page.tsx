import { Metadata, NextPage } from 'next';
import Photo from '@/app/components/common/Photo';
import { createTranslator, useTranslations } from 'next-intl';
import { PageProps } from '@/app/utils/types';
import { getMessages } from 'next-intl/server';
import PrimaryButtonLink from '@/app/components/common/PrimaryButtonLink';
import { PAGES } from '@/app/config';
import { BiSolidUser } from 'react-icons/bi';
import { BsBriefcaseFill } from 'react-icons/bs';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
	const messages = await getMessages(locale);
	const t = createTranslator({ locale, messages });

	return {
		title: t('HomePage.title'),
		description: t('HomePage.description'),
	};
};

const HomePage: NextPage = () => {
	const t = useTranslations('HomePage');

	return (
		<main className="scrollbar-none overflow-y-scroll mdm:pt-10 px-2.5 md:px-10 hFill flex mdm:flex-col items-center justify-start lg:justify-center">
			<Photo />
			<div className="mdm:mt-4 w-full lg:w-2/3 flex flex-col justify-center items-start gap-3 text-lg">
				<p className="mdm:mx-auto uppercase">{t('hi')}</p>
				<h1 className="text-3xl md:text-4xl uppercase mb-2 md:mb-5">
					<span>{t('iAm')}</span> <span className="text-primary font-[900]">Gilbert Temgoua</span>
				</h1>
				<p>{t('whoIAm')}</p>
				<p>
					{t('whatIdo.firstPart')} <br className="smm:hidden" />
					{t('whatIdo.secondPart')}
				</p>
				<div
					className={`smm:w-full flex justify-around md:justify-center items-center gap-2 md:gap-5 mt-5`}
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
