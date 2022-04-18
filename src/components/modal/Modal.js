import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import './Modal.css';

const Modal = ({ children, onClick }) => {
	const node = document.getElementById('modal-root');

	return ReactDOM.createPortal(
		<div className='modal-backdrop'>
			<div className='modal'>
				{children}
				<span className='close'>
					<FaTimes onClick={onClick} />
				</span>
			</div>
		</div>,
		node
	);
};

export default Modal;
