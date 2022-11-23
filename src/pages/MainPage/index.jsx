import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import DetailedCard from '../../components/DetailedCard';

const MainPage = () => {
	const state = useSelector((state) => state);
	return (
		<Layout nickName='Evgeny'>
			<div>main page</div>
			<DetailedCard
				userName='Evgeny'
				userId={1}
				imgUrl='https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotov-54.jpg'
				likes={10}
				isLikedByYou={true}
				comments={[
					{ text: 'asd', nickName: 'Evgen' },
					{ text: 'asd', nickName: 'Evgen' },
					{ text: 'asd', nickName: 'Evgen' },
					{ text: 'asd', nickName: 'Evgen' },
				]}
			/>
		</Layout>
	);
};

export default MainPage;
