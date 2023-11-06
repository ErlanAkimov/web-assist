import Header from '../../Header/Header';
import Meta from '../../SEO/Meta';
import ProfileCard from '../../ProfileCard/ProfileCard'
import Donate from '../../banners/donate-banner/Donate';
import styles from './layout-with-sidebar.module.scss'
import Sidebar from '../../Sidebar/Sidebar';

const LayoutWithSidebar = ({ title, description, children }) => {
	return (
		<Meta title={title} description={description}>
			<div className="main_wrapper">
				<Header />
				<div className="wrapper">
					<div className={styles.local_wrapper}>
						<div className={styles.leftside}>{children}</div>
						<div className={styles.rightside}>
							{/* <ProfileCard /> */}
							<Sidebar />
							<Donate />
						</div>
					</div>
				</div>
			</div>
		</Meta>
	);
};

export default LayoutWithSidebar;
