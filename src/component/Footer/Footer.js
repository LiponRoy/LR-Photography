import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaSearch } from 'react-icons/fa';
const Footer = () => {
	return (
		<div className='footer-body'>
			<div className='row'>
				<div className='col-md-4'>
					<div className='footer_leftSide'>
						<div className='locationIteam'>
							<FaSearch></FaSearch>
							<span className=' m-2'>mirpur 1, Dhaka 1207</span>
						</div>
						<div className='locationIteam'>
							<FaSearch></FaSearch>
							<span className=' m-2'>+88 01734010550</span>
						</div>
						<div className='locationIteam'>
							<FaSearch></FaSearch>
							<span className=' m-2'>liponbdbd@gmail.com</span>
						</div>
					</div>
				</div>
				<div className='col-md-4'>
					<div className='footer_middleSide'>
						<span>Abut myself</span>
						<p className=' mx-5 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nemo facere voluptatem ab vitae consequuntur assumenda, ad, hic deserunt expedita architecto. Eaque optio odit nihil asperiores. Velit est accusantium porro!</p>
						<div className='socialLink'>
							<FaFacebook className=' mx-3 '></FaFacebook>
							<FaTwitter className=' mx-3 '></FaTwitter>
							<FaLinkedin className=' mx-3 '></FaLinkedin>
						</div>
					</div>
				</div>
				<div className='col-md-4'>
					<div className='footer_rightSide'>
						<span>this is left side</span>
						<span>this is left side</span>
						<span>this is left side</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
