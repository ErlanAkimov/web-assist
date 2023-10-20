import MainBlock from '@/components/Homepage components/main block/MainBlock';
import MainBanner from '@/components/banners/timeweb-banner/TimeWeb';
import MainBlock_2 from '@/components/Homepage components/second block/MainBlock-2';
import MainBlock_3 from '@/components/Homepage components/third block/MainBlock-3';
import Layout from '@/components/layout/layout';
import { NextPage } from 'next';


const Home: NextPage = () => {
	return (
		<Layout title="Главная" description="web-assist лучшая библиотека для начинающих разработчиков."
		>
			<div className="wrapper">
				<MainBlock />
				<MainBanner /> {/* Баннер TimeWeb */}
				<MainBlock_3 />
				<MainBlock_2 />
			</div>

		</Layout>
	);
};
export default Home;
