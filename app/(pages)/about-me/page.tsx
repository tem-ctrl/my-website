'use client';

import PageHeader from '@/app/components/common/PageHeader';
import PrimaryButton from '@/app/components/common/PrimaryButton';
import Separator from '@/app/components/common/Separator';
import SkillItem from '@/app/components/common/SkillItem';
import TimelineBlock from '@/app/components/common/TimelineBlock';
import TimelineItem from '@/app/components/common/TimelineItem';
import { FaDownload } from 'react-icons/fa';

const AboutPage = () => {
	return (
		<main className="scrollbar-none overflow-y-scroll px-2.5 md:px-[100px] hFill py-10 flex flex-col gap-8 items-center w-full">
			<PageHeader
				simpleText="About"
				primaryText="Me"
				tagline="I build well-crafted modern websites, I love what I do"
			/>
			<div className="flex items-start w-full pt-3">
				<div className="w-2/5 flex items-start justify-center">
					<img
						src="/assets/images/me.png"
						alt="Gilbert Temgoua"
						className="h-[400px] object-fill scale-x-[-1]"
					/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg">
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
							Experience: <i>6 months</i>
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
			<div className="flex items-start justify-start gap-10">
				<TimelineBlock title="Experience">
					<TimelineItem
						startDate="Apr 2023"
						place="Bantubeat"
						title="Frontend developer (freelance)"
						location="Fully remote"
						description={[
							'Transform Figma design into web pages using NextJs, Typescript and Tailwind CSS',
							'Review, clean and refactor code to ensure excellent code quality over the entire apps',
							'Manage front-end developement team',
							'Ensure flawless communication with APIs (REST and GraphQL) using either client side or server side rendering',
							'Fix bugs',
							'Help new comers in getting involved in the projects',
						]}
					/>
				</TimelineBlock>

				<TimelineBlock title="Education">
					<TimelineItem
						startDate="Oct 2022"
						endDate="Jan 2023"
						title="Web developer training path"
						place="Openclassrooms"
						location="Online"
						description={
							'Web developer path with a strong emphasis on frontend (ReactJs) and an intoduction to backend (NodeJs)'
						}
					/>
					<TimelineItem
						startDate="Jan 2019"
						endDate="Aug 2021"
						title="Python and web development training"
						place="self-taught"
						location="Yaounde, Cameroon"
						description="Learn Python, HTML, CSS and JavaScript from beginner to advanced level"
					/>
					<TimelineItem
						startDate="Oct 2013"
						endDate="Jul 2018"
						title="Bachelor degree"
						place="University of Dschang"
						location="Dschang, Cameroon"
						description="Bachelor degree in Physics (electronics as major)"
					/>
				</TimelineBlock>
			</div>
			<Separator />
			<section className="w-full">
				<h2 className="uppercase text-2xl mb-16">Skills</h2>
				<div className="grid grid-cols-3 gap-x-8 gap-y-20 w-full">
					<SkillItem skill="HTML" value={90} />
					<SkillItem skill="CSS" value={80} />
					<SkillItem skill="JavaScript" value={80} />
					<SkillItem skill="Sass" value={70} />
					<SkillItem skill="Tailwind" value={80} />
					<SkillItem skill="ReactJs" value={70} />
					<SkillItem skill="NextJs" value={80} />
					<SkillItem skill="NodeJs" value={50} />
					<SkillItem skill="Php" value={50} />
					<SkillItem skill="Laravel" value={30} />
					<SkillItem skill="Python" value={80} />
				</div>
			</section>
		</main>
	);
};

export default AboutPage;
