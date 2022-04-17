import React, { useState } from 'react';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, provider } from '../FirebaseConfig/Firebase-config';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
	const [userInfo, setUserInfo] = useState({
		email: '',
		password: '',
	});
	const [userError, setUserError] = useState({
		email: '',
		password: '',
		general: '',
	});

	// const [email, setEmail] = useState('');
	// const [password, setpassword] = useState('');
	// const [Myerror, setMyerror] = useState('');

	// const [error, setError] = useState('');
	const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
	const navagate = useNavigate();

	const handleEmailonChange = event => {
		const emailREGEX = /\S+@\S+\.\S+/;
		const validEmail = emailREGEX.test(event.target.value);
		if (validEmail) {
			setUserInfo({ ...userInfo, email: event.target.value });
			setUserError({ ...userError, email: '' });
		} else {
			setUserError({ ...userError, email: 'Invalid email' });
			setUserInfo({ ...userInfo, email: '' });
		}
	};
	const handlePasswordonChange = event => {
		const passwordREGEX = /.{6,}/;
		const validPassword = passwordREGEX.test(event.target.value);
		if (validPassword) {
			setUserInfo({ ...userInfo, password: event.target.value });
			setUserError({ ...userError, password: '' });
		} else {
			setUserError({ ...userError, password: 'minimum 6 charecter' });
			setUserInfo({ ...userInfo, password: '' });
		}
		// setpassword(event.target.value);
	};

	const handleSignIn = event => {
		event.preventDefault();
		signInWithEmailAndPassword(userInfo.email, userInfo.password);
	};

	// Jodi user thake tahole eivabe korte hobe, eikhane home e jabe
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';
	if (user) {
		navagate(from, { replace: true });
	}

	const goToSignup = () => {
		navagate('/signup');
	};
	return (
		<div>
			<div className='container'></div>
			<div className='text-center'>
				<h1>Login page</h1>
			</div>
			<div className='row'>
				<div className='col-md-3'></div>
				<div className='col-md-6 signup-contain'>
					<form onSubmit={handleSignIn} className='my-signup-form'>
						<div className='form-group'>
							<label for='exampleInputEmail1'>Email address</label>
							<input type='email' onChange={handleEmailonChange} className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter email' />
							{userError?.email && <p className='epError'>{userError.email}</p>}
						</div>
						<div className='form-group'>
							<label for='exampleInputPassword1'>Password</label>
							<input type='password' onChange={handlePasswordonChange} className='form-control' id='exampleInputPassword1' placeholder='Password' />
							{userError?.password && <p className='epError'>{userError.password}</p>}
						</div>
						{/* <p style={{ color: 'red' }}>{error?.message}</p>
						{loading && <p>Loading....</p>} */}
						<button type='submit' className='btn btn-secondary mt-2'>
							Submit
						</button>
						{/* {Myerror && <p className='epError'>{Myerror}</p>} */}
						<p>
							Don't have account ?{' '}
							<span onClick={goToSignup} className='goToSignupPage'>
								Create Account
							</span>
						</p>
					</form>
				</div>
				<div className='col-md-3'></div>
			</div>
			<div />
		</div>
	);
};

export default Login;
