import  express from "express";
const router = express.Router();
import {login} from '../controller/loginControler.js'
import {validatePayload,checkLoginPayload } from '../validators/addUserValidator.js';

router.post('/login',checkLoginPayload(),validatePayload,login);

export {router};
