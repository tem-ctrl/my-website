import { FC } from 'react';
// import Link from 'next/link'

const Footer: FC = () => {
	return (
		<footer className="flex justify-between items-center h-12.5 w-full">
			&copy; {new Date().getFullYear()} Gilbert Temgoua
		</footer>
	);
};

export default Footer;
