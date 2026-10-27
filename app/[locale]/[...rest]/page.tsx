import { notFound } from 'next/navigation';

// Unknown paths under a valid locale render [locale]/not-found.tsx
const CatchAllPage = () => {
	notFound();
};

export default CatchAllPage;
