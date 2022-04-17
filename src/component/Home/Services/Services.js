import React from 'react';
import './Services.css';
import DisplayData from './DisplayData';
import data from '../../../myData.json';

const Services = () => {
	return (
		<div>
			<div className='row'>
				<div className='heading'>
					<br />
					<h1>My services</h1>
					<br />
				</div>
				{/* use Map function for data */}
				{data.map((dat, key) => (
					// pass data to DisplayData component
					//<DisplayData key={key} id={dat.id} title={dat.title} desc={dat.description} imgm={dat.image}></DisplayData>
					<DisplayData key={key} dat={dat}></DisplayData>
				))}
			</div>
		</div>
	);
};

export default Services;
