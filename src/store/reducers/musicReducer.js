import actionType from "../actions/actionTypes";


const initState = {
    curSongId: null,
    curSongData: null,
    isPlaying: false,
    isAlbum: false,
    songs: null,
    curPlayList: null,
    recentSongs: [],
    searchData: {},
}

const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_CUR_MUSIC:
            return {
                ...state,
                curSongId: action.songId || null
            };
        case actionType.PLAY_MUSIC:
            return {
                ...state,
                isPlaying: action.flag
            };
        case actionType.SET_ALBUM:
            return {
                ...state,
                isAlbum: action.flag
            };
        case actionType.PLAY_LIST:
            return {
                ...state,
                songs: action.songs || null
            };
        case actionType.SET_CUR_SONG_DATA:
            return {
                ...state,
                curSongData: action.data || null
            };
        case actionType.SET_CUR_PLAYLIST_DATA:
            return {
                ...state,
                curPlayList: action.pid || null
            };
        case actionType.SET_RECENT:
            let songs = state.recentSongs;
            if (action.data) {
                if (songs?.some(i => i.sid === action.data.sid)) {
                    songs = songs.filter((i) => i.sid !== action.data.sid)
                }
                if (songs.length > 19) {
                    songs = songs.filter((i, idx, self) => idx !== self.length - 1)
                }
                songs = [action.data, ...songs]
            }
            return {
                ...state,
                recentSongs: songs
            };
        case actionType.SEARCH:
            return {
                ...state,
                searchData: action.data || {}
            };
        default:
            return state
    }
}
export default musicReducer;