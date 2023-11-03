import { createStore, applyMiddleware } from "redux";
import rooReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk"


const reduxConfig = () => {
    const store = createStore(rooReducer, applyMiddleware(thunk))
    return store
}

export default reduxConfig;