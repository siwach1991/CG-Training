import { createTaskDbFunction,getTaskDbFunction,updateTaskDbFunction,weeklyTaskDbFunction,dashboadDbFunction } from '../dbfunctions/taskDBFunction.js';
const createTaskService = (async (data) => {
    return new Promise((reslove, reject) => {
        createTaskDbFunction(data).then((result) => {
            reslove(result);
        }).catch((err) => {
            reject(err);
        })
    });

})
const getTaskservice = (async (data) => {
    return new Promise((reslove, reject) => {
        getTaskDbFunction(data).then((result) => {
            reslove(result);
        }).catch((err) => {
            reject(err);
        })
    });

});

const updateTaskservice = async(data)=>{
    return new Promise((reslove, reject) => {
        updateTaskDbFunction(data).then((result) => {
            reslove(result);
        }).catch((err) => {
            reject(err);
        })
    });
}

const weeklyTaskService = async(data)=>{
    return new Promise((reslove, reject) => {
       
        weeklyTaskDbFunction(data).then((result) => {
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            let obj=[];
            days.forEach((ele)=>{
        
              let fil= result.filter((ele1)=>{
                let d1 = new Date(ele1.assign_date);
                let dayName1 = days[d1.getDay()];
                    return dayName1===ele;
                 });
                
                obj.push({[ele]:fil});   

            })
    
            reslove(obj);
        }).catch((err) => {
            reject(err);
        })
    });

}

const dashboardService = async(data)=>{
    return new Promise((reslove, reject) => {
       
        dashboadDbFunction(data).then((result) => {
            const days = ['To-do', 'Yet To Start', 'In-Progress', 'On-Hold', 'Completed'];
            let obj=[];
            days.forEach((ele)=>{
        
              let fil= result.filter((ele1)=>{
    
                    return ele1.status===ele;
                 });
                
                obj.push({[ele]:fil});   

            })
    
            reslove(obj);
        }).catch((err) => {
            reject(err);
        })
    });

}
export { createTaskService, getTaskservice,updateTaskservice,weeklyTaskService,dashboardService };
