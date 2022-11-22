import React from 'react';
import UserBadge from '../UserBadge';
import './style.css';

const Navbar = ({ nickName, id, avatarUrl }) => {
	return (
		<div className='cnNavbarRoot'>
			<div className='cnNavbarWrapper'>
				<span>InstagramClone</span>
				<UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id} />
			</div>
		</div>
	);
};

export default Navbar;
