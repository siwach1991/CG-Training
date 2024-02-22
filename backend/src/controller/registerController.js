import {registerService} from '../service/registerService.js';

const register = async(req,res)=>{
    const data =req.body;
    try{
        const response = await registerService(data);
		res.status(201).json(response);
    }catch(err){
       // console.log(err);
		res.status(500).json({status: 'fail', message: 'Internal Server Error'});
    }
}

export {register};
