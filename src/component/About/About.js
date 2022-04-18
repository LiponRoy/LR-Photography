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
							<img className=' img-thumbnail' src='img/me.jpg' width='300px' alt='no-image' />
						</div>
						<div className='alltext'>
							<span>Lipon Roy</span>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quam voluptas error perspiciatis laboriosam distinctio modi dolores ut quisquam sunt cum animi facere illo deleniti porro, tempore id impedit nihil.lorem.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quam voluptas error perspiciatis laboriosam distinctio modi dolores ut quisquam sunt cum animi facere illo deleniti porro, tempore id impedit nihil.lorem.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quam voluptas error perspiciatis laboriosam distinctio modi dolores ut quisquam sunt cum animi facere illo deleniti porro, tempore id impedit nihil.lorem</p>
						</div>
					</div>
				</div>
				<div className='col-md-3'></div>
			</div>
		</div>
	);
};

export default About;
