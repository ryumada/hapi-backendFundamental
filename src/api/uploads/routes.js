const path = require('path');

const routes = (handler) => [
	{
		method: 'POST',
		path: '/upload/images',
		handler: handler.postUploadImageHandler,
		options: {
			payload: {
				allow: 'multipart/form-data',
				multipart: true,
				output: 'stream',
				maxBytes: 500000, // 500KB,  defaultnya 1048576 Bytes atau 1MB dari Hapi
			},
		},
	},
	// untuk mengizinkan akses file statis
	{
		method: 'GET',
		path: '/upload/{param*}',
		handler: {
			directory: {
				// eslint-disable-next-line no-undef
				path: path.resolve(__dirname, 'file'),
			},
		},
	},
];

module.exports = routes;
