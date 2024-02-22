import {mongoose} from 'mongoose';
const {Schema} = mongoose;

const registerSchema = new Schema({
	user_id: {type: String, required: true},
	name: {type: String, required: true},
    task_name: {type: String, required: true},
    task_desc: {type: String, required: true},
    assign_date: {type: Date, required: true},
	complete_date: {type: Date, required: true},
    status: {type: String, required: true},
    comment: {type: Array, required: true},

}, {versionKey: false});
const task = mongoose.model('Task', registerSchema, 'Task');

export {task};
