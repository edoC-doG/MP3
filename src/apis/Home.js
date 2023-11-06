import axios from '../axios.js'

export const getHome = () => new Promise(async(resolve, reject) => {
    try {
        const res = await axios ({
            url:'/home',
            method: 'get',
        })
        resolve(res)
    } catch (error) {
        reject(error)
    }
})