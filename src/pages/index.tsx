import Layout from '@/components/layout/layout';
import styles from '@/styles/index.module.scss';
import { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<Layout
			title="Главная"
			description="web-assist лучшая библиотека для начинающих разработчиков."
		>
			<div className={styles.wrapper}>
				веб-сайт находится на стадии разработки.
			</div>
		</Layout>
	);
};
export default Home;
