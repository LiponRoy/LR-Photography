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
							<p>I want to be a Softwer engineer. I love computer programming. I have completed my Ms degree in computer science and engineering from jagannath university dhaka, I know verious type of programming language such as java, c,c++, javascript, go and many more, I know React js, express js, node js, mongodb database, sql database,mysql database and so on.A portfolio is not a resume. It is a showcase of completed work rather than a description of experience. For a developer, developing an online portfolio is the perfect way to flaunt the tricks of your trade. A web developer's portfolio is the evidence to support the claims you have made in your resume.</p>
						</div>
					</div>
				</div>
				<div className='col-md-3'></div>
			</div>
		</div>
	);
};

export default About;
