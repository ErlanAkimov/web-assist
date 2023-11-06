import styles from './layout.module.scss';
import Header from '../Header/Header';
import Meta from '../SEO/Meta';
import Footer from '../Footer/Footer';

const Layout = ({ title, description, children }) => {
	return (
		<Meta title={title} description={description}>
			<div className="main_wrapper">
				<Header />
				{children}
				<Footer />
			</div>
		</Meta>
	);
};

export default Layout;
