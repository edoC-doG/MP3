import axios from '../axios.js'

export const apiGetSong = (songId) => new Promise(async (resolve, reject) => {
    try {
        const res = await axios({
            url: '/song',
            method: 'get',
            params: { id: songId }
        })
        resolve(res)
    } catch (error) {
        reject(error)
    }
})


export const apiGetSongDetail = (songId) => new Promise(async (resolve, reject) => {
    try {
        const res = await axios({
            url: '/infosong',
            method: 'get',
            params: { id: songId }
        })
        resolve(res)
    } catch (error) {
        reject(error)
    }
})

export const apiGetDetailPlayList = (playId) => new Promise(async (resolve, reject) => {
    try {
        const res = await axios({
            url: '/detailplaylist',
            method: 'get',
            params: { id: playId }
        })
        resolve(res)
    } catch (error) {
        reject(error)
    }
})

export const apiSearch = (keyword) => new Promise(async (resolve, reject) => {
    try {
        const res = await axios({
            url: '/search',
            method: 'get',
            params: { keyword }
        })
        resolve(res)
    } catch (error) {
        reject(error)
    }
})