import {loginService} from "../service/loginService.js";

const login =async (req,res)=>{
    const data = req.body;
    try {
        const response = await loginService(data);
        if(response==0){
            res.status(401).json({"status":401,"message":"Unauthorized user"});
        }else{
            res.status(200).json(response);
        }
       
        
    } catch (error) {
        res.status(500).json({status: 500, message: 'Internal Server Error'});

    }

}

export {login};
