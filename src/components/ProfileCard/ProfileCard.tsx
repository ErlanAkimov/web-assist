import { FC } from 'react';
import Image from 'next/image';
import styles from './profilecard.module.scss';

const ProfileCard: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.topside}>
				<div className={styles.avatar}>
					<Image src="/avatar.jpg" alt="asdf" width={80} height={80} />
				</div>
				<div className={styles.text}>
					<h2>Erlan Akimov</h2>
					<p>Frontend developer</p>
				</div>
			</div>

            <button className='button-type-1'>
                Создать пост
            </button>
            <button className='button-type-logout'>Выйти</button>
		</div>
	);
};

export default ProfileCard;
