import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { v4 as uuidv4 } from 'uuid';
import { FaCheck } from 'react-icons/fa';

const ResultCard = ({ word }) => {
	const { wordlist, dispatch } = useContext(GlobalContext);

	const title = word.word;
	const definitions = word.meanings.map((item) => item.definitions);

	let savedWord = wordlist.find((o) => o.word === word.word);
	const saveButtonDisabled = savedWord ? true : false;

	return (
		<div className='result-card'>
			<h1 className='title'>{title}</h1>
			<ul className='definitions-list'>
				{definitions[0].map((definition) => (
					<li>
						<FaCheck /> {definition.definition}
					</li>
				))}
			</ul>
			<div className='controls'>
				<button
					onClick={() =>
						dispatch({
							type: 'ADD_WORD_TO_WORDLIST',
							word: { ...word, id: uuidv4() },
						})
					}
					disabled={saveButtonDisabled}
					className='btn'
				>
					Add To Word List
				</button>
			</div>
		</div>
	);
};

export default ResultCard;
