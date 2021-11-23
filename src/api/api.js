import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers:     {
        "API-KEY": "31304458-cb11-44ad-9951-ba1df13cf644"
    }
})

export const userAPI = {
    getUsers (currentPage=1, pageSize=10) {
        return  instance.get(`/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => {
            return response.data
        });
    },
    follow(userId) {
        return  instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
     return  instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    }
}

export const authAPI = {
    me () {
       return instance.get(`auth/me`)
    }
}



