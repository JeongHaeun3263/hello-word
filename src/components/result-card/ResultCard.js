import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { v4 as uuidv4 } from 'uuid';
import { FaVolumeUp } from 'react-icons/fa';
import WordItem from '../word-item/WordItem';
import './ResultCard.css';

const ResultCard = ({ word }) => {
	const { wordlist, dispatch } = useContext(GlobalContext);

	let savedWord = wordlist.find((o) => o.word === word.word);
	const saveButtonDisabled = savedWord ? true : false;

	const playAudio = () => {
		const audio = new Audio(word.phonetics[0].audio);
		audio.play();
	};

	return (
		<div className='result-card'>
			<div className='header'>
				<h1 className='title'>{word.word}</h1>
				<span className='audio' onClick={playAudio}>
					<FaVolumeUp />
				</span>
			</div>

			<button
				onClick={() =>
					dispatch({
						type: 'ADD_WORD_TO_WORDLIST',
						word: { ...word, id: uuidv4(), note: '' },
					})
				}
				disabled={saveButtonDisabled}
				className='btn'
			>
				Add To Word List
			</button>
			<WordItem word={word} />
		</div>
	);
};

export default ResultCard;
