import { ImageResponse } from 'next/og';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { PROJECTS } from '@/lib/constants';
import {
	OG_SIZE,
	OgFooter,
	OgFrame,
	OgKicker,
	ogColors,
	ogImageOptions,
	portraitDataUrl,
	publicImageDataUrl,
} from '@/lib/og';

export const alt = 'Gilbert Temgoua - Web Developer project';
export const size = OG_SIZE;
export const contentType = 'image/png';

export const generateStaticParams = () =>
	routing.locales.flatMap((locale) => PROJECTS.map(({ slug }) => ({ locale, slug })));

// Social preview: project type, title, summary and stack next to the screenshot, signed with the portrait
const OpengraphImage = async ({
	params,
}: {
	params: Promise<{ locale: string; slug: string }>;
}) => {
	const { locale, slug } = await params;
	const project = PROJECTS.find((item) => item.slug === slug) ?? PROJECTS[0];
	const t = await getTranslations({ locale, namespace: `projects.${project.slug}` });
	const types = await getTranslations({ locale, namespace: 'ProjectsPage.filters' });
	const screenshot = await publicImageDataUrl(`assets/images/projects/${project.image}`);

	return new ImageResponse(
		<OgFrame>
			<div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: 48 }}>
				<div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 22 }}>
					{project.type && <OgKicker>{types(project.type)}</OgKicker>}
					<div
						style={{ display: 'flex', fontSize: 60, fontWeight: 900, textTransform: 'uppercase' }}
					>
						{t('title')}
					</div>
					<div style={{ display: 'flex', fontSize: 26, lineHeight: 1.4, color: ogColors.muted }}>
						{t('summary')}
					</div>
					<div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
						{project.technologies?.slice(0, 4).map((tech) => (
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
				<img
					src={screenshot}
					alt=""
					width={460}
					height={345}
					style={{
						width: 460,
						height: 345,
						objectFit: 'cover',
						objectPosition: 'top',
						borderRadius: 24,
						border: '2px solid rgba(138, 43, 226, 0.6)',
					}}
				/>
			</div>
			<OgFooter avatar={await portraitDataUrl()} />
		</OgFrame>,
		await ogImageOptions()
	);
};

export default OpengraphImage;
