import React from 'react';
import './Blog.css';

const Blog = () => {
	return (
		<div>
			<div className='blogPart'>
				<div className=''>
					<div className='QA'>
						<h4>Difference between Authentication and Authorization ?</h4>
						<h5>Authorization:</h5>
						<p>
							Authorization is the process of giving someone the ability to access a resource. Of course, this definition may sound obscure, but many situations in real life can help illustrate what authorization means so that you can apply those concepts to computer systems. A good example is house ownership.<br></br>
							There are four types of Authorization – API keys, Basic Auth, HMAC, and OAuth
						</p>
						<h5>Authorization:</h5>
						<p>authentication is the process of verifying the identity of a person or device. A common example is entering a username and password when you log in to a website. Entering the correct login information lets the website know 1) who you are and 2) that it is actually you accessing the website.</p>
					</div>
					<div className='QA'>
						<h4>Why are you using firebase ?</h4>
						<p>Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.Compared to Firebase, MySQL is better for multi-row transactions. On the other hand, Firebase is a satisfactory choice when it comes to managing huge data sets because NoSQL horizontally scales data and it is much faster than MySQL. App development platform from Google</p>
						<h4>What Other option do you have to for Authentication ?</h4>
						<p> Password-based authentication. Passwords are the most common methods of authentication, Multi-factor authentication,Certificate-based authentication, Biometric authentication,Token-based authentication.</p>
					</div>
					<div className='QA'>
						<h4>What other services does firebase provide other than authentication ?</h4>
						<p>Cloud Firestore, Cloud Functions, Authentication., Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
