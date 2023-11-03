import actionType from "../actions/actionTypes";

const initState ={
    homeDate: []
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_HOME:
            return state

        default:
            break;
    }
}
export default appReducer;