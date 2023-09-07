import { FC } from 'react';
// import Link from 'next/link'

const Footer: FC = () => {
	return (
		<footer className="flex justify-between items-center h-[50px] w-full">
			&copy; {new Date().getFullYear()} Gilbert Temgoua
		</footer>
	);
};

export default Footer;
