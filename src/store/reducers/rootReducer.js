import appReducer from './appReducer';
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import musicReducer from './musicReducer';

const commonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
}

const musicConfig = {
    ...commonConfig,
    key: 'music',
    whitelist: ['curSongId', 'curSongData', 'curPlayList']
}


const rooReducer = combineReducers({
    app: appReducer,
    music: persistReducer(musicConfig, musicReducer)
})



export default rooReducer