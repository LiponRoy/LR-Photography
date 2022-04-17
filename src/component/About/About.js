import React from 'react';
import './About.css';
const About = () => {
	return (
		<div>
			<div className='row aboutMe'>
				<div className='col-md-3'></div>
				<div className='col-md-6'>
					<div>
						<div className='me-image'>
							<img src='img/me.jpg' width='400px' alt='no-image' />
						</div>
						<div className='alltext'>
							<span>Ami kichu kori</span>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quam voluptas error perspiciatis laboriosam distinctio modi dolores ut quisquam sunt cum animi facere illo deleniti porro, tempore id impedit nihil.</p>
						</div>
					</div>
				</div>
				<div className='col-md-3'></div>
			</div>
		</div>
	);
};

export default About;
