import React, { FC } from 'react';

interface ContactItemProps {
	className?: string;
	item: {
		title: string;
		icon: JSX.Element;
		value: string;
	};
}

const ContactItem: FC<ContactItemProps> = ({ className = '', item }) => {
	return (
		<div className={`${className} flex flex-col gap-2 items-start`}>
			<p>{item.title}</p>
			<div className="flex gap-2 jstify-start items-center">
				<span className="text-primary">{item.icon}</span>
				<p>{item.value}</p>
			</div>
		</div>
	);
};

export default ContactItem;
