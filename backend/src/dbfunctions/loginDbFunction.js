import {userProfile} from "../models/registerModels.js";

const loginDbFunction =async (data)=>{
    const {username,password}=data;
    return new Promise((resolve,reject)=>{
        const query = {email: username, password: password};
        userProfile.findOne(query).exec().then((result)=>{
            if(result){
                resolve(result);
            }else {
				resolve(0);
			}
        }).catch(err => {
			reject(err);
		});



    })

};
export {loginDbFunction};
