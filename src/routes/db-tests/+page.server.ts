import { pool } from '$lib/server/db';

export const load = async () => {
  const result = await pool.query('SELECT 1 as ok');
  return { ok: result.rows[0].ok };
};