import actionType from "./actionTypes";

export const getMusicCur = (songId) => ({
    type: actionType.SET_CUR_MUSIC,
    songId
})

export const playMusic = (flag) => ({
    type: actionType.PLAY_MUSIC,
    flag
})  