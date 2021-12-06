const Joi = require('joi');

const PostAuthenticationPayloadSchema = Joi.object({
	username: Joi.string().required(),
	password: Joi.string().required(),
});

const PutAuthenticationPayloadSchema = Joi.object({
	refreshToken: Joi.string.required(),
});
// Schema Put dan Delete memiliki skema yang sama, tapi bukan ide yang baik untuk menggabungkannya
const DeleteAuthenticationPayloadSchema = Joi.object({
	refreshToken: Joi.string.required(),
});

module.exports = {
	PostAuthenticationPayloadSchema,
	PutAuthenticationPayloadSchema,
	DeleteAuthenticationPayloadSchema,
};