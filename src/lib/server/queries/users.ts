import { pool } from '$lib/server/db';

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
  async validateUser(login: string, password_plain: string) {
    // This checks if the 'login' matches either the username OR the email
    const result = await pool.query(
      'SELECT id, username FROM users WHERE (username = $1 OR email = $1) AND password_hash = $2',
      [login, password_plain]
    );
    return result.rows[0]; // Returns the user if found, or undefined
  }
};
