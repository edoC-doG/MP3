import actionType from "./actionTypes";
import * as apis from '../../apis';


export const getMusicCur = (songId) => ({
    type: actionType.SET_CUR_MUSIC,
    songId
})