import MainBlock from '@/components/Homepage components/main block/MainBlock';
import MainBanner from '@/components/banners/timeweb-banner/TimeWeb';
import Layout from '@/components/layout/layout';
import { NextPage } from 'next';


const Home: NextPage = () => {
	return (
		<Layout
			title="Главная"
			description="web-assist лучшая библиотека для начинающих разработчиков."
		>

			<div className="wrapper">

				<MainBlock />
				<MainBanner />
			</div>

		</Layout>
	);
};
export default Home;
