import { FC } from 'react';

const Footer: FC = () => {
	return (
		<footer className="flex h-12.5 w-full items-center justify-between">
			&copy; {new Date().getFullYear()} Gilbert Temgoua
		</footer>
	);
};

export default Footer;
