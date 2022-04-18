import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { FaVolumeUp } from 'react-icons/fa';
import Button from '../button/Button';
import WordItem from '../word-item/WordItem';
import Modal from '../modal/Modal';
import NoteForm from '../note-form/NoteForm';
import './WordCard.css';

const WordCard = ({ word }) => {
	const [showModal, setShowModal] = useState(false);

	const { dispatch } = useContext(GlobalContext);

	const playAudio = () => {
		const audio = new Audio(word.phonetics[0].audio);
		audio.play();
	};

	return (
		<div key={word.id} className='word-card'>
			<div className='word-card__header'>
				<h1 className='title'>{word.word}</h1>
				<div className='audio' onClick={playAudio}>
					<FaVolumeUp />
				</div>
			</div>
			<div>{word.note && word.note}</div>
			<details className='definitions'>
				<summary>click to see definitions</summary>
				<WordItem word={word} />
			</details>
			<div className='btns'>
				<Button onClick={() => setShowModal(true)} btnName='Note' />
				<Button
					className='danger'
					onClick={() =>
						dispatch({
							type: 'REMOVE_WORD_FROM_WORDLIST',
							id: word.id,
						})
					}
					btnName='delete'
				/>
			</div>
			<div>
				{showModal && (
					<Modal onClick={() => setShowModal(false)}>
						<NoteForm word={word} closeModal={() => setShowModal(false)} />
					</Modal>
				)}
			</div>
		</div>
	);
};

export default WordCard;
