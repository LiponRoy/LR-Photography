import React from 'react';
import ContactMe from './ContactMe/ContactMe';
import HomeSlider from './HomeSlider/HomeSlider';
import Services from './Services/Services';

const Home = () => {
	return (
		<div>
			<HomeSlider></HomeSlider>
			<Services></Services>
			<ContactMe></ContactMe>
		</div>
	);
};

export default Home;
