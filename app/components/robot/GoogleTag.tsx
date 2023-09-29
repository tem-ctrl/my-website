'use client';

import { GTM_ID, pageview } from '@/app/utils/gtm';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

const GoogleTag = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		if (pathname) {
			pageview(pathname);
		}
	}, [pathname, searchParams]);

	if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
		return null;
	}

	return (
		<>
			<noscript>
				<iframe
					src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
					height="0"
					width="0"
					style={{ display: 'none', visibility: 'hidden' }}
				/>
			</noscript>
			<Script async src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`} />
			<Script
				id="gtm-script"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', ${GTM_ID});
          `,
				}}
			/>
		</>
	);
};

export default GoogleTag;
