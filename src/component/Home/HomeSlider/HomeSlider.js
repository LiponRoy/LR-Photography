import React from 'react';
import './HomeSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import img0 from '../../assets/slideImg/s1.jpg';
import img1 from '../../assets/slideImg/s2.jpg';
import img2 from '../../assets/slideImg/s3.jpg';
import img3 from '../../assets/slideImg/s4.jpg';

const HomeSlider = () => {
	const dataMe = [
		{
			name: 'Personal Photography',

			desc: 'Lorem ipsum dolor sit amet ',
			img: img0,
		},
		{
			name: 'Birthday Photography',

			desc: 'Lorem ipsum dolor sit amet ',
			img: img1,
		},
		{
			name: 'Wedding Photography',

			desc: 'Lorem ipsum dolor sit amet',
			img: img2,
		},
		{
			name: 'Food Photography',

			desc: 'Lorem ipsum dolor sit amet',
			img: img3,
		},
	];

	let properticeMe = {
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		//koyta kore show korbe
		// slidesToShow:3,
		//arrow press korle koyta kore asbe
		// slidesToScroll:1,
		// vertical:true,
		// verticalSwiping:true,
		pauseOnHover: false,
		fade: true,
		touchMove: true,
		//initialSlide:3,
		// infinite:false,
		// customPaging={i => {
		// 	return (
		// 		<div>
		// 			<div className="castomMe"></div>
		// 		</div>
		// 	);
		// }}
		// dotsClass="slick-dots castomMe"
	};
	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-md-0'>
					{/* <div className='leftside'>
						<span>WELCOME</span>
						<span>TO</span>
						<span>My photography</span>
					</div> */}
				</div>
				<div className='col-md-12'>
					<div className='mainSld'>
						<Slider {...properticeMe}>
							{dataMe.map(daa => (
								<div className='carddMe'>
									<div className='iteams'>
										<div className='imgPart'>
											<img
												src={daa.img}
												alt='no img found'
												// className=" img-fluid"
											/>
											<div className='textAll'>
												<div className=''>
													<h1>{daa.name}</h1>
													<span>{daa.desc}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

//end

export default HomeSlider;
