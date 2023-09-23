import React, { FC, } from 'react';
import styles from './header.module.scss';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import Image from 'next/image';


const navLinks: Array<{ name: string; path: string }> = [
	{ name: 'статьи', path: '/' },
	{ name: 'проекты', path: '/pojects' },
	{ name: 'резюме', path: '/mentor' },
	{ name: 'icons', path: '/icons' },
];



const Header: FC = () => {
    const current_pathname = usePathname();
	type BoolType = boolean;
	const [menu, setMenu] = React.useState<BoolType>(false);

	return (
		<div className={styles.outer_wrapper}>
			<div className="wrapper">
				<div className={styles.local_wrapper}>
					<div className={styles.left_side}>
						<Link href="/">
							<div className={styles.logo}>
								<svg
									width="58"
									height="37"
									viewBox="0 0 58 37"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g filter="url(#filter0_d_10_116)">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M12.4472 0H4L17.5155 28.1574L22.0883 20.0856L21.2843 18.4106L18.1237 11.8261L12.4472 0Z"
											fill="white"
										/>
										<path
											d="M21.2843 18.4106L22.0883 20.0856L17.5155 28.1574L26.1505 12.9524L22.3023 4.88061L18.1237 11.8261L21.2843 18.4106Z"
											fill="#C0C0C0"
										/>
									</g>
									<g filter="url(#filter1_d_10_116)">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M28.4031 0H19.9559L33.4714 28.1574L38.0442 20.0856L37.2402 18.4106L34.0796 11.8261L28.4031 0Z"
											fill="white"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M37.2402 18.4106L38.0442 20.0856L40.989 15L42.1472 13L38.2582 4.88061L34.0796 11.8261L37.2402 18.4106Z"
											fill="#C0C0C0"
										/>
									</g>
									<g filter="url(#filter2_d_10_116)">
										<path
											d="M44.3589 0H35.9117L49.4272 28.1574L54 20.0856L53.196 18.4106L44.3589 0Z"
											fill="white"
										/>
									</g>
									<defs>
										<filter
											id="filter0_d_10_116"
											x="0"
											y="0"
											width="30.1505"
											height="36.1574"
											filterUnits="userSpaceOnUse"
											colorInterpolationFilters="sRGB"
										>
											<feFlood
												floodOpacity="0"
												result="BackgroundImageFix"
											/>
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feOffset dy="4" />
											<feGaussianBlur stdDeviation="2" />
											<feComposite in2="hardAlpha" operator="out" />
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
											/>
											<feBlend
												mode="normal"
												in2="BackgroundImageFix"
												result="effect1_dropShadow_10_116"
											/>
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="effect1_dropShadow_10_116"
												result="shape"
											/>
										</filter>
										<filter
											id="filter1_d_10_116"
											x="15.9559"
											y="0"
											width="30.1913"
											height="36.1574"
											filterUnits="userSpaceOnUse"
											colorInterpolationFilters="sRGB"
										>
											<feFlood
												floodOpacity="0"
												result="BackgroundImageFix"
											/>
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feOffset dy="4" />
											<feGaussianBlur stdDeviation="2" />
											<feComposite in2="hardAlpha" operator="out" />
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
											/>
											<feBlend
												mode="normal"
												in2="BackgroundImageFix"
												result="effect1_dropShadow_10_116"
											/>
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="effect1_dropShadow_10_116"
												result="shape"
											/>
										</filter>
										<filter
											id="filter2_d_10_116"
											x="31.9117"
											y="0"
											width="26.0883"
											height="36.1574"
											filterUnits="userSpaceOnUse"
											colorInterpolationFilters="sRGB"
										>
											<feFlood
												floodOpacity="0"
												result="BackgroundImageFix"
											/>
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feOffset dy="4" />
											<feGaussianBlur stdDeviation="2" />
											<feComposite in2="hardAlpha" operator="out" />
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
											/>
											<feBlend
												mode="normal"
												in2="BackgroundImageFix"
												result="effect1_dropShadow_10_116"
											/>
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="effect1_dropShadow_10_116"
												result="shape"
											/>
										</filter>
									</defs>
								</svg>
							</div>
						</Link>

						<nav className={styles.nav}>
							{navLinks.map((item) => {
								return <Link className={ current_pathname === item.path ? styles.active : ''} key={item.path} href={item.path}>{item.name}</Link>;
							})}
						</nav>
					</div>
					<div className={styles.right_side}>
						<div className={styles.burger_menu} onClick={() => {setMenu(true)}}>
							<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="24" height="2" rx="1" fill="white"/>
								<rect y="8" width="24" height="2" rx="1" fill="white"/>
								<rect y="16" width="24" height="2" rx="1" fill="white"/>
							</svg>
						</div>
					</div>
				</div>
			</div>

			<div className={`${styles.mobile_menu} ${ menu ? styles.opened : null}`}>
				<div className={styles.header_mob}>
					<svg  className={styles.close_btn} onClick={() => {setMenu(false)}} width="22" height="22" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect y="16.9706" width="24" height="2" rx="1" transform="rotate(-45 0 16.9706)" fill="white"/>
						<rect x="1.41431" width="24" height="2" rx="1" transform="rotate(45 1.41431 0)" fill="white"/>
					</svg>
				</div>

				<div className={styles.menu_profile}>
					<div className={styles.avatar}>
						<Image src='/avatar.jpg' alt="asdf" width={60} height={60} />
					</div>
					<div className={styles.profile_text}>
						<h3 className={styles.name}>Erlan Akimov</h3>
						<p className={styles.rank}>CEO "web-assist"</p>
					</div>
				</div>
				
				<div className={styles.nav_mobile}>
					{
						navLinks.map((item) => {
							return <Link className={ current_pathname === item.path ? styles.active : ''} key={item.path} href={item.path}>{item.name}</Link>;
						})
					}
				</div>
			</div>
		</div>
	);
};

export default Header;
