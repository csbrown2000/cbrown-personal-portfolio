import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeDisplay from './components/HomeDisplay';
import Projects from './components/Projects';

function App() {
	return(
	<Router>
		<div className='index'>
			<Navbar/>
				<Routes>
					<Route exact path='/about'>
						
						{/* About Page */}
					</Route>
					<Route exact path='/projects' element={<Projects/>}>
						{/* {// Projects page} */}
					</Route>
						
					<Route exact path='/' element={<HomeDisplay/>}/>
				</Routes>
			
			<Footer/>
		</div>


	</Router>
	);
}

export default App;
