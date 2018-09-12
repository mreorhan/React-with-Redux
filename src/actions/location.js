import Axios from "axios";
import {API_BASE} from '../config/env'
export function fetchLocation(){
    return dispatch=>{
        dispatch({
            type: "FETCH_LOCATIONS",
            payload: Axios.get(`${API_BASE}/tasks/1`)
                    .then(res=>res.data)
        })
    }
    
}

export function fetchLocationById(id){
    return dispatch=>{
        dispatch({
            type: "FETCH_LOCATION_BY_ID",
            payload: Axios.get(`${API_BASE}/tasks/task/${id}`)
                    .then(res=>res.data)
        })
    }
    
}

export function addLocation({title,content,contributors="5af830f2a1507929ec16a221",createdBy="5af830f2a1507929ec16a221",storyId="1",status=2,dueDate="2018-09-08T11:22"}){
    return dispatch=>{
        dispatch({
            type:"EDIT_LOCATIONS",
            payload: Axios.post(`${API_BASE}/tasks`,{
                storyId,
                title,
                content,
                status,
                contributors,
                dueDate,
                createdBy
            })
        })
    }
}
export function editLocation(title,content,id){
    return dispatch=>{
        dispatch({
            type:"EDIT_LOCATIONS",
            payload: Axios.put(`${API_BASE}/tasks/update/${id}`,{
                title:`${title}`,
                content:`${content}`,
            })
        })
    }
}