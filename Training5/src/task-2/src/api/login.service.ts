import axiosInstance from './index'

const loginAPIHandler = async (data: {email: string, password: string}) => {
    try {
        const  res = await axiosInstance.post('/login', data)
        localStorage.setItem('access-token', res.data.token)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export {loginAPIHandler}