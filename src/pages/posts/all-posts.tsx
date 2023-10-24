import styles from './all-posts.module.scss';
import { IPostData, IPost } from "@/interfaces/post.interface";
import PostCard from '@/components/PostCard/PostCard';
import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import LayoutWithSidebar from '@/components/layout/layout-with-sidebar/LayoutWithSidebar';

import { getFirestore, collection, getDoc, getDocs, addDoc, doc} from "firebase/firestore";
import app from '@/pages/api/data/firebase';
const Home: FC<IPostData> = ({posts}) => {
	
	return (
		<LayoutWithSidebar
			title="Главная"
			description="web-assist лучшая библиотека для начинающих разработчиков."
		>
			<div className={styles.local_wrapper}>
				<div className="postline">
					{
						posts.map((post) => {
							console.log(post)
							return (<PostCard key={post.post_id} post={post} />);
						})
					}
				</div>
			</div>
		</LayoutWithSidebar>
	);
}


export const getStaticProps: GetStaticProps<IPostData> = async () => {
	let posts:any = [];
	const firestore = getFirestore(app);
	const posts_collection = collection(firestore, "posts");
	const collection_snapshot = await getDocs(posts_collection);

	collection_snapshot.forEach((document) => {
		const postData = document.data();
		const documentId = document.id;

		posts.push({ post_id: documentId, ...postData });
	})


	return {
		props: {posts},
		revalidate: 60,
	};
}

export default Home;