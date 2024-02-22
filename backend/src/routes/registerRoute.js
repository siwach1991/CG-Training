import  express from "express";
const router = express.Router();
import {register} from '../controller/registerController.js'
import {validatePayload,createUserProfilePayload } from '../validators/addUserValidator.js';

router.post('/register',createUserProfilePayload(),validatePayload,register);

export {router};
