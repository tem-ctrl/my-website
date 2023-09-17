import PageHeader from '@/app/components/common/PageHeader';
import ContactItem from '@/app/components/pages/contact/ContactItem';
import SocialMedia from '@/app/components/pages/contact/SacialMedia';
import { SOCIAL_MEDIA } from '@/app/utils/constants';
import { ComponentProps } from 'react';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BsGithub, BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

type C = ComponentProps<typeof ContactItem>['item'];

const contactItems: C[] = [
	{
		title: 'Phone',
		value: '+237 651 331 062',
		icon: <BsWhatsapp />,
	},
	{
		title: 'Email',
		value: 'gilbertemgoua@gmail.com',
		icon: <HiOutlineMail />,
	},
	{
		title: 'LinkedIn',
		value: '@temgoua',
		icon: <BiLogoLinkedin />,
	},
	{
		title: 'Github',
		value: '@tem-ctrl',
		icon: <BsGithub />,
	},
];

const ContactPage = () => {
	return (
		<main className="scrollbar-none overflow-y-scroll px-2.5 md:px-[100px] hFill py-10 flex flex-col gap-12 items-center w-full">
			<PageHeader
				simpleText="get"
				primaryText="in touch"
				tagline="I build well-crafted modern websites, I love what I do"
			/>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 w-full">
				<aside className="col-span-1">
					<div className="flex flex-col gap-5">
						{contactItems.map((item) => (
							<ContactItem key={item.title} item={item} />
						))}
					</div>
					<section className="w-full">
						<h2 className="text-xl mb-2">Social Profiles</h2>
						<div className="flex gap-2 items-center w-full flex-wrap">
							{SOCIAL_MEDIA.map((media) => (
								<SocialMedia key={`social-media-${media.name}`} {...media} />
							))}
						</div>
					</section>
				</aside>
				<main className="lg:col-span-2 h-28 border-2"></main>
			</div>
		</main>
	);
};

export default ContactPage;
