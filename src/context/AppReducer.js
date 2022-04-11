export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_WORD_TO_WORDLIST':
			return {
				...state,
				wordlist: [action.word, ...state.wordlist],
			};
		case 'REMOVE_WORD_FROM_WORDLIST':
			return {
				...state,
				wordlist: state.wordlist.filter((word) => word.id !== action.id),
			};
		default:
			return state;
	}
};
