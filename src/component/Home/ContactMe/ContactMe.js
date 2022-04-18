import React from 'react';
import './ContactMe.css';
const ContactMe = () => {
	return (
		<div className=' m-4'>
			<div className='contactMePlease'>
				<div class='topHeading'>
					<h2>Contact With Me </h2>
				</div>
				<div class='contactForm'>
					<form action=''>
						<input type='text' placeholder='Email' />
						<textArea placeholder='Message'></textArea>
						<button>Send</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactMe;
