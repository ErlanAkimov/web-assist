import Donate from '@/components/Donate/Donate';
import styles from './home.module.scss';
import Layout from '@/components/layout/layout';
import PostCard from '@/components/PostCard/PostCard';
import ProfileCard from '@/components/ProfileCard/ProfileCard';
import { IPostData } from '@/interfaces/post.interface';
import { FC } from 'react';

const Home: FC<IPostData> = ({posts}) => {

	return (
		<Layout
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

				<div>
					<ProfileCard />
					<Donate />
				</div>
			</div>
		</Layout>
	);
}

export default Home;	
