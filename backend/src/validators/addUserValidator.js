import {body, validationResult} from 'express-validator';

const validatePayload = (req, res, next) => {
	const error = validationResult(req);
	if (error.isEmpty()) {
		next();
	} else {
		res.status(400).json({errors: error.array()}).end();
	}
};

const createUserProfilePayload = () => [
	body('name').exists().isString(),
	body('email').exists().isString(),
	body('password').exists().isString(),
    body('status').exists().isString(),
];

const checkLoginPayload = () =>[
	body('username').exists().isString(),
	body('password').exists().isString(),
];

export {validatePayload, createUserProfilePayload,checkLoginPayload};
