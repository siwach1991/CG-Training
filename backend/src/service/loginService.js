import {loginDbFunction} from "../dbfunctions/loginDbFunction.js";

const loginService = async(data)=>{
    return new Promise((resolve,reject)=>{
        loginDbFunction(data).then((result)=>{
            resolve(result);

        }).catch((err)=>{
            reject(err);
        })

    })

}
export {loginService};
