import { FC, PropsWithChildren } from 'react';
import Header from '../Header/Header';
import Meta from '@/components/SEO/Meta';
import ProfileCard from '@/components/ProfileCard/ProfileCard';
import Donate from '@/components/Donate/Donate';
import styles from './layout-with-sidebar.module.scss'

const LayoutWithSidebar: FC<PropsWithChildren<IMeta>> = ({ title, description, children }) => {
	return (
		<Meta title={title} description={description}>
			<div className="main_wrapper">
				<Header />
				<div className="wrapper">
					<div className={styles.local_wrapper}>
						<div className={styles.leftside}>{children}</div>
						<div className={styles.rightside}>
							<ProfileCard />
							<Donate />
						</div>
					</div>
				</div>
			</div>
		</Meta>
	);
};

export default LayoutWithSidebar;
