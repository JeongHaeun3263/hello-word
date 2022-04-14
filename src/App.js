import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalContextProvider from './context/GlobalContext';
import Add from './pages/add/Add';
import Header from './components/header/Header';
import Test from './pages/test/Test';
import WordList from './pages/word-list/WordList';
import './App.css';
import Footer from './components/footer/Footer';

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
