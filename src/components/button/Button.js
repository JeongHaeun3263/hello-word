import React from 'react';
import './Button.css';

const Button = ({ onClick, className, btnName }) => {
	return (
		<button onClick={onClick} className={`btn ${className}`}>
			{btnName}
		</button>
	);
};

export default Button;
