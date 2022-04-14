import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { FaVolumeUp } from 'react-icons/fa';
import Button from '../button/Button';
import WordItem from '../word-item/WordItem';
import './WordCard.css';

const WordCard = ({ word }) => {
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
			<details className='definitions'>
				<summary>click to see definitions</summary>
				<WordItem word={word} />
			</details>
			<div className='btns'>
				<Button
					className='danger'
					onClick={() =>
						dispatch({
							type: 'REMOVE_WORD_FROM_WORDLIST',
							id: word.id,
						})
					}
				>
					delete
				</Button>
			</div>
		</div>
	);
};

export default WordCard;