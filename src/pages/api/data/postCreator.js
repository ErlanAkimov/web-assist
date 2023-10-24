import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app from '@/pages/api/data/firebase'

const firestore = getFirestore(app);
const postsCollection = collection(firestore, 'posts');

// Данные, соответствующие шаблону
export const postData = {
  post_id: 0, // Пример: ID поста
  title: 'Тестовая запись',
  short: 'Я подключил firebase и решил проверить, как я смогу создавать посты с его помощью. Данная запись гарантирует то, что это работает',
  seo_description: 'SEO описание будет добавлено позже',
  likes: 0, // Начальное количество лайков
  dislikes: 0, // Начальное количество дизлайков
  full_text: 'Тут будет полное описание поста',
};

// Добавьте данные в Firestore
addDoc(postsCollection, postData);
