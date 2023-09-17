'use client';

import PrimaryButton from '@/app/components/common/PrimaryButton';
import { PAGES } from '@/app/config';
import { useRouter } from 'next-intl/client';
import { BsBriefcaseFill } from 'react-icons/bs';
import { BiSolidUser } from 'react-icons/bi';
import Photo from '@/app/components/common/Photo';
import { useLocale, useTranslations } from 'next-intl';

// export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
// 	const messages = await getMessages(locale);
// 	const t = createTranslator({ locale, messages });

// 	return {
// 		title: t('RootLayout.title'),
// 		description: t('RootLayout.description'),
// 	};
// };

// export const metadata: Metadata = {
//   title: 'Home - Gilbert Temgoua',
//   description: 'I am a passionate web developer based in Yaounde, Cameroon. I have a strong knowlegde of the ReactJs and NextJS ecosystem. I\'m open to work immediately.'
// }

const HomePage = () => {
	const router = useRouter();
	const locale = useLocale();
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
				<div className="smm:w-full flex justify-around md:justify-center items-center gap-2 md:gap-5 mt-5">
					<PrimaryButton
						onClick={() => router.push(PAGES.aboutMe, { locale })}
						text={t('moreButtonText')}
						icon={<BiSolidUser />}
						uppercase
					/>
					<PrimaryButton
						onClick={() => router.push(PAGES.projects, { locale })}
						text={t('portfolioButtonText')}
						icon={<BsBriefcaseFill />}
						uppercase
					/>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
