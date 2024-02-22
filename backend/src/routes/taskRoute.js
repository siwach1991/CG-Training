import  express from "express";
const router = express.Router();
import {createTask,getTask,updateTask,weeklyReport,dashboard} from '../controller/taskControler.js'
import {validatePayload,checkLoginPayload } from '../validators/addUserValidator.js';

router.post('/createTask',createTask);
router.post('/getTask',getTask);
router.post('/updateTask',updateTask);
router.post('/weeklyReport',weeklyReport);
router.get('/dashboard',dashboard);

export {router};
