import styles from './layout.module.scss';
import { FC, PropsWithChildren } from 'react';
import Header from '../Header/Header';
import Meta from '@/components/SEO/Meta';
import Footer from '../Footer/Footer';

const Layout: FC<PropsWithChildren<IMeta>> = ({ title, description, children }) => {
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
