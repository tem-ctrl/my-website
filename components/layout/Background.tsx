const Background = () => {
	return (
		<div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
			<div className="absolute inset-0 bg-dots" />
			{/* Glows are scaled down on small screens, where full size they would tint the whole viewport */}
			<div className="absolute -top-32 -left-32 size-80 rounded-full bg-glow opacity-60 blur-[80px] motion-safe:animate-drift md:-top-48 md:-left-40 md:size-160 md:opacity-100 md:blur-[120px]" />
			<div className="absolute top-1/2 -right-32 size-72 rounded-full bg-glow opacity-60 blur-[80px] motion-safe:animate-drift-reverse md:top-1/3 md:-right-48 md:size-144 md:opacity-100 md:blur-[120px]" />
			<div className="absolute inset-0 bg-grain opacity-(--grain-opacity)" />
		</div>
	);
};

export default Background;
