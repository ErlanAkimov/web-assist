import Home from '@/components/screens/Home/Home';
import { IPostData } from '@/interfaces/post.interface';
import { PostService } from '@/services/posts.service';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';

const HomePage: NextPage<IPostData> = ({ posts }) => {
	return <Home posts={posts} />;
};

export const getStaticProps: GetStaticProps<IPostData> = async () => {
	const posts = await PostService.getAllPosts();

	return {
		props: { posts },
		revalidate: 300,
	};
}
export default HomePage;
