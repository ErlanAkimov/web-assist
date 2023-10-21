import pool from './db'; // Импортируем пул подключений к базе данных

export default async (req, res) => {
  try {
    const rows = await pool.promise().query('SELECT * FROM posts');
    res.status(200).json({ data: 'asf' });

  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    res.status(500).send(error);
  }
};