import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalContextProvider from './context/GlobalContext';
import Add from './components/Add';
import Header from './components/Header';
import Test from './components/Test';
import WordList from './components/WordList';
import './App.css';

function App() {
	return (
		<GlobalContextProvider>
			<Router>
				<Header />
				<Routes>
					<Route exact path='/' element={<WordList />} />
					<Route path='/test' element={<Test />} />
					<Route path='/add' element={<Add />} />
				</Routes>
			</Router>
		</GlobalContextProvider>
	);
}

export default App;
