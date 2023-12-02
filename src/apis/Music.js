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

export const apiGetArtistSong = (singerId) => new Promise(async (resolve, reject) => {
    try {
        const res = await axios({
            url: '/artistsong',
            method: 'get',
            params: {
                id: singerId,
                page: 1,
                count: 50
            }
        })
        resolve(res)
    } catch (error) {
        reject(error)
    }
})

export const apiGetArtist = (alias) => new Promise(async (resolve, reject) => {
    try {
        const res = await axios({
            url: '/artist',
            method: 'get',
            params: {
                name: alias
            }
        })
        resolve(res)
    } catch (error) {
        reject(error)
    }
})
export const apiGetChartHome = () => new Promise(async (resolve, reject) => {
    try {
        const res = await axios({
            url: '/charthome',
            method: 'get',
        })
        resolve(res)
    } catch (error) {
        reject(error)
    }
})