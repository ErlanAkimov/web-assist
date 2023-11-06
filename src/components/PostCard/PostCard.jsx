import React from 'react';
import styles from './postcard.module.scss';
import Link from 'next/link';
import { getFirestore, updateDoc, doc, getDoc} from "firebase/firestore";
import app from '../../pages/api/data/firebase';



const PostCard = ({ post }) => {
	const [marked, setMarked] = React.useState(false);
	const [liked, setLiked] = React.useState(false);
	const [likes, setLikes] = React.useState(post.likes);

	const firestore = getFirestore(app);
	const [loaded, setLoaded] = React.useState(false);
	const docRef = doc(firestore, 'posts', String(post.post_id))

	React.useEffect(() => {
		const like = localStorage.getItem(post.post_id + "liked?");
		const mark = localStorage.getItem(post.post_id + "marked");
		mark ? setMarked(true) : setMarked(false);
		like === 'like' ? setLiked(true) : setLiked(false);
	}, []);

	React.useEffect(() => {
		const fetchData = async () => {
			const myPost = doc(firestore, 'posts', post.post_id);
			const docSnapshot = await getDoc(myPost);

			const docData = docSnapshot.data();
			const newLikes = docData ? docData.likes : null;

			if (newLikes != likes) {
				setLikes(newLikes);
			}

			setLoaded(true);
		}

		fetchData();
	}, [likes])

	return (
		<div className={styles.wrapper}>
			<svg
				onClick={(e) => {bookmarkToggler(e, post.post_id)}}
				className={styles.bookmark}
				width="19"
				height="21"
				viewBox="0 0 19 21"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					className={marked ? styles.active : ''}
					d="M15.5 0.5H3.5C1.57 0.5 0 2.07 0 4V20.5L7 17L14 20.5V10.5H19V4C19 2.07 17.43 0.5 15.5 0.5ZM17 4H19V10.5H14V4C14 3.173 14.673 2.5 15.5 2.5C16.327 2.5 17 3.173 17 4Z"
				/>
			</svg>

			<h1 className={styles.title}>{post.title}</h1>
			<p className={styles.text}>{post.short}</p>
			<div className={styles.underline}>
				<div className={styles.marks}>
					<label onClick={(e) => {likeToggler(e, String(post.post_id))}} className={styles.labels}>
						<svg
							className={styles.icon}
							width="22"
							height="22"
							viewBox="0 0 15 15"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								className={liked ? styles.active : ''}
								d="M12.6281 2.99438C12.2835 2.64733 11.8737 2.37182 11.4222 2.18368C10.9708 1.99555 10.4866 1.89851 9.99749 1.89813C9.07238 1.89828 8.18105 2.2458 7.49999 2.87188C6.81899 2.2457 5.92762 1.89816 5.00249 1.89813C4.51283 1.89864 4.0281 1.99598 3.5762 2.18455C3.1243 2.37312 2.71415 2.64919 2.36936 2.99688C0.898738 4.47376 0.899363 6.78376 2.37061 8.25438L7.49999 13.3838L12.6294 8.25438C14.1006 6.78376 14.1012 4.47376 12.6281 2.99438Z"
							/>
						</svg>
						<span className={styles.like_counter}>{loaded ? likes : <div className={styles.loader}></div>}</span>
					</label>
				</div>

				<Link className={styles.read} href={'/posts/' + post.post_id}>
					Читать полностью
					<svg
						className={styles.arrow}
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="m13.061 4.939-2.122 2.122L15.879 12l-4.94 4.939 2.122 2.122L20.121 12z"></path>
						<path d="M6.061 19.061 13.121 12l-7.06-7.061-2.122 2.122L8.879 12l-4.94 4.939z"></path>
					</svg>
				</Link>
			</div>
		</div>
	);

	function bookmarkToggler(e, post_id) {
		marked ? localStorage.removeItem(post_id + 'marked') : localStorage.setItem(post_id + 'marked', 'marked');
		setMarked(prev => !prev);
	}

	function likeToggler(e, post_id) {
		let update = {};

		if (liked) {
			setLikes(prev => prev - 1);
			update = {likes: likes - 1}
			localStorage.removeItem(post_id + "liked?");
		} else {
			update = {likes: likes + 1}
			setLikes(prev => prev + 1);
			localStorage.setItem(post_id + "liked?", "like");
		}

		updateDoc(docRef, update);
		setLiked(prev => !prev);
	}
};

export default PostCard;
