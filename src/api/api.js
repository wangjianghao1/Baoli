import axios from './axios'
// 获取数据接口
export const getUserList=()=>{
    return axios.post("/api/listcon")
   
}

// 删除数据接口
export const getDeletelist=(id)=>{
    return axios.post("/api/deleteArticle",{id})
}

export const userLogin=(userInfo)=>{
    return axios.post("/api/user",{userInfo})
}