import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const connectionString = process.env.CONNECTION_STRING;

const createConnection = async () => {
	try {
		await mongoose.connect(connectionString);
		console.log('data base connected');
	} catch (e) {
		console.log('db connection error' + e);
	}
};

export {createConnection};
