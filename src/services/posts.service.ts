import { IPost } from '@/interfaces/post.interface';
import axios from 'axios';

const API_URL = 'http://localhost:3300';
axios.defaults.baseURL = API_URL;

export const PostService = {
	async getAllPosts() {
		const { data } = await axios.get<IPost[]>('/posts');
		return data;
	},

	async getSinglePost(id: string) {
		const { data } = await axios.get<IPost[]>('/posts', {
			params: {
				id,
			},
		});
		return data[0];
	},
};
