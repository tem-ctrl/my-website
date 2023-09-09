'use client';

import PrimaryButton from '@/app/components/common/PrimaryButton';
import { PAGES } from '@/app/config';
import { useRouter } from 'next/navigation';
import { BsBriefcaseFill } from 'react-icons/bs';
import { BiSolidUser } from 'react-icons/bi';

const HomePage = () => {
	const router = useRouter();

	return (
		<main className="scrollbar-none overflow-y-scroll px-2.5 md:px-10 hFill flex smm:flex-col items-center justify-start md:justify-center bg-radialBg">
			<div className="h-full w-full md:w-2/5 flex justify-center items-center pt-5 smm:pb-5">
				<img
					src="/assets/images/me.png"
					alt="Gilbert Temgoua"
					className="h-44 md:h-[300px] object-cover scale-x-[-1] rounded-full"
					loading="lazy"
				/>
			</div>
			<div className="smm:mt-4 flex flex-col justify-center items-start gap-3 text-lg">
				<p className="smm:mx-auto">HI!</p>
				<h1 className="text-3xl md:text-4xl uppercase mb-2 md:mb-5">
					i am <span className="text-primary font-[900]">Gilbert Temgoua</span>
				</h1>
				<p>I'm a passionate web developer based in Yaounde, Cameroon.</p>
				<p>
					I strive to build impactful and attractive web applications leveraging{' '}
					<br className="smm:hidden" />
					best code standards and latest technologies.
				</p>
				<div className="smm:w-full flex justify-around md:justify-center items-center gap-2 md:gap-5 mt-5">
					<PrimaryButton
						onClick={() => router.replace(PAGES.aboutMe)}
						text="MORE ABOUT ME"
						icon={<BiSolidUser />}
					/>
					<PrimaryButton
						onClick={() => router.replace(PAGES.projects)}
						text="MY PORTFOLIO"
						icon={<BsBriefcaseFill />}
					/>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
