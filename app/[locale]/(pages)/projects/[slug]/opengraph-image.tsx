import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { PROJECTS } from '@/lib/constants';

export const alt = 'Gilbert Temgoua - Web Developer project';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export const generateStaticParams = () =>
	routing.locales.flatMap((locale) => PROJECTS.map(({ slug }) => ({ locale, slug })));

// Inline the screenshot as a data URL, using its real format (some files don't match their extension)
const screenshotDataUrl = async (image: string) => {
	const data = await readFile(join(process.cwd(), 'public/assets/images/projects', image));
	const mime = data[0] === 0xff && data[1] === 0xd8 ? 'image/jpeg' : 'image/png';

	return `data:${mime};base64,${data.toString('base64')}`;
};

// Social preview: brand background, project title, summary and stack, with the screenshot
const OpengraphImage = async ({
	params,
}: {
	params: Promise<{ locale: string; slug: string }>;
}) => {
	const { locale, slug } = await params;
	const project = PROJECTS.find((item) => item.slug === slug) ?? PROJECTS[0];
	const t = await getTranslations({ locale, namespace: `projects.${project.slug}` });
	const types = await getTranslations({ locale, namespace: 'ProjectsPage.filters' });
	const screenshot = await screenshotDataUrl(project.image);

	return new ImageResponse(
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				padding: 64,
				gap: 48,
				color: '#efefef',
				backgroundColor: '#02030f',
				backgroundImage:
					'radial-gradient(circle at 0% 0%, rgba(138, 43, 226, 0.45), transparent 55%), radial-gradient(circle at 100% 100%, rgba(217, 70, 239, 0.3), transparent 50%)',
			}}
		>
			<div style={{ display: 'flex', flexDirection: 'column', width: 560, gap: 24 }}>
				<div style={{ display: 'flex', fontSize: 22, letterSpacing: 4, color: '#b98cf0' }}>
					GILBERT TEMGOUA · PORTFOLIO
				</div>
				{project.type && (
					<div
						style={{
							display: 'flex',
							alignSelf: 'flex-start',
							padding: '6px 18px',
							borderRadius: 999,
							fontSize: 22,
							backgroundColor: project.type === 'education' ? '#1f2937' : '#8a2be2',
						}}
					>
						{types(project.type)}
					</div>
				)}
				<div style={{ display: 'flex', fontSize: 72, fontWeight: 800, textTransform: 'uppercase' }}>
					{t('title')}
				</div>
				<div style={{ display: 'flex', fontSize: 28, lineHeight: 1.4, color: '#c9c9d1' }}>
					{t('summary')}
				</div>
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 'auto' }}>
					{project.technologies?.slice(0, 5).map((tech) => (
						<div
							key={tech}
							style={{
								display: 'flex',
								padding: '6px 14px',
								borderRadius: 999,
								fontSize: 20,
								color: '#d8b8ff',
								border: '1px solid rgba(138, 43, 226, 0.6)',
								backgroundColor: 'rgba(138, 43, 226, 0.15)',
							}}
						>
							{tech}
						</div>
					))}
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<img
					src={screenshot}
					alt=""
					width={480}
					height={360}
					style={{
						width: 480,
						height: 360,
						objectFit: 'cover',
						objectPosition: 'top',
						borderRadius: 24,
						border: '2px solid rgba(138, 43, 226, 0.6)',
					}}
				/>
			</div>
		</div>,
		size
	);
};

export default OpengraphImage;
