import { createStore, applyMiddleware } from "redux";
import rooReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk"
import { persistStore } from "redux-persist";


const reduxConfig = () => {
    const store = createStore(rooReducer, applyMiddleware(thunk))
    const persistor = persistStore(store)
    return { store, persistor }
}

export default reduxConfig;