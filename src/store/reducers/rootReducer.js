import appReducer from './appReducer';
import { combineReducers} from "redux";

const rooReducer = combineReducers ( {
    app: appReducer,
})



export default rooReducer