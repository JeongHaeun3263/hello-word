import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<header>
			<div className='container'>
				<div className='inner-content'>
					<div className='brand'>
						<Link to='/'>Hello Word</Link>
					</div>

					<ul className='nav-links'>
						<li>
							<Link to='/'>Word List</Link>
						</li>

						{/* <li>
							<Link to='/test'>Test</Link>
						</li> */}

						<li>
							<Link to='/add' className='btn btn-main'>
								+ Add
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
