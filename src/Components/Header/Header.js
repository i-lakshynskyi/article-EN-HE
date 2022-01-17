import React from 'react';
import Languages from './Language';
import Edit from './Edit';
import './header.scss';

function Header() {
	return (
		<div className='header'>
			<Edit/>
			<Languages/>
		</div>
	);
}

export default Header;