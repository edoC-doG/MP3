import actionType from "./actionTypes";

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
// export const fetchPlayListDetail = (pid) => async (dispatch) => {
//     try {
//         const res = await apis.apiGetDetailPlayList(pid)
//         if (res?.data.err === 0) {
//             dispatch({
//                 type: actionType.PLAY_LIST,
//                 songs: res.data?.data?.song?.items
//             })
//         }
//     } catch (error) {
//         dispatch({
//             type: actionType.PLAY_LIST,
//             songs: null,
//         })
//     }
// }