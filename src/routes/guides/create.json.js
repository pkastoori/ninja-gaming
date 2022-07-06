import db from '../../lib/database';

export async function post({ request }) {
	const { title, description } = await request.json();

	let statement = `INSERT INTO guides (title, body) VALUES ( '${title}', '${description}')`;
	const insert = await db.prepare(statement);
	const guide = insert.run();

	if (guide) {
		return {
			status: 200,
			body: { guide }
		};
	}
}
