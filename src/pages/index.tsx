import Layout from '@/components/layout/layout';
import { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<Layout
			title="Главная"
			description="web-assist лучшая библиотека для начинающих разработчиков."
		></Layout>
	);
};
export default Home;
