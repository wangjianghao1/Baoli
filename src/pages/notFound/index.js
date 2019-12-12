import React ,{Component}from 'react'
import {Button } from 'antd';
import "../../assets/css/notfound/notfound.css"

class NotFound extends Component{

    render(){
        
        return(
            <div className="notfound">
                <div className="notfound-conent">
                    <Button type="primary" shape="round" icon="arrow-left" onClick={()=>{window.location.href="/"}}>
                        返回首页
                    </Button>
                </div>
            </div>
        )
    }
}

export default NotFound