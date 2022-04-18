import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaRegWindowClose, FaSearch } from 'react-icons/fa';
import './Navbar.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../FirebaseConfig/Firebase-config';
import { signOut } from 'firebase/auth';
const NavbarTwo = () => {
	const [user] = useAuthState(auth);
	const [showLinks, setShowLink] = useState(false);

	const closeFunc = () => {
		setShowLink(false);
	};
	const signOutTask = () => {
		signOut(auth);
	};
	return (
		<>
			<div className='container-fluid fixed-top'>
				<div className='liponNav '>
					<div className='leftSide'>
						<div className='logo'>
							<span>LR Photography</span>
						</div>
					</div>
					<div className='middleSide'></div>
					<div className='rightSide'>
						<div className='toggleBut' onClick={() => setShowLink(!showLinks)}>
							{showLinks ? <FaRegWindowClose></FaRegWindowClose> : <FaBars></FaBars>}
						</div>
						<div className='allLink' id={showLinks ? 'notHidden' : ''}>
							<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : ' myLink')} to='/'>
								Home
							</NavLink>

							<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : 'myLink')} to='/about'>
								About
							</NavLink>
							<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : 'myLink')} to='/blog'>
								Blog
							</NavLink>
							<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : 'myLink')} to='/signup'>
								Signup
							</NavLink>
							{user ? (
								<a onClick={signOutTask} className='signout-btn'>
									Signout
								</a>
							) : (
								<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : 'myLink')} to='/login'>
									Login
								</NavLink>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavbarTwo;
