import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalContextProvider from './context/GlobalContext';
import Add from './components/Add';
import Header from './components/Header';
import Test from './components/Test';
import WordList from './components/WordList';
import './App.css';
import Footer from './components/Footer';

function App() {
	return (
		<GlobalContextProvider>
			<Router basename={process.env.PUBLIC_URL}>
				<Header />
				<Routes>
					<Route exact path='/' element={<WordList />} />
					<Route path='/test' element={<Test />} />
					<Route path='/add' element={<Add />} />
				</Routes>
				<Footer />
			</Router>
		</GlobalContextProvider>
	);
}

export default App;
