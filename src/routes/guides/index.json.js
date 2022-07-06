import db from '../../lib/database';

export async function get() {
	const guides = await db.prepare('SELECT * FROM guides').all();

	if (guides) {
		return {
			status: 200,
			body: { guides }
		};
	}
}
