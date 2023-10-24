import Layout from '@/components/layout/layout';
import styles from '@/styles/404.module.scss';
import { NextPage } from 'next';

const Page404: NextPage = () => {
	return (
		<Layout
			title="404"
			description="Такой страницы не существует. Переходите на web-assist.ru, там вы найдете больше полезного"
		>
			<div className={styles.wrapper}>
				<div className={styles.main}>
					<div className={styles.s404}>404</div>
					<div>
						<p>Данный раздел находится на стадии разработки.</p>
					</div>
				</div>
			</div>
            <p className={styles.contact}>
                По всем вопросам вы можете обратиться ко мне напрямую<br /> <span>erlan_akimov_dev@mail.ru</span>
            </p>
		</Layout>
	);
};

export default Page404;
