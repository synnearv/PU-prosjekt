import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';
import { pool } from '$lib/server/db';

type LoginBody = {
  user?: {
    name?: string;
    password?: string;
  };
};

export async function POST(event: RequestEvent) {
  const body: LoginBody = await event.request.json();
  const name = body.user?.name?.trim();
  const password = body.user?.password;

  if (!name || !password) {
    return json({ error: 'Missing username or password' }, { status: 400 });
  }

  try {
    const result = await pool.query(
      'SELECT id, password FROM users WHERE username=$1',
      [name]
    );

    const user = result.rows[0];
    if (!user) return json({ error: 'Invalid credentials' }, { status: 401 });

    if (user.password !== password) {
      return json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // return userID (spec)
    return json({ userId: user.id }, { status: 200 });
    // evt helt konsekvent: return json({ user: { id: user.id } }, { status: 200 });
  } catch (err) {
    console.error(err);
    return json({ error: 'Server error' }, { status: 500 });
  }
}
