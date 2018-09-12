import {
    FETCH_LOCATION_BY_ID_PENDING,
    FETCH_LOCATION_BY_ID_FULFILLED,
    FETCH_LOCATION_BY_ID_REJECTED
} from '../actions/actions'

const initialState={
    error:null,
    fetched:false,
    location:[]
}

export default(state=initialState,action)=>{
    switch(action.type){
        case FETCH_LOCATION_BY_ID_PENDING:
            return {
                ...state,
                fetched:false
            };
		case FETCH_LOCATION_BY_ID_FULFILLED:
			return {
				...state,
                location: action.payload,
                fetched:true
			};
		case FETCH_LOCATION_BY_ID_REJECTED:
			return {
				...state,
                error: action.payload,
                fetched:false
			};
        default:
            return state
    }
        
}