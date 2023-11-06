import Image from 'next/image';
import styles from './mainblock.module.scss';

const MainBlock = () => {
	return (
		<main className={styles.main}>
			<div className={styles.main__text}>
				<h1 className={styles.main__title}>
					Разработка сайтов
					<br /> и web-приложений
				</h1>

				<p className={styles.main__description}>
					Разрабатываем передовые вебсайты и приложения на React.JS и Next.JS.
				</p>
			</div>

			<div className={styles.main__imgBlock}>
				<Image
					className={styles.main__image}
					src="/notebook.png"
					alt="notebook"
					width={587.78}
					height={400}
					priority
				/>
				<div className={styles.main__miniSite}>
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
								<feFlood floodOpacity="0" result="BackgroundImageFix" />
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
								<feFlood floodOpacity="0" result="BackgroundImageFix" />
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
								<feFlood floodOpacity="0" result="BackgroundImageFix" />
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

					<div className={styles.glitchWrapper}>
						<h1 className={styles.main__miniTitle}>WebAssist</h1>
					</div>
				</div>
			</div>
		</main>
	);
};

export default MainBlock;
