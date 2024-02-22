import { userProfile } from '../models/registerModels.js';

const registerDbFunction = async (data) => {
    return new Promise((reslove, reject) => {
        userProfile.create(data).then((result) => {
            reslove(result);
        }).catch((err) => {
            reject(err);
        })
    })
}

export { registerDbFunction };
