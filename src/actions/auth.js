import Axios from "axios";
import {API_BASE} from '../config/env'

export function authentication(username,password){
    return dispatch=>{
        dispatch({
            type:"AUTH",
            payload: Axios.post(`${API_BASE}/auth`,{
                username,
                password
            }).then(res=>res.data)
        })
    }
}