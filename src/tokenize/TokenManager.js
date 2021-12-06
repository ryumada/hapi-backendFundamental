const Jwt = require('@hapi/jwt');
const InvariantError = require('../exceptions/InvariantError');

const TokenManager = {
	// eslint-disable-next-line no-undef
	generateAccessToken: (payload) => Jwt.token.generate(payload, process.env.ACCESS_TOKEN_KEY),
	/**
	 * buat ACCESS_TOKEN_KEY dengan menjalankan kode berikut di node REPL,
	 *  -----------------------------------------------------
	 * > node
	 * > require('crypto').randomBytes(64).toString('hex');
	 *  -----------------------------------------------------
	 */
	// eslint-disable-next-line no-undef
	generateRefreshToken: (payload) => Jwt.token.generate(payload, process.env.REFRESH_TOKEN_KEY),
	// buat REFRESH_TOKEN_KEY dengan cara yang sama dengan ACCESS_TOKEN_KEY
	verifyRefreshToken: (refreshToken) => {
		try {
			const artifacts = Jwt.token.decode(refreshToken);
			// eslint-disable-next-line no-undef
			Jwt.token.verifySignature(artifacts, process.env.REFRESH_TOKEN_KEY);
			const { payload } = artifacts.decoded;
			return payload;
		} catch (error) {
			throw new InvariantError('Refresh token tidak valid');
		}
	},
};

module.exports = TokenManager;
