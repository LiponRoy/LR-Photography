import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
const DisplayData = ({ key, dat }) => {
	const navagate = useNavigate();
	const { title, description, image } = dat;
	// getting data using props
	return (
		<div key={key} className='col-md-4'>
			{/* using bootstrap card and display props value */}
			<div class='card m-4'>
				<img className='card-img-top service-image' src={image} alt='Card image cap' width='200px' height='400px' />
				<div className='card-body card-body-me'>
					<div className='cardText cardText-me m-4'>
						<span className='card-title'>{title}</span>
						<span className='card-desc '>{description}</span>
					</div>
					<a onClick={() => navagate('/checkOut')} href='#' class='card-btn'>
						Check Out Please
					</a>
				</div>
			</div>
		</div>
	);
};

export default DisplayData;
