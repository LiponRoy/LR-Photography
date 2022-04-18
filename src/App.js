import './App.css';
import Home from './component/Home/Home.js';
import About from './component/About/About.js';
import { Route, Routes } from 'react-router-dom';
import NotFound from './component/NotFound/NotFound';
import NavbarTwo from './component/Navbar/NavbarTwo';
import Signup from './component/Signup/Signup';
import Login from './component/Login/Login';
import Footer from './component/Footer/Footer';
import CheckOut from './component/CheckOut/CheckOut';
import RequireAuth from './component/Require-Auth/RequireAuth';
import Blog from './component/Blog/Blog';

function App() {
	return (
		<div className='App'>
			<NavbarTwo></NavbarTwo>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/blog' element={<Blog />} />

				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
				<Route
					path='/checkOut'
					element={
						<RequireAuth>
							<CheckOut />
						</RequireAuth>
					}
				/>

				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
