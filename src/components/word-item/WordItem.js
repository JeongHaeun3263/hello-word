import React from 'react';
import { FaCheck } from 'react-icons/fa';
import './WordItem.css';

const WordItem = ({ word }) => {
	return (
		<div className='word-item'>
			{word.meanings.map((word, i) => (
				<div key={i}>
					<h2 className='form'>{word.partOfSpeech}</h2>
					<ul className='definitions'>
						{word.definitions.map((list, i) => (
							<li key={i}>
								{' '}
								<FaCheck /> {list.definition}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default WordItem;
