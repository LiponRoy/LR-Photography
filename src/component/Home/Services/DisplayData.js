import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
const DisplayData = ({ key, dat }) => {
	const navagate = useNavigate();
	const {
		id,
		title,
		description,
		image,
		persion: { name, age },
	} = dat;
	// getting data using props
	return (
		<div key={key} className='col-md-4'>
			{/* using bootstrap card and display props value */}
			<div class='card m-2'>
				<img className='card-img-top service-image' src={image} alt='Card image cap' width='200px' height='400px' />
				<div className='card-body'>
					<div className='cardText'>
						<span className='card-id'>ID No: {id}</span>
						<span className='card-title'>Title: {title}</span>
						<span className='card-title'>Name: {name}</span>
						<span className='card-title'>Age: {age}</span>
						<span className='card-desc'>{description}</span>
					</div>
					<a onClick={() => navagate('/checkOut')} href='#' class='btn btn-primary'>
						CLICK ME
					</a>
				</div>
			</div>
		</div>
	);
};

export default DisplayData;
