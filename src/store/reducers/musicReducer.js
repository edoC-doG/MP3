import actionType from "../actions/actionTypes";


const initState = {
    curSongId: null
}

const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_CUR_MUSIC:
            return {
                ...state,
                curSongId: action.songId || null
            }
        default:
            return state
    }
}
export default musicReducer;