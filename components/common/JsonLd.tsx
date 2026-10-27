import React, { FC } from 'react';

interface JsonLdProps {
	data: Record<string, unknown>;
}

// Structured data for search engines; `<` is escaped so the JSON can't close the script tag
const JsonLd: FC<JsonLdProps> = ({ data }) => {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
		/>
	);
};

export default JsonLd;
