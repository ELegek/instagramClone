import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Bars } from 'react-loader-spinner';
import Layout from '../../components/Layout';
import DetailedCard from '../../components/DetailedCard';
import { getPhotos } from '../../redux/actions/photos';
import './style.css';

const MainPage = () => {
	const photos = useSelector((state) => state.photos.photos);
	const loading = useSelector((state) => state.photos.isPhotosLoading);

	const dispath = useDispatch();

	useEffect(() => {
		dispath(getPhotos());
	}, []);
	return (
		<Layout nickName='Evgeny'>
			<div className='cnMainPageRoot'>
				{loading ? (
					<div className='cnMainLoaderContainer'>
						<Bars color='#000BFF' height={80} width={80} />
					</div>
				) : (
					<InfiniteScroll
						dataLength={photos.length}
						next={() => console.log('next')}
						hasMore={true}
						loader={
							<div className='cnMainLoaderContainer'>
								<Bars color='#000BFF' height={15} width={15} />
							</div>
						}
						endMessage={<p>Thats All!</p>}>
						{photos.map((photo) => (
							<DetailedCard
								key={photo.id}
								userName={photo.author.nickname}
								avatarUrl={photo.author.avatarUrl}
								userId={photo.author.id}
								imgUrl={photo.imgUrl}
								likes={photo.likes.length}
								isLikedByYou={true}
								comments={photo.comments}
							/>
						))}
					</InfiniteScroll>
				)}
			</div>
		</Layout>
	);
};

export default MainPage;
