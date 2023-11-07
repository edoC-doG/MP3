import actionType from "../actions/actionTypes";


const initState = {
    curSongId: null,
    isPlaying: false
}

const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_CUR_MUSIC:
            return {
                ...state,
                curSongId: action.songId || null
            }
        case actionType.PLAY_MUSIC:
            return {
                ...state,
                isPlaying: action.flag
            }
        default:
            return state
    }
}
export default musicReducer;