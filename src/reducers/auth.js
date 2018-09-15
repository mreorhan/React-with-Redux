import{
    AUTH_PENDING,
    AUTH_FULFILLED,
    AUTH_REJECTED
} from '../actions/actions'

const initialState={
    fetching:false,
    user:[],
    done:false,
    status:'',
    token:'',
    message:''
}

export default(state=initialState,action)=>{
    switch(action.type){
        case AUTH_PENDING:
            return{
                ...state,
                fetching:true,
                done:false,
                token:'',
                message:''
            }
        case AUTH_FULFILLED:{
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                fetching:false,
                done:true,
                status:action.payload.status,
                token:action.payload.token,
                message:action.payload.message,
            }
        }
        case AUTH_REJECTED:
            return{
                ...state,
                fetching:false,
                done:false,
                token:'',
                message:action.payload.message
            }
        default:
            return state
    }
}