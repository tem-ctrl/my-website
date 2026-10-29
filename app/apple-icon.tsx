import { ImageResponse } from 'next/og';
import { LogoMark } from '@/components/common/Logo';
import { ogGradient } from '@/lib/og';

// Home-screen icon for iOS (must be a PNG). iOS rounds the corners itself, so the same gradient
// fills the square behind the mark's own rounded corners.
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

const AppleIcon = () =>
	new ImageResponse(
		<div style={{ display: 'flex', width: '100%', height: '100%', backgroundImage: ogGradient }}>
			<LogoMark size={180} />
		</div>,
		size
	);

export default AppleIcon;
