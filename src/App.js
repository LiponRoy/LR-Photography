import './App.css';
import Home from './component/Home/Home.js';
import About from './component/About/About.js';
import { Route, Routes } from 'react-router-dom';
import NotFound from './component/NotFound/NotFound';
import NavbarTwo from './component/Navbar/NavbarTwo';
import Signup from './component/Signup/Signup';
import Login from './component/Login/Login';
import Footer from './component/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<NavbarTwo></NavbarTwo>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
				{/* <Route path='/blog/:id' element={<About />} /> */}
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
