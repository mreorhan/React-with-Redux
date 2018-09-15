import { combineReducers } from "redux";
import location from './location'
import locationOne from './locationOne'
import auth from './auth'
export default combineReducers({
    location,
    locationOne,
    auth
})