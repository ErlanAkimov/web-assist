import MainBlock_2 from '../components/Homepage components/second block/MainBlock-2';
import Layout from '../components/layout/layout';
import styles from '../styles/services.module.scss';

const Services = () => {
	return (
		<Layout
			title="Услуги"
			description="Web-assist - это digital агентство с широким спектром услуг. Мы спроектируем и разработаем для вас любой сайт. Начиная от самого простого лендинга и заканчивая высоконагруженными сервисами"
		>
			<div className="wrapper">
				<MainBlock_2 />

                <div className={styles.wp}>
                </div>
			</div>
		</Layout>
	);
};

export default Services;
