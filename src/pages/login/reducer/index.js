
import {userLogin} from "../../../api/api"
const userInfo = JSON.parse(localStorage.getItem("userInfo"))
const defaultState={
    data:{      "acatar": "http://dummyimage.com/180x150",
    "nickname": "段秀英",
    "uid": "140000201007146718",
    "authToken": "e2c5F80F-FfdE-1beB-9D2C-C5C596fFcFe9",
    "userStatus": 3}
   
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
