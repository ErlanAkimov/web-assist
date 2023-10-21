import styles from './all-posts.module.scss';
import { IPostData } from "@/interfaces/post.interface";
import PostCard from '@/components/PostCard/PostCard';
import React, { FC } from 'react';
import { PostService } from '@/services/posts.service';
import { GetStaticProps } from 'next';
import LayoutWithSidebar from '@/components/layout/layout-with-sidebar/LayoutWithSidebar';
import data from '@/data/posts.js'

const Home: FC<IPostData> = ({posts}) => {
	const [data2, setData] = React.useState([]);

	React.useEffect(() => {
		fetch('/api/allPosts')
		.then((response) => response.json())
		.then((data12) => setData(data12));
	}, [])


	return (
		<LayoutWithSidebar
			title="Главная"
			description="web-assist лучшая библиотека для начинающих разработчиков."
		>
			<div className={styles.local_wrapper}>
				<div className="postline">
					{
						data.posts.map((post) => {
							return (<PostCard key={post.post_id} post={post} />);
						})
					}

				</div>
			</div>
		</LayoutWithSidebar>
	);
}

export const getStaticProps: GetStaticProps<IPostData> = async () => {
	const posts = await PostService.getAllPosts();

	return {
		props: { posts },
		revalidate: 300,
	};
}

export default Home;