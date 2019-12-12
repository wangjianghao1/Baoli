import axios from "./axios"




export const userLogin = (userInfo)=>{
  
   return axios.post("api/userList",userInfo)
   
}
