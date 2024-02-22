import { registerDbFunction } from '../dbfunctions/registerDbFunction.js';

const registerService = async (data) => {
    return new Promise((reslove, reject) => {
        registerDbFunction(data).then((result) => {
            reslove(result);
        }).catch((err) => {
            reject(err);
        })
    });
}

export { registerService };
