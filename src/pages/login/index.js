import React ,{Component}from 'react'
import "../../assets/css/login/login.css"
import LoginContent from "./components/conent"


class Login extends Component{
    constructor(props){
        super(props)
    }


    render(){
      
        return(
            <div className="login">
                <div className="login-ti">
                    <LoginContent />
                </div>
            </div>
        )

    }
}

export default Login