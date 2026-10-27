const Background = () => {
	return (
		<div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
			<div className="absolute inset-0 bg-dots" />
			<div className="absolute -top-48 -left-40 size-160 rounded-full bg-glow blur-[120px] motion-safe:animate-drift" />
			<div className="absolute top-1/3 -right-48 size-144 rounded-full bg-glow blur-[120px] motion-safe:animate-drift-reverse" />
			<div className="absolute inset-0 bg-grain opacity-(--grain-opacity)" />
		</div>
	);
};

export default Background;
