import { FC } from 'react';
import styles from './postcard.module.scss';
import Link from 'next/link';

const PostCard: FC = () => {
    return (
        <div className={styles.wrapper}>

            <svg className={styles.bookmark} width="19" height="21" viewBox="0 0 19 21" xmlns="http://www.w3.org/2000/svg">
                <path className={styles.active} d="M15.5 0.5H3.5C1.57 0.5 0 2.07 0 4V20.5L7 17L14 20.5V10.5H19V4C19 2.07 17.43 0.5 15.5 0.5ZM17 4H19V10.5H14V4C14 3.173 14.673 2.5 15.5 2.5C16.327 2.5 17 3.173 17 4Z"/>
            </svg>

            <h1 className={styles.title}>🧾✏️ Как собирать данные с формы на сайте?</h1>
            <p className={styles.text}>В этой статье мы пошагово разберем как собрать данные с формы на сайте. Любая форма представляет из себя поля для ввода данных, которые передает вам пользователь. Наша задача простая, собрать эти данные, упаковать их и отправить в нужную нам локацию.</p>
            <div className={styles.underline}>
                <div className={styles.marks}>

                    <svg className={styles.heart} width="20" height="20" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                        <path className={styles.active} d="M12.6281 2.99438C12.2835 2.64733 11.8737 2.37182 11.4222 2.18368C10.9708 1.99555 10.4866 1.89851 9.99749 1.89813C9.07238 1.89828 8.18105 2.2458 7.49999 2.87188C6.81899 2.2457 5.92762 1.89816 5.00249 1.89813C4.51283 1.89864 4.0281 1.99598 3.5762 2.18455C3.1243 2.37312 2.71415 2.64919 2.36936 2.99688C0.898738 4.47376 0.899363 6.78376 2.37061 8.25438L7.49999 13.3838L12.6294 8.25438C14.1006 6.78376 14.1012 4.47376 12.6281 2.99438Z"/>
                    </svg>


                </div>

                <Link className={styles.read} href='/'>Читать полностью
                    <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m13.061 4.939-2.122 2.122L15.879 12l-4.94 4.939 2.122 2.122L20.121 12z"></path><path d="M6.061 19.061 13.121 12l-7.06-7.061-2.122 2.122L8.879 12l-4.94 4.939z"></path></svg>
                </Link>
            </div>
        </div>
    )
}

export default PostCard;