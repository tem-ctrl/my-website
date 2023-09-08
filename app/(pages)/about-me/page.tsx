'use client';

import PrimaryButton from '@/app/components/common/PrimaryButton';
import Separator from '@/app/components/common/Separator';
import SkillItem from '@/app/components/common/SkillItem';
import { FaDownload } from 'react-icons/fa';

const AboutPage = () => {
	return (
		<main className="hFill py-10 flex flex-col gap-5 items-center w-full">
			<h1 className="text-5xl uppercase font-[900] text-center">
				About <span className="text-primary">Me</span>
			</h1>
			<Separator />
			<div className="flex items-center justify-center gap-5">
				<div className="w-10 h-1 bg-primary" />
				<p className="uppercase text-sm">I build well-crafted modern websites, I love what I do</p>
				<div className="w-10 h-1 bg-primary" />
			</div>
			<div className="flex items-start w-full pt-10">
				<div className="w-2/5 flex items-start justify-center">
					<img
						src="/assets/images/me.png"
						alt="Gilbert Temgoua"
						className="h-[400px] object-fill scale-x-[-1]"
					/>
				</div>
				<div className="grid grid-cols-2 gap-x-8 gap-y-4 text-lg">
					<div className="col-span-1 flex flex-col gap-4">
						<p>
							First Name: <i>Gilbert</i>
						</p>
						<p>
							Last Name: <i>Temgoua Donkoo</i>
						</p>
						<p>
							Phone: <i>+237 651 331 062</i>
						</p>
						<p>
							email:{' '}
							<i>
								<a href="mailto:gilbertemgoua@gmail.com">gilbertemgoua@gmail.com</a>
							</i>
						</p>
						<p>
							Nationality: <i>Cameroon</i>
						</p>
						<p>
							City: <i>Yaounde</i>
						</p>
						<PrimaryButton
							text="DOWNLOAD MY CV"
							onClick={() => {}}
							icon={<FaDownload />}
							className="!w-fit text-sm"
						/>
					</div>
					<div className="col-span-1 flex flex-col gap-4">
						<p>
							Experience: <i>1 year</i>
						</p>
						<p>
							Open to work: <i>Yes</i>
						</p>
						<p>
							Job type: <i>Full time, part time, freelance</i>
						</p>
						<p>
							Job location: <i>Fully remote, on site</i>
						</p>
						<p>
							Willing to relocate to: <i>Anywhere</i>
						</p>
					</div>
				</div>
			</div>
			<Separator />

			<div>
				<SkillItem skill="HTML" value={90} />
				<SkillItem skill="CSS" value={80} />
			</div>
		</main>
	);
};

export default AboutPage;
