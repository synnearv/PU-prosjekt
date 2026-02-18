import { pool } from '$lib/server/db';
import type { User } from '$lib/types';

export const UserRepo = {
  async findById(id: number) {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  },

  async create(firstname: string, lastname: string, email: string, username: string, hash: string) {
    const result = await pool.query(
      `INSERT INTO users (firstname, lastname, email, username, password_hash) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING id, username`,
      [firstname, lastname, email, username, hash]
    );
    return result.rows[0];
  },

  async validateUser(login: string, password_hash: string): Promise<User | null> {
    const result = await pool.query(
      'SELECT id, username, firstname, lastname, email FROM users WHERE (username = $1 OR email = $1) AND password_hash = $2',
      [login, password_hash]
    );
    return result.rows[0] || null;
  }
};
