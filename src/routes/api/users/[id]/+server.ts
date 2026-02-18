import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';
import { pool } from '$lib/server/db';

export async function DELETE(event: RequestEvent) {
	const id = Number(event.params.id);

	if (!Number.isFinite(id)) {
		return json({ error: 'Invalid user id' }, { status: 400 });
	}

	try {
		const result = await pool.query('DELETE FROM users WHERE id=$1 RETURNING id', [id]);

		if (result.rowCount === 0) {
			return json({ error: 'User not found' }, { status: 404 });
		}

		const deletedId = result.rows[0].id;
		return json({ user: { id: deletedId } }, { status: 200 });
	} catch (err) {
		console.error(err);
		return json({ error: 'Server error' }, { status: 500 });
	}
}
