import axios from './axios'
// 获取数据接口
export const getUserList=()=>{
    return axios.get("/api/listcon")
   
}

// 人事页删除数据接口
export const getDeletelist=(id)=>{
    return axios.post("/api/deleteArticle",{id})
}
// 头部员工信息接口
export const getYgongList=()=>{
    return axios.post("/api/top")
}

export const userLogin=(userInfo)=>{

    return axios.post("/api/user",userInfo)
}