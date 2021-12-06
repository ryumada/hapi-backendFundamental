const { Pool } = require('pg');
const InvariantError = require('../../exceptions/InvariantError');

class AuthenticationsService {
	constructor() {
		this._pool = new Pool();
		this._tbName = 'authentications';
	}

	async addRefreshToken(token) {
		const query = {
			text: 'INSERT INTO $1 VALUES($2)',
			values: [this._tbName, token],
		};

		await this._pool.query(query);
	}

	async verifyRefreshToken(token) {
		const query = {
			text: 'SELECT token FROM $1 WHERE token = $2',
			values: [this._tbName, token],
		};

		const result = await this._pool.query(query);

		if(!result.rowCount) {
			throw new InvariantError('Refresh token tidak valid');
		}
	}

	async deleteRefreshToken(token) {
		const query = {
			text: 'DELETE FROM $1 WHERE token = $2',
			vaues: [this._tbName, token],
		};

		await this._pool.query(query);
	}
}

module.exports = AuthenticationsService;
