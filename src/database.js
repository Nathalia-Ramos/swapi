import { config } from 'dotenv';
import pkg from 'humps';
import mysql from 'mysql2/promise';
const { camelizeKeys } = pkg;

config();

class Database {
  constructor() {
    this.initPool();
  }

  initPool() {
    this.pool = mysql.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DB
    });
  }  

  async executeQuery(sql, params = []) {
    const connection = await this.pool.getConnection();
    try {
      const [rows] = await connection.execute(sql, params);
      return camelizeKeys(rows);
    } catch (error) {
      console.error('Erro na consulta SQL:', error);
      throw error;
    } finally {
      connection.release();
    }
  }
}

export default Database;
