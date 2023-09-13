'use client';

import InfoItem from '@/app/components/common/InfoItem';
import PageHeader from '@/app/components/common/PageHeader';
import PrimaryButton from '@/app/components/common/PrimaryButton';
// import SocialMedia from '@/app/components/common/SacialMedia';
import Separator from '@/app/components/common/Separator';
import SkillItem from '@/app/components/common/SkillItem';
import TimelineBlock from '@/app/components/common/TimelineBlock';
import TimelineItem from '@/app/components/common/TimelineItem';
import {
	EDUCATION,
	EXPERIENCE,
	MY_PERSONAL_INFO,
	MY_PROFESSIONAL_INFO,
	SKILLS,
	// SOCIAL_MEDIA
} from '@/app/utils/constants';
import { FaDownload } from 'react-icons/fa';

const AboutPage = () => {
	return (
		<main className="scrollbar-none overflow-y-scroll px-2.5 md:px-[100px] hFill py-10 flex flex-col gap-12 items-center w-full">
			<PageHeader
				simpleText="About"
				primaryText="Me"
				tagline="I build well-crafted modern websites, I love what I do"
			/>
			<div className="flex smm:flex-col smm:items-center items-start w-full md:pt-3">
				<div className="w-100px md:w-2/5 flex md:items-start justify-center">
					<img
						src="/assets/images/me.png"
						alt="Gilbert Temgoua"
						className="h-[200px] md:h-[400px] object-fill scale-x-[-1]"
					/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg smm:mt-5">
					<div className="col-span-1 flex flex-col gap-4">
						{MY_PERSONAL_INFO.map((info, i) => (
							<InfoItem key={`personal-info-${i}`} {...info} />
						))}
					</div>
					<div className="col-span-1 flex flex-col gap-4">
						{MY_PROFESSIONAL_INFO.map((info, i) => (
							<InfoItem key={`professional-info-${i}`} {...info} />
						))}
					</div>
					<PrimaryButton
						text="DOWNLOAD MY CV"
						onClick={() => {}}
						icon={<FaDownload />}
						className="!w-fit text-sm col-span-full smm:justify-self-center"
					/>
				</div>
			</div>
			<Separator />
			<div className="flex smm:flex-col items-start justify-start gap-10">
				<TimelineBlock title="Experience">
					{EXPERIENCE.map((experience, i) => (
						<TimelineItem key={`experience-${i}`} {...experience} />
					))}
				</TimelineBlock>

				<TimelineBlock title="Education">
					{EDUCATION.map((education, i) => (
						<TimelineItem key={`education-${i}`} {...education} />
					))}
				</TimelineBlock>
			</div>
			<Separator />
			<section className="w-full">
				<h2 className="uppercase text-2xl mb-16">Skills</h2>
				<div className="grid md:grid-cols-3 gap-x-8 gap-y-20 w-full">
					{SKILLS.map((skill, i) => (
						<SkillItem key={`skill-${i}`} {...skill} />
					))}
				</div>
			</section>
			{/* <Separator />
      <section className="w-full">
        <h2 className="uppercase text-2xl mb-10">Social Media</h2>
        <div className="flex justify-between items-center w-full flex-wrap">
          {SOCIAL_MEDIA.map(media => <SocialMedia key={`social-media-${media.name}`}  {...media}/>)}
				</div>
      </section> */}
		</main>
	);
};

export default AboutPage;
