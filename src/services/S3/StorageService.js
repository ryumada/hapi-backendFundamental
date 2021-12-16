const AWS = require('aws-sdk');

class StorageService {
	constructor() {
		this._S3 = new AWS.S3();
	}

	writeFile(file, meta) {
		/**
		 * tidak perlu menggunakan teknik stream, karena proses ini akan ditangani layanan S3
		 * tugas kita hanya perlu mendefinisikan parameter berikut
		 */
		const parameter = {
			// eslint-disable-next-line no-undef
			Bucket: process.env.AWS_BUCKET_NAME, // Nama S3 bucket yang ingin digunakan
			Key: +new Date() + meta.filename, // Nama berkas yang akan disimpan
			Body: file._data, // Berkas (dalam bentuk Buffer) yang akan disimpan
			ContentType: meta.headers['content-type'], // MIME Type berkas yang akan disimpan
		};

		return new Promise((resolve, reject) => {
			this._S3.upload(parameter, (error, data) => {
				if(error) {
					return reject(error);
				}
	
				return resolve(data.Location);
			});
		});
	}
}

module.exports = StorageService;
