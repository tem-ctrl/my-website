'use client';

import PrimaryButton from '@/app/components/common/PrimaryButton';
import { PAGES } from '@/app/config';
import { useRouter } from 'next/navigation';
import { BsBriefcaseFill } from 'react-icons/bs';
import { BiSolidUser } from 'react-icons/bi';

const HomePage = () => {
	const router = useRouter();

	return (
		<main className="hFill flex items-center justify-center bg-radialBg">
			<div className="h-full w-2/5 flex justify-center items-center pt-5">
				<img
					src="/assets/images/me.png"
					alt="Gilbert Temgoua"
					className="h-full object-cover scale-x-[-1]"
				/>
			</div>
			<div className="flex flex-col justify-center items-start gap-3 text-lg">
				<p>HI!</p>
				<h1 className="text-4xl uppercase">
					i am <span className="text-primary font-[900]">Gilbert Temgoua</span>
				</h1>
				<p>I'm a passionate web developer based in Yaounde, Cameroon</p>
				<p>
					I strive to build impactful and attractive web applications leveraging <br />
					best code standards and latest technologies.
				</p>
				<div className="flex justify-center items-center gap-5 mt-5">
					<PrimaryButton
						onClick={() => router.replace(PAGES.aboutMe)}
						text="MORE ABOUT ME"
						icon={<BiSolidUser />}
					/>
					<PrimaryButton
						onClick={() => router.replace(PAGES.projects)}
						text="PORTFOLIO"
						icon={<BsBriefcaseFill />}
					/>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
