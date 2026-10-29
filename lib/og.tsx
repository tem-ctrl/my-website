// Building blocks for the Open Graph / Twitter cards rendered with next/og.
// next/og supports a subset of CSS: every element with several children needs `display: flex`.
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { ReactNode } from 'react';
import { LogoMark } from '@/components/common/Logo';
import { SITE_URL } from '@/lib/constants';

export const OG_SIZE = { width: 1200, height: 630 };

// The dark theme of app/globals.css (next/og has no CSS variables)
export const ogColors = {
	background: '#02030f',
	backgroundSecond: '#070023',
	foreground: '#efefef',
	muted: '#c9c9d1',
	primary: '#8a2be2',
	primaryText: '#b98cf0',
	accent: '#e12afb',
	online: '#22c55e',
} as const;

export const ogGradient = `linear-gradient(135deg, ${ogColors.primary} 0%, ${ogColors.accent} 100%)`;

// next/og needs TTF/OTF data, not the site's WOFF2 (Roboto, like the site); passing fonts replaces its own
let fonts: Promise<[Buffer, Buffer]> | undefined;
const fontFile = (name: string) => readFile(join(process.cwd(), 'assets/fonts', name));

export const ogImageOptions = async () => {
	fonts ??= Promise.all([fontFile('Roboto-Regular.ttf'), fontFile('Roboto-Black.ttf')]);
	const [regular, black] = await fonts;

	return {
		...OG_SIZE,
		fonts: [
			{ name: 'Roboto', data: regular, weight: 400 as const },
			{ name: 'Roboto', data: black, weight: 900 as const },
		],
	};
};

// Inline an image from public/ as a data URL, using its real format (some files don't match their extension)
export const publicImageDataUrl = async (path: string) => {
	const data = await readFile(join(process.cwd(), 'public', path));
	const mime = data[0] === 0xff && data[1] === 0xd8 ? 'image/jpeg' : 'image/png';

	return `data:${mime};base64,${data.toString('base64')}`;
};

let portrait: Promise<string> | undefined;
export const portraitDataUrl = () => (portrait ??= publicImageDataUrl('assets/images/me.png'));

// The portrait in a circle with the brand-gradient ring, as in the home page hero
export const OgPortrait = ({ src, size }: { src: string; size: number }) => (
	<div
		style={{
			display: 'flex',
			padding: Math.round(size / 50),
			borderRadius: 9999,
			backgroundImage: ogGradient,
			boxShadow: `0 0 ${size / 4}px rgba(138, 43, 226, 0.45)`,
		}}
	>
		{/* eslint-disable-next-line @next/next/no-img-element -- rendered to an image by next/og */}
		<img
			src={src}
			alt=""
			width={size}
			height={size}
			style={{
				width: size,
				height: size,
				borderRadius: 9999,
				objectFit: 'cover',
				objectPosition: 'top',
				backgroundColor: ogColors.backgroundSecond,
			}}
		/>
	</div>
);

/** Logo + name on the left; with an avatar, the avatar takes the logo's place and the logo moves right */
export const OgFooter = ({ avatar }: { avatar?: string }) => (
	<div
		style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			fontSize: 26,
			color: ogColors.muted,
		}}
	>
		<div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
			{avatar ? <OgPortrait src={avatar} size={60} /> : <LogoMark size={56} />}
			<span style={{ fontSize: 30, fontWeight: 900, color: ogColors.foreground }}>
				Gilbert Temgoua
			</span>
		</div>
		<div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
			{avatar && <LogoMark size={40} />}
			<span>{SITE_URL.replace(/^https?:\/\//, '')}</span>
		</div>
	</div>
);

/** The full-bleed dark card every image is drawn on, with the site's purple glows */
export const OgFrame = ({ children }: { children: ReactNode }) => (
	<div
		style={{
			width: '100%',
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			padding: 64,
			gap: 32,
			color: ogColors.foreground,
			fontFamily: 'Roboto',
			backgroundColor: ogColors.background,
			backgroundImage:
				'radial-gradient(circle at 0% 0%, rgba(138, 43, 226, 0.45), transparent 55%), radial-gradient(circle at 100% 100%, rgba(225, 42, 251, 0.3), transparent 50%)',
		}}
	>
		{children}
	</div>
);

/** Small uppercase label above a card's title; `online` adds the green "available" dot */
export const OgKicker = ({ children, online }: { children: ReactNode; online?: boolean }) => (
	<div
		style={{
			display: 'flex',
			alignItems: 'center',
			alignSelf: 'flex-start',
			gap: 12,
			padding: '8px 20px',
			borderRadius: 999,
			fontSize: 22,
			letterSpacing: 3,
			textTransform: 'uppercase',
			color: ogColors.primaryText,
			border: '1px solid rgba(138, 43, 226, 0.6)',
			backgroundColor: 'rgba(138, 43, 226, 0.15)',
		}}
	>
		{online && (
			<div style={{ width: 12, height: 12, borderRadius: 999, backgroundColor: ogColors.online }} />
		)}
		{children}
	</div>
);

interface PageOgImageProps {
	kicker: string;
	title: string;
	text?: string;
	online?: boolean;
}

/** The card of a page: kicker, title and text on the left, the portrait on the right */
export const pageOgImage = async ({ kicker, title, text, online }: PageOgImageProps) =>
	new ImageResponse(
		<OgFrame>
			<div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: 56 }}>
				<div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 26 }}>
					<OgKicker online={online}>{kicker}</OgKicker>
					<div style={{ display: 'flex', fontSize: 66, fontWeight: 900, lineHeight: 1.08 }}>
						{title}
					</div>
					{text && (
						<div style={{ display: 'flex', fontSize: 30, lineHeight: 1.4, color: ogColors.muted }}>
							{text}
						</div>
					)}
				</div>
				<OgPortrait src={await portraitDataUrl()} size={340} />
			</div>
			<OgFooter />
		</OgFrame>,
		await ogImageOptions()
	);
