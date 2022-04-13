import axios from 'axios';
import React, { useState } from 'react';
import ResultCard from './result-card/ResultCard';

const Add = () => {
	const [query, setQuery] = useState('');
	const [isError, setIsError] = useState(false);
	const [word, setWord] = useState();

	const onChange = (e) => {
		e.preventDefault();
		setQuery(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		axios
			.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`) //
			.then((res) => {
				const data = res.data[0];
				setWord(data);
				setIsError(false);
				setQuery('');
			})
			.catch((err) => {
				console.log(err);
				setIsError(true);
			});
	};

	return (
		<div className='add-page'>
			<div className='container'>
				<div className='add-content'>
					<form onSubmit={onSubmit}>
						<div className='input-wrapper'>
							<input
								type='text'
								placeholder='Search for a word'
								value={query}
								onChange={onChange}
							/>
						</div>
					</form>
				</div>
				<div>{isError && <h1>Try Again</h1>}</div>
				<div>{word && <ResultCard word={word} />}</div>
			</div>
		</div>
	);
};

export default Add;
