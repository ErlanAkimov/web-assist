import MainBanner from '../components/banners/timeweb-banner/TimeWeb';
import Layout from '../components/layout/layout';

import MainBlock from '../components/Homepage components/main block/MainBlock';
import MainBlock_2 from '../components/Homepage components/second block/MainBlock-2';
import MainBlock_3 from '../components/Homepage components/third block/MainBlock-3';

import styles from '../styles/index.module.scss';
import Link from 'next/link';

const reviews = [
	{
		title: 'Вероника Малышева',
		subtitle: 'Biodetect.ru',
		website: 'https://www.biodetect.ru/',
		stars: 5,
		text: "Хотела создать небольшой одностраничный сайт, нарисовала макет и обратилась в web-assist. Сделали его быстро, даже помогли опубликовать сайт в интернете и получить сертификаты безопасности! Огромное спасибо! ",
	},
	{
		title: 'Алина',
		subtitle: 'Advert-digital.com',
		website: 'https://www.advert-digital.com/',
		stars: 5,
		text: "Мы подготовили макет и решили начать сотрудничество. Настоящие специалисты! Разработали как клиентскую так и серверную часть приложения. Особенная благодарность за то, что сделали возможным вывод заявок с сайта на гугл таблицы",
	},
	{
		title: 'KartashevF',
		subtitle: 'Aleot.de',
		website: 'https://www.aleot.de/',
		stars: 5,
		text: "Web-assist, это невероятный специалист. Не мог найти человека который настолько бы четко понял мою задачу. Было много предложений, но только web-assist предложил лучшее для меня варианты. Я настоятельно рекомендую всем работать с ними! Обращусь в скором времени еще раз и два и три... Золотой специалист!!!",
	},
];

const Star = () => {return <svg className={styles.star} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>}

const Home = () => {
	return (
		<Layout
			title="Главная"
			description="web-assist лучшая библиотека для начинающих разработчиков."
		>
			<div className="wrapper">
				<MainBlock />
				<MainBanner /> {/* Баннер TimeWeb */}
				<MainBlock_3 />
				<MainBlock_2 />
				<h2 className={styles.title}>Отзывы</h2>
				<div className={styles.reviews}>
					{reviews.map((item, index) => {
						return (
							<div className={styles.reviewCard}>
								<h3 className={styles.cardTitle}>{item.title}</h3>
								<Link target='_blank' href={item.website} className={styles.subTitle}>{item.subtitle}</Link>

								<div className={styles.stars}>
									<Star />
									<Star />
									<Star />
									<Star />
									<Star />
								</div>

								<p className={styles.text}>{item.text}</p>
							</div>
						);
					})}
				</div>

				<h2 className={styles.title}>Контакты</h2>

				<div className={styles.contacts}>
					<div className={styles.item}>
						<p>Номер телефона: </p>
						<p>+7 996 591 45 13</p>
					</div>

					<div className={styles.item}>
						<p>Email: </p>
						<p>erlan_akimov_dev@mail.ru</p>
					</div>

					<div className={styles.item}>
						<p>Telegram: </p>
						<p>@nonePhD</p>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default Home;
