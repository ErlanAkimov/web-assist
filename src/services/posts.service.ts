	import { IPost } from '@/interfaces/post.interface';
	import axios from 'axios';

	export const PostService = {
		async getAllPosts() {
			const { data } = await axios.get<IPost[]>('https://6507b4dd3a38daf4803faad3.mockapi.io/posts');
			return data;
		},

		async getSinglePost(id: string) {
			const { data } = await axios.get<IPost[]>('https://6507b4dd3a38daf4803faad3.mockapi.io/posts', {
				params: {
					id,
				},
			});
			return data[0];
		},
	};
