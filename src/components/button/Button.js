import './Button.css';

const Button = ({ children, onClick, className }) => {
	return (
		<button onClick={onClick} className={`btn ${className}`}>
			{children}
		</button>
	);
};

export default Button;
