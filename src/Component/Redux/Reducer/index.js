import { combineReducers } from "redux";
import ClickData from "./Click_Data";
import Fetch_API from "./Fetch_API";
const myReducer=combineReducers({
     Fetch_API:Fetch_API,
     ClickData
})
export default myReducer;