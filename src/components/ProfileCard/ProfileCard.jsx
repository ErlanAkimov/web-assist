import styles from './profilecard.module.scss';
import { auth } from '../../pages/api/data/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth'
import React from 'react';
import Registration from '../Registration/Registration';
import Authorization from '../Authorization/Authorization';

const ProfileCard = () => {
	const [user, setUser] = React.useState({});
	const [authorized, setAuthorized] = React.useState(false);
	const [displayName, setDisplayName] = React.useState(null);

	React.useEffect(() => {
		setDisplayName(user.displayName)
	}, [user])

	const handleLogout = (e) => {
		e.preventDefault();
		signOut(auth)
	}

	return (
		<div className={styles.wrapperOuter}>
			<div className={styles.wrapper}>
				{
					authorized ? 
					<div>
						<div className={styles.user}>
							<div className={styles.avatar}>
								<img src={'https://img.championat.com/c/900x900/news/big/e/t/poyavilis-pervye-kadry-seriala-avatar-legenda-ob-aange-premera-v-2024-godu_1687041545980927004.jpg'} alt="asda" width={100} />
							</div>
							<div className={styles.userInfo}>
								<h4>{displayName}</h4>
								<p className={styles.logout} onClick={handleLogout}>выйти</p>
							</div>
						</div>
					</div> 
					: <Authorization setUser={setUser} setAuthorized={setAuthorized} nickname={setDisplayName} />
				}
			</div>
		</div>


		
	);
};



export default ProfileCard;
