import {createTaskService,getTaskservice,updateTaskservice,weeklyTaskService,dashboardService} from '../service/taskService.js';

const createTask =(async (req,res)=>{
    const data = req.body;
    try {
        const response = await createTaskService(data);
       
        res.status(201).json(response);
        
       
        
    } catch (error) {
        console.log(error);
        res.status(500).json({status: 500, message: 'Internal Server Error'});

    }
})

const getTask = (async(req,res)=>{
    const data = req.body;
    try {
        const response = await getTaskservice(data);
       
        res.status(200).json(response);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({status: 500, message: 'Internal Server Error'});

    }

})

const updateTask = async(req,res)=>{
    const data = req.body;
    try {
        const response = await updateTaskservice(data);
       
        res.status(200).json(response);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({status: 500, message: 'Internal Server Error'});

    }

}

const weeklyReport =async(req,res)=>{
    const data = req.body;
    try {
        const response = await weeklyTaskService(data);
       
        res.status(200).json(response);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({status: 500, message: 'Internal Server Error'});

    }

}

const dashboard = async(req,res)=>{
    const data = req.body;
    try {
        const response = await dashboardService(data);
       
        res.status(200).json(response);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({status: 500, message: 'Internal Server Error'});

    }

}

export {createTask,getTask,updateTask,weeklyReport,dashboard};
