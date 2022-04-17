import React, { useEffect, useState } from 'react';
import './Signup.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, provider } from '../FirebaseConfig/Firebase-config';
import { useLocation, useNavigate } from 'react-router-dom';
const Signup = () => {
	const [userInfo, setUserInfo] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [userError, setUserError] = useState({
		emailError: '',
		passwordError: '',
		confirmPasswordError: '',
		generalError: '',
	});

	// const [email, setEmail] = useState('');
	// const [password, setpassword] = useState('');
	// const [confirmPassword, setconfirmPassword] = useState('');
	// const [error, setError] = useState('');
	const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

	const handleEmail = event => {
		const emailREGEX = /\S+@\S+\.\S+/;
		const validEmail = emailREGEX.test(event.target.value);
		if (validEmail) {
			setUserInfo({ ...userInfo, email: event.target.value });
			setUserError({ ...userError, emailError: '' });
		} else {
			setUserError({ ...userError, emailError: 'Invalid email' });
			setUserInfo({ ...userInfo, email: '' });
		}
	};

	// for password
	const handlePassword = event => {
		const passwordREGEX = /.{6,}/;
		const validPassword = passwordREGEX.test(event.target.value);
		if (validPassword) {
			setUserInfo({ ...userInfo, password: event.target.value });
			setUserError({ ...userError, passwordError: '' });
		} else {
			setUserError({ ...userError, passwordError: 'minimum 6 charecter' });
			setUserInfo({ ...userInfo, password: '' });
		}
		// setpassword(event.target.value);
	};

	// for confirm password
	const handleConfirmPassword = event => {
		if (event.target.value === userInfo.password) {
			setUserInfo({ ...userInfo, confirmPassword: event.target.value });
			setUserError({ ...userError, confirmPasswordError: '' });
			// return;
		} else {
			setUserError({ ...userError, confirmPasswordError: 'Password do not match' });
			setUserInfo({ ...userInfo, confirmPassword: '' });
		}
	};

	const handleCreateUser = event => {
		event.preventDefault();
		createUserWithEmailAndPassword(userInfo.email, userInfo.password);
	};

	// valovabe singup hole home e jao
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	useEffect(() => {
		if (user) {
			navigate(from);
		}
	}, [user]);

	//.............

	return (
		<div className='container'>
			<div>
				<div className='row'>
					<div className='col-md-3'></div>
					<div className='col-md-6 signup-contain'>
						<div className='text-center'>
							<h1>Signup page</h1>
						</div>
						<form onSubmit={handleCreateUser} className='my-signup-form'>
							<div className='form-group'>
								<label htmlFor='exampleInputEmail1'>Email address</label>
								<input type='email' onChange={handleEmail} className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter email' />
								{userError?.emailError && <p className='signUpError'>{userError.emailError}</p>}
							</div>
							<div className='form-group'>
								<label htmlFor='exampleInputPassword1'>Password</label>
								<input type='password' onChange={handlePassword} className='form-control' id='exampleInputPassword1' placeholder='Password' />
								{userError?.passwordError && <p className='signUpError'>{userError.passwordError}</p>}
							</div>
							<div className='form-group'>
								<label htmlFor='exampleInputConfirmPassword'>Password</label>
								<input type='password' onChange={handleConfirmPassword} className='form-control' id='exampleInputPassword1' placeholder='Password' />
								{userError?.confirmPasswordError && <p className='signUpError'>{userError.confirmPasswordError}</p>}
							</div>
							<button type='submit' className='btn btn-secondary mt-2'>
								Submit
							</button>

							<p style={{ color: 'red' }}>{error?.message}</p>
							{/* <p style={{ color: 'blue' }}>{loading}</p> */}
						</form>
					</div>
					<div className='col-md-3'></div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
