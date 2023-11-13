import actionType from "../actions/actionTypes";


const initState = {
    curSongId: null,
    isPlaying: false,
    isAlbum: false,
    songs: null
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
        case actionType.SET_ALBUM:
            return {
                ...state,
                isAlbum: action.flag
            }
        case actionType.PLAY_LIST:
            return {
                ...state,
                songs: action.songs || null
            }
        default:
            return state
    }
}
export default musicReducer;