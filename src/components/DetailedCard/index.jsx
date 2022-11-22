import React from 'react';

// libs
import { FaHeart, FaRegHeart, FaRegComment } from 'react-icons/fa';

// Components
import UserBadge from '../UserBadge';
import Comment from '../Comment';
// Styles
import './style.css';

const DetailedCard = ({ userName, avatarUrl, userId, imgUrl, likes, isLikedByYou, comments }) => {
	const [isCommentsShow, setIsCommentsShow] = React.useState(false);

	const renderComments = () => {
		if (comments.length > 2 && !isCommentsShow) {
			const commentsCopy = [...comments];
			const commentForRender = commentsCopy.splice(comments.lenght - 2, 2);

			return (
				<>
					<span
						className='cnDetailedCardCommentTitle'
						onClick={() => setIsCommentsShow(true)}>{`Показать еще ${
						comments.length - commentForRender.length
					} комментариев`}</span>
					{commentForRender.map((comment) => (
						<Comment {...comment} />
					))}
				</>
			);
		}

		return comments.map((comment) => <Comment {...comment} />);
	};
	return (
		<div className='cnDetailedCardRoot'>
			<div className='cnDetailedCardHeader'>
				<UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId} />
			</div>
			<div>
				<img src={imgUrl} alt='img' className='cnDetailedCardImg' />
			</div>
			<div className='cnDetailedCardButtons'>
				{isLikedByYou ? (
					<FaHeart className='cnDetailedCardIcon' />
				) : (
					<FaRegHeart className='cnDetailedCardIcon' />
				)}{' '}
				<FaRegComment className='cnDetailedCardIcon' />
			</div>
			<div className='cnDetailedCardLikes'>{`Оценили ${likes} человек`}</div>
			<div className='cnDetailedCardComments'>{renderComments()}</div>
			<textarea className='cnDetailedCardTextArea' />
		</div>
	);
};

export default DetailedCard;
