import React from 'react';
import './Loading.css';
const Loading = () => {
	return (
		<div className='my-loading'>
			<div class='spinner-border text-dark' role='status'>
				<span class='sr-only'>Loading...</span>
			</div>
			<h1>loading.....</h1>
		</div>
	);
};

export default Loading;
