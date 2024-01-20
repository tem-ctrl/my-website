import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useInitAOS = () => {
	useEffect(() => {
		AOS.init({
			easing: 'ease-out-quad',
			duration: 800,
		});
		AOS.refresh();
	}, []);

	return null;
};

export default useInitAOS;
