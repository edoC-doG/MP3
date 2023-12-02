import actionType from "./actionTypes";
import * as apis from '../../apis';


export const getHome = () => async (dispatch) => {
    try {
        const res = await apis.getHome()
        if (res?.data.err === 0) {
            dispatch({
                type: actionType.GET_HOME,
                homeData: res.data.data.items
            })
        } else {
            dispatch({
                type: actionType.GET_HOME,
                homeData: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_HOME,
            homeData: null
        })
    }
}

export const zeroScrollTop = (flag) => ({
    type: actionType.ZERO_SCROLL,
    flag
})