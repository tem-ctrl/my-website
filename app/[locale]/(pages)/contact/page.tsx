import PageHeader from '@/app/[locale]/components/common/PageHeader';

const ContactPage = () => {
	return (
		<main className="scrollbar-none overflow-y-scroll px-2.5 md:px-[100px] hFill py-10 flex flex-col gap-12 items-center w-full">
			<PageHeader
				simpleText="get"
				primaryText="in touch"
				tagline="I build well-crafted modern websites, I love what I do"
			/>
			<h1 className="text-3xl">Contact page</h1>
		</main>
	);
};

export default ContactPage;
