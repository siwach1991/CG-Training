import { task } from '../models/createTaskModel.js';

const createTaskDbFunction = async (data) => {
    return new Promise((reslove, reject) => {
        task.create(data).then((result) => {
            reslove(result);
        }).catch((err) => {
            reject(err);
        })
    })
}

const getTaskDbFunction = async (data)=> {
    const {userId,taskId}=data;
    return new Promise((resolve,reject)=>{
        let query={};
        if(userId){
             query = {user_id: userId};
        }else if(taskId){
             query = {_id: taskId};
        }else{
             query={};
        }
        
        task.find(query).exec().then((result)=>{
            if(result){
                resolve(result);
            }else {
				resolve([]);
			}
        }).catch(err => {
			reject(err);
		});



    })

}

const updateTaskDbFunction = async(data)=>{
    const {id,comment}=data;
    return new Promise((resolve,reject)=>{
        task.findOneAndUpdate({_id :id},{ $push: {"comment": comment}},'').exec().then((result)=>{
            if(result){
                resolve(result);
            }else {
				resolve([]);
			}
        }).catch(err => {
			reject(err);
		});



    })

}

const weeklyTaskDbFunction = async(data)=>{

    const {fd,td}=data;
    return new Promise((resolve,reject)=>{
        const projection =	{_id: 0, name: 1, task_name: 1,assign_date:1,status:1};
        task.find({assign_date: {
            $gte: new Date(fd), 
            $lt: new Date(td)
        }},projection).exec().then((result)=>{
            if(result){
                resolve(result);
            }else {
				resolve([]);
			}
        }).catch(err => {
			reject(err);
		});



    })

}

const dashboadDbFunction= async(data)=>{

    return new Promise((resolve,reject)=>{
        const projection =	{_id: 1, name: 1, task_name: 1,assign_date:1,status:1};
        task.find({},projection).exec().then((result)=>{
            if(result){
                resolve(result);
            }else {
				resolve([]);
			}
        }).catch(err => {
			reject(err);
		});



    })

}
export { createTaskDbFunction,getTaskDbFunction,updateTaskDbFunction,weeklyTaskDbFunction,dashboadDbFunction };
