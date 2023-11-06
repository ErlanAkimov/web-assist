import MainBanner from '../components/banners/timeweb-banner/TimeWeb';
import Layout from '../components/layout/layout';

import MainBlock from '../components/Homepage components/main block/MainBlock';
import MainBlock_2 from '../components/Homepage components/second block/MainBlock-2';
import MainBlock_3 from '../components/Homepage components/third block/MainBlock-3';


const Home = () => {	
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
