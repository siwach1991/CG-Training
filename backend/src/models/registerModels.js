import {mongoose} from 'mongoose';
const {Schema} = mongoose;

const registerSchema = new Schema({
	name: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
	status: {type: Number, required: true},
}, {versionKey: false});
const userProfile = mongoose.model('userProfile', registerSchema, 'userProfile');

export {userProfile};
