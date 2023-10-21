// dbConfig.js
import mysql from 'mysql2';

// const connection = mysql.createConnection({
//   host: '5.23.50.27',
//   user: 'pilearl_wa',
//   password: 'Trader16',
//   database: 'pilearl_wa'
// });

// connection.connect((err) => {
//   if (err) {
//     return console.error(err.message)
//   } else {
//     console.log('norm')
//   }
// })

// connection.connect 

const dbConfig = {
  host: 'vh424.timeweb.ru',
  user: 'pilearl_wa',
  password: 'Trader16',
  database: 'pilearl_wa'
};

const pool = mysql.createPool(dbConfig);
export default pool;
