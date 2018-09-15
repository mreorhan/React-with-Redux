import {
    FETCH_LOCATIONS_PENDING,
    FETCH_LOCATIONS_FULFILLED,
    FETCH_LOCATIONS_REJECTED
} from '../actions/actions'

const initialState={
    locationList:[],
    error:null,
    fetched:false
}

export default(state=initialState,action)=>{
    switch(action.type){
        case FETCH_LOCATIONS_PENDING:
			return {
                ...state,
                fetched:false
			};
		case FETCH_LOCATIONS_FULFILLED:
			return {
				...state,
                locationList: action.payload,
                fetched:true
			};
		case FETCH_LOCATIONS_REJECTED:
			return {
				...state,
                error: action.payload.message,
                fetched:false
            };
        default:
            return state
    }
        
}