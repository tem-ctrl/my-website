import React, { FC, ReactNode } from 'react';

interface PrimaryButtonProps {
	className?: string;
	onClick: () => void;
	icon?: ReactNode;
	text?: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
	className = '',
	onClick = () => {},
	icon = <></>,
	text = 'button',
}) => {
	return (
		<button
			className={`${className} smm:text-sm text-white font-medium rounded-full h-10 px-3 md:px-5 flex justify-center items-center gap-1.5 md:gap-3 bg-primary/90 hover:bg-primary`}
			onClick={onClick}
		>
			<span>{icon}</span>
			<span>{text}</span>
		</button>
	);
};

export default PrimaryButton;