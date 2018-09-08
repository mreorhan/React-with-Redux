import Axios from "axios";
import {API_BASE} from '../config/env'
export function fetchLocation(){
    return dispatch=>{
        dispatch({
            type: "FETCH_LOCATIONS",
            payload: Axios.get(`${API_BASE}/posts`)
                    .then(res=>res.data)
        })
    }
    
}