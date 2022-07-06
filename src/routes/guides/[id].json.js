import db from '../../lib/database';

export async function get({ params }) {
	const id = params.id;
	const guide = await db.prepare('SELECT * FROM guides WHERE id = ?').get(id);

	if (guide) {
		return {
			status: 200,
			body: { guide }
		};
	}
}
