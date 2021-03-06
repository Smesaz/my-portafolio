import {ActionTypes} from '../constants';
import axios from 'axios';

export function postMail(input){

    return async (dispatch)=>{
        try {
            var json = await axios.post(`https://sebastianmesa-api.herokuapp.com/postMail`, input);
            return dispatch({
                type:ActionTypes.POST_MAIL,
                payload: json.data,
            });
        } catch (err){
            console.log(err);
            return dispatch({
                type:ActionTypes.POST_MAIL,
                payload: {
                    error: `There was a problem sending the Email. Try again,`
                },
            });
        }
    }
}