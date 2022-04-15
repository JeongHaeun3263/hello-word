import ReactDOM from 'react-dom';
import Button from '../button/Button';
import './Modal.css';

const Modal = ({ children, onClick }) => {
	const node = document.getElementById('modal-root');

	return ReactDOM.createPortal(
		<div className='modal-backdrop'>
			<div className='modal'>
				{children}
				<div className='btns'>
					<Button onClick={onClick} btnName='Cancel' />
					<Button onClick={onClick} btnName='Add' />
				</div>
			</div>
		</div>,
		node
	);
};

export default Modal;
