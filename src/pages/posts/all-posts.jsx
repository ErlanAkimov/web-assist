import styles from './all-posts.module.scss';
import PostCard from '../../components/PostCard/PostCard';
import React from 'react';
import LayoutWithSidebar from '../../components/layout/layout-with-sidebar/LayoutWithSidebar';

import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from '../api/data/firebase';
const Home = ({ posts }) => {
	return (
		<LayoutWithSidebar
			title="Главная"
			description="web-assist лучшая библиотека для начинающих разработчиков."
		>
			<div className={styles.local_wrapper}>
				<div className="postline">
					{
						posts.map((post) => {
							return (<PostCard key={post.post_id} post={post} />);
						})
					}
				</div>
			</div>
		</LayoutWithSidebar>
	);
}

export const getStaticProps = async () => {
	const firestore = getFirestore(app);
	const postsCollection = collection(firestore, "posts");
	const collectionSnapshot = await getDocs(postsCollection);

	const posts = collectionSnapshot.docs.map((document) => {
		const postData = document.data();
		const documentId = document.id;
		return { post_id: documentId, ...postData };
	  });

	return {
		props: { posts },
		revalidate: 300,
	}
}

export default Home;