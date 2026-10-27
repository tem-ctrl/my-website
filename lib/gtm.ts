type WindowWithDataLayer = Window & {
	dataLayer: Record<string, unknown>[];
};

declare const window: WindowWithDataLayer;

export const GTM_ID = process.env.NEXT_PUBLIC_GTM;

export const pageview = (url: string) => {
	if (typeof window.dataLayer !== 'undefined') {
		window.dataLayer.push({
			event: 'pageview',
			page: url,
		});
	} else {
		console.info({
			event: 'pageview',
			page: url,
		});
	}
};
