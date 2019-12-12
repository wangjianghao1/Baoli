
import {userLogin} from "../../../api/api"
// const userInfo = JSON.parse(localStorage.getItem("userInfo"))
const defaultState={
    data:{     "acatar": "http://dummyimage.com/300x600",
    "nickname": "乔丽",
    "uid": "810000199301198260",
    "authToken": "2425Fc3E-8BdA-1bED-7ff5-be71EE98e8bD",
    "userStatus": 1}
   
}
const GET_USER_INFO="GET_USER_INFO"

export default(state=defaultState,action)=>{
    switch(action.type){
        case GET_USER_INFO:
            return {data:action.data}
        default :
            return state
    }
}

const getUserInfo=(data)=>({
    type : GET_USER_INFO,
    data
})

export const setUserInfo =(userInfo)=>{
    return (dispatch)=>{
        // console.log(userInfo)
        userLogin(userInfo).then(res=>{
            // console.log(res)
            if(userInfo.remember){
                localStorage.setItem("userInfo",JSON.stringify(res.data))
            }else{
                sessionStorage.setItem("userInfo",JSON.stringify(res.data))
            }
            dispatch(getUserInfo(res.data))
        })
        
    }
}
