import actionType from "./actionTypes";
import * as apis from '../../apis'

export const getMusicCur = (songId) => ({
    type: actionType.SET_CUR_MUSIC,
    songId
})

export const playMusic = (flag) => ({
    type: actionType.PLAY_MUSIC,
    flag
})

export const playAlbum = (flag) => ({
    type: actionType.SET_ALBUM,
    flag
})
export const loading = (flag) => ({
    type: actionType.LOADING,
    flag
})

export const playListSong = (songs) => ({
    type: actionType.PLAY_LIST,
    songs
})
export const setCurSongData = (data) => ({
    type: actionType.SET_CUR_SONG_DATA,
    data
})
export const setCurListData = (pid) => ({
    type: actionType.SET_CUR_PLAYLIST_DATA,
    pid
})
export const setRecent = (data) => ({
    type: actionType.SET_RECENT,
    data
})
export const search = (keyword) => async (dispatch) => {
    try {
        const res = await apis.apiSearch(keyword)
        if (res.data.err === 0) {
            dispatch({ type: actionType.SEARCH, data: res.data.data, keyword })
        } else {
            dispatch({ type: actionType.SEARCH, data: null })
        }
    } catch (error) {
        dispatch({
            type: actionType.SEARCH,
            data: null
        })
    }
}
export const getSearchSong = (pid) => async (dispatch) => {
    try {
        const res = await apis.apiGetDetailPlayList(pid)
        if (res.data.err === 0) {
            dispatch({ type: actionType.PLAY_LIST, songs: res.data.data.song.items })
        } else {
            dispatch({ type: actionType.PLAY_LIST, songs: null })
        }
    } catch (error) {
        dispatch({
            type: actionType.PLAY_LIST,
            songs: null
        })
    }
}