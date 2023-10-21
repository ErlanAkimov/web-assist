// dbConfig.js
import mysql from 'mysql2';

const dbConfig = {
  connectionLimit: 10,
  host: 'vh424.timeweb.ru',
  user: 'pilearl',
  password: 'Trader16',
  database: 'pilearl_wa'
};

const pool = mysql.createPool(dbConfig);
export default pool;
