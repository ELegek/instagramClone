import React from 'react';

// libs

// Components

// Styles
import './style.css';

const Comment = ({ nickname, text }) => {
	return (
		<div className='cnCommentRoot'>
			<span className='cnCommentName'>{nickname}</span>
			<span className='cnCommentText'>{text}</span>
		</div>
	);
};

export default Comment;
