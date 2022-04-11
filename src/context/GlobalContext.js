import React, { createContext, useReducer, useEffect } from 'react';
import { AppReducer } from './AppReducer';

// initial state
const initialState = {
	wordlist: localStorage.getItem('hello-word-list')
		? JSON.parse(localStorage.getItem('hello-word-list'))
		: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
const GlobalContextProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	useEffect(() => {
		localStorage.setItem('hello-word-list', JSON.stringify(state.wordlist));
	}, [state]);

	return (
		<GlobalContext.Provider
			value={{
				wordlist: state.wordlist,
				dispatch,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
