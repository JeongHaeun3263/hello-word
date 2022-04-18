import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import './NoteForm.css';

const NoteForm = ({ word, closeModal }) => {
	const [noteInput, setNoteInput] = useState('');

	const { wordlist, dispatch } = useContext(GlobalContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		word.note = noteInput;
		console.log(word.note);
		// dispatch({
		// 	type: 'ADD_NOTE_TO_WORDITEM',
		// 	word: {...word, },
		// });
		closeModal();
	};

	return (
		<form className='note-form' onSubmit={handleSubmit}>
			<textarea
				className='note'
				value={noteInput}
				placeholder='Add some note...'
				rows='5'
				cols='33'
				onChange={(e) => setNoteInput(e.target.value)}
			/>
			<button className='btn'>Save</button>
		</form>
	);
};

export default NoteForm;
