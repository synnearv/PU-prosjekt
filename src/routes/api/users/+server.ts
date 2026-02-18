import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';
import { pool } from '$lib/server/db';

type CreateUserBody = {
	user?: {
		name?: string;
		firstname?: string;
		lastname?: string;
		email?: string;
		password?: string;
	};
};

export async function POST(event: RequestEvent) {
	const body: CreateUserBody = await event.request.json();
	const u = body.user;

	const name = u?.name?.trim();
	const firstname = u?.firstname?.trim();
	const lastname = u?.lastname?.trim();
	const email = u?.email?.trim();
	const password = u?.password;

	if (!name || !firstname || !lastname || !email || !password) {
		return json({ error: 'Missing required fields' }, { status: 400 });
	}

	try {
		const result = await pool.query(
			`
      INSERT INTO users (username, first_name, last_name, email, password)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id
      `,
			[name, firstname, lastname, email, password]
		);

		return json({ user: { id: result.rows[0].id } }, { status: 201 });
	} catch (err: any) {
		if (err?.code === '23505') {
			return json({ error: 'Username already exists' }, { status: 409 });
		}
		console.error(err);
		return json({ error: 'Server error' }, { status: 500 });
	}
}
