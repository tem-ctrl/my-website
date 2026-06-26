import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useInitAOS = () => {
	useEffect(() => {
		AOS.init({
			easing: 'ease-out-quad',
			duration: 800,
			disable: 'mobile'
		});
		AOS.refresh();

	// Refresh calculations when images load
	window.addEventListener('load', AOS.refresh);
	
	return () => window.removeEventListener('load', AOS.refresh);
	}, []);
};

export default useInitAOS;
