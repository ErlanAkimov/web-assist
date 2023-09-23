import styles from './home.module.scss';
import Layout from '@/components/layout/layout';
import PostCard from '@/components/PostCard/PostCard';
import { IPostData } from '@/interfaces/post.interface';
import React, { FC } from 'react';

const Home: FC<IPostData> = ({ posts }) => {
	return (
		<Layout
			title="Главная"
			description="web-assist лучшая библиотека для начинающих разработчиков."
		>
			<div className="postline">
				{
					console.log(posts)
				}
			</div>
		</Layout>
	);
};

export default Home;
