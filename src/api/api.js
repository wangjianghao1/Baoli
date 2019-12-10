import axios from "./axios"

export const getUsetList=()=>{
  return  axios.post("api/userList")
}