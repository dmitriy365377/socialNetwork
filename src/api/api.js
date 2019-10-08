import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API KEY": "76e2a07a-29f2-4bfa-aa9a-0d3b56e0f239"
    }
})

export const usersAPI = {
    getUsers(currentPage , pageSize ) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                return response.data;
            })
    }
}

 