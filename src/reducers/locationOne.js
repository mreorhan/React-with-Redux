import {
    FETCH_LOCATION_BY_ID_PENDING,
    FETCH_LOCATION_BY_ID_FULFILLED,
    FETCH_LOCATION_BY_ID_REJECTED,
    DELETE_LOCATION_PENDING,
    DELETE_LOCATION_FULFILLED,
    DELETE_LOCATION_REJECTED,
    ADD_LOCATION_PENDING,
    ADD_LOCATION_FULFILLED,
    ADD_LOCATION_REJECTED

} from '../actions/actions'

const initialState={
    error:null,
    fetched:false,
    location:[],
    result:null,
    done:false
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
        case DELETE_LOCATION_PENDING:
            return {
                ...state,
                fetched:false
            };
        case DELETE_LOCATION_FULFILLED:
			return {
				...state,
                result: action.payload.data.status,
                done:true
			};
		case DELETE_LOCATION_REJECTED:
			return {
				...state,
                error: action.payload.data,
                done:false
            };
        
        case ADD_LOCATION_PENDING:
            return {
                ...state,
                fetched:false
            };
        case ADD_LOCATION_FULFILLED:
			return {
				...state,
                result: action.payload.data.status,
                done:true
			};
		case ADD_LOCATION_REJECTED:
			return {
				...state,
                error: action.payload.data,
                done:false
			};
        default:
            return state
    }
        
}