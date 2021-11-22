import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers:     {
        "API-KEY": "e29eaf34-0078-4db0-8f75-2a0c55c57af6"
    }
})

export const getUsers = (currentPage=1, pageSize=10) => {
  return  instance.get(`/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    }).then(response => {
        return response.data
    });
}

