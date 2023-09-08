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
			<div className="h-full w-1/3 flex justify-center items-center">
				<span>Photo</span>
			</div>
			<div className="flex flex-col justify-center items-start gap-3 text-lg">
				<p>HI!</p>
				<h1 className="text-4xl uppercase">
					i'm am <span className="text-yellow-600 font-[900]">Gilbert Temgoua</span>
				</h1>
				<p>I'm a passionate web developer based in Yaounde, Cameroon</p>
				<div className="flex justify-center items-center gap-5">
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
