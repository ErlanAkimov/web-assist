import { FC } from 'react';
import styles from './postcard.module.scss';
import Link from 'next/link';
import { IPost, IPostDataSingle } from '@/interfaces/post.interface';

const PostCard: FC<IPostDataSingle> = ({post}) => {

    return (
        <div className={styles.wrapper}>

            <svg className={styles.bookmark} width="19" height="21" viewBox="0 0 19 21" xmlns="http://www.w3.org/2000/svg">
                <path className={styles.active} d="M15.5 0.5H3.5C1.57 0.5 0 2.07 0 4V20.5L7 17L14 20.5V10.5H19V4C19 2.07 17.43 0.5 15.5 0.5ZM17 4H19V10.5H14V4C14 3.173 14.673 2.5 15.5 2.5C16.327 2.5 17 3.173 17 4Z"/>
            </svg>

            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.text}>{post.description}</p>
            <div className={styles.underline}>
                <div className={styles.marks}>
                    <label className={styles.labels}>
                        <svg className={styles.icon} width="22" height="22" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                            <path className={styles.active} d="M12.6281 2.99438C12.2835 2.64733 11.8737 2.37182 11.4222 2.18368C10.9708 1.99555 10.4866 1.89851 9.99749 1.89813C9.07238 1.89828 8.18105 2.2458 7.49999 2.87188C6.81899 2.2457 5.92762 1.89816 5.00249 1.89813C4.51283 1.89864 4.0281 1.99598 3.5762 2.18455C3.1243 2.37312 2.71415 2.64919 2.36936 2.99688C0.898738 4.47376 0.899363 6.78376 2.37061 8.25438L7.49999 13.3838L12.6294 8.25438C14.1006 6.78376 14.1012 4.47376 12.6281 2.99438Z"/>
                        </svg>
                        <span className={styles.like_counter}>{post.likes}</span>
                    </label>

                    <label className={styles.labels}>
                        <svg className={styles.icon} width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={styles.active} d="M16.6667 2.5H15.8333V13.3333H16.6667C17.1087 13.3333 17.5326 13.1577 17.8452 12.8452C18.1577 12.5326 18.3333 12.1087 18.3333 11.6667V4.16667C18.3333 3.72464 18.1577 3.30072 17.8452 2.98816C17.5326 2.67559 17.1087 2.5 16.6667 2.5ZM3.33332 13.3333H9.16666L8.23166 16.14C8.14823 16.3905 8.1255 16.6572 8.16535 16.9182C8.20519 17.1792 8.30647 17.427 8.46084 17.6412C8.61521 17.8554 8.81826 18.0298 9.05325 18.1501C9.28825 18.2705 9.54847 18.3333 9.81249 18.3333H9.99999L14.1667 13.8017V2.5H4.99999L1.71916 9.7075L1.66666 9.95167V11.6667C1.66666 12.1087 1.84225 12.5326 2.15481 12.8452C2.46737 13.1577 2.8913 13.3333 3.33332 13.3333Z" fill="#C0C0C0"/>
                        </svg>
                        <span className={styles.like_counter}>{post.dislikes}</span>
                    </label>

                </div>

                <Link className={styles.read} href='/'>Читать полностью
                    <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m13.061 4.939-2.122 2.122L15.879 12l-4.94 4.939 2.122 2.122L20.121 12z"></path><path d="M6.061 19.061 13.121 12l-7.06-7.061-2.122 2.122L8.879 12l-4.94 4.939z"></path></svg>
                </Link>
            </div>
        </div>
    )
}

export default PostCard;