import styles from './donate.module.scss';
import Link from 'next/link';

const Donate = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.topside}>
				<svg
					className={styles.coins}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path d="M12 22c3.976 0 8-1.374 8-4V6c0-2.626-4.024-4-8-4S4 3.374 4 6v12c0 2.626 4.024 4 8 4zm0-2c-3.722 0-6-1.295-6-2v-1.268C7.541 17.57 9.777 18 12 18s4.459-.43 6-1.268V18c0 .705-2.278 2-6 2zm0-16c3.722 0 6 1.295 6 2s-2.278 2-6 2-6-1.295-6-2 2.278-2 6-2zM6 8.732C7.541 9.57 9.777 10 12 10s4.459-.43 6-1.268V10c0 .705-2.278 2-6 2s-6-1.295-6-2V8.732zm0 4C7.541 13.57 9.777 14 12 14s4.459-.43 6-1.268V14c0 .705-2.278 2-6 2s-6-1.295-6-2v-1.268z"></path>
				</svg>
				<div>
					<h4 className={styles.title}>
						Вы можете поддержать проект монеткой и помочь развитию портала
					</h4>
					<Link target='_blank' href="https://www.tinkoff.ru/cf/4m7edrhl3BW">
						<button className={`${'button-type-logout'} ${styles.help_btn}`}>
							Поддержать
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Donate;
