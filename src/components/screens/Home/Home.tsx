import Donate from '@/components/Donate/Donate';
import styles from './home.module.scss';
import Layout from '@/components/layout/layout';
import PostCard from '@/components/PostCard/PostCard';
import ProfileCard from '@/components/ProfileCard/ProfileCard';

export default function Home() {
	return (
		<Layout
			title="Главная"
			description="web-assist лучшая библиотека для начинающих разработчиков."
		>
			<div className={styles.local_wrapper}>
				<div className="postline">
					<PostCard />
					<PostCard />
				</div>

				<div>
					<ProfileCard />
					<Donate />
				</div>
			</div>
		</Layout>
	);
}
