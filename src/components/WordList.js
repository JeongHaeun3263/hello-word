import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import WordCard from './WordCard';

const WordList = () => {
	const { wordlist } = useContext(GlobalContext);
	return (
		<div className='word-page'>
			<div className='container'>
				<div className='header'>
					<h1 className='heading'>My Word List</h1>
				</div>

				{wordlist.length > 0 ? (
					<div className='word-list'>
						{wordlist.map((word) => (
							<WordCard key={word.id} word={word} />
						))}
					</div>
				) : (
					<div className='no-words'>No Word List, add some!</div>
				)}
			</div>
		</div>
	);
};

export default WordList;
