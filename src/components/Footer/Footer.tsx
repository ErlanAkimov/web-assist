import { FC } from "react";
import styles from './footer.module.scss'
import Link from "next/link";

const Footer: FC = () => {
    const navLinks: Array<{ name: string; path: string }> = [
        { name: 'статьи', path: '/posts/all-posts' },
        { name: 'проекты', path: '/projects' },
        { name: 'резюме', path: '/mentor' },
        { name: 'услуги', path: '/services' },
    ];

    const navLinks2: Array<{ name: string; path: string }> = [
        { name: 'Акции', path: '/sale' },
        { name: 'Вакансии', path: '/job' },
        { name: 'Store', path: '/store' },
        { name: 'Портфолио', path: '/portfolio' },
    ];

    const contacts = [
        {
            link: 'https://t.me/nonePhD', 
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill={'rgb(22, 90, 153)'} d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg>,
        },
        {
            link: 'https://github.com/ErlanAkimov', 
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill={'rgb(22, 90, 153)'} clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>,
        },
    ]
    
    return (
        <div className={styles.footer}>
            <div className="wrapper">
                <div className={styles.footer__wrapper}>
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

                    <ul className={styles.footer__nav}>
                        {
                            navLinks.map((item) => {
                                return (
                                    <Link key={item.name} href={item.path}><li>{item.name}</li></Link>
                                )
                            })
                        }
                    </ul>

                    <ul className={styles.footer__nav}>
                        {
                            navLinks2.map((item) => {
                                return (
                                    <Link key={item.name} href={item.path}><li>{item.name}</li></Link>
                                )
                            })
                        }
                    </ul>

                    <div className={styles.copyright}>
                        <div className={styles.footer__links}>
                            {
                                contacts.map(item => {
                                    return (
                                        <Link key={item.link} href={item.link} className={styles.link_box}>
                                            {item.icon}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        © web-assist.ru 2023
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;