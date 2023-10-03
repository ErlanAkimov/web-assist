import MainBanner from '@/components/banners/timeweb-banner/TimeWeb';
import Layout from '@/components/layout/layout';
import styles from '@/styles/index.module.scss';
import { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<Layout
			title="Главная"
			description="web-assist лучшая библиотека для начинающих разработчиков."
		>

			<div className="wrapper">
				<MainBanner />

				<main className={styles.main}>

					<div className={styles.main__text}>
						<h1 className={styles.title}>
							Разработка сайтов<br /> и веб-приложений
						</h1>
					</div>

				</main>
			</div>

		</Layout>
	);
};
export default Home;
