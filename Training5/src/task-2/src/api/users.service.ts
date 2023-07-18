import axiosInstance from './index'

const fetchUserDetailAPIHandler = async () => {
    try {
        const res = await axiosInstance.get('/api/users/my', {
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('access-token')
            }
        })

        return res.data
    } catch (e) {
        console.log(e)
    }
}

const fetchUsersAPIHandler = async () => {
    try {
        const res = await axiosInstance.get('/api/users', {
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('access-token')
            }
        })

        return res.data
    } catch (e) {
        console.log('dddd', e)
        return e
    }
}

export {fetchUserDetailAPIHandler, fetchUsersAPIHandler}

