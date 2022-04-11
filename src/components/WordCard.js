import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { FaVolumeUp } from 'react-icons/fa';

const WordCard = ({ word }) => {
	const definitions = word.meanings.map((item) => item.definitions);

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
				<ul>
					{definitions[0].map((definition, i) => (
						<li key={i}>{definition.definition}</li>
					))}
				</ul>
			</details>
			<div className='btns'>
				<button
					className='btn'
					onClick={() =>
						dispatch({
							type: 'REMOVE_WORD_FROM_WORDLIST',
							id: word.id,
						})
					}
				>
					delete
				</button>
			</div>
		</div>
	);
};

export default WordCard;
