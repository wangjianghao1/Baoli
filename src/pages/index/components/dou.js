import React, {Component,Fragment} from "react"
import img from "../../../assets/img/buju.jpg"


class IndexDou extends Component{
    render(){
        return(
            <div className="dou">
                <div className="dou-head">
                    <s></s>
                    <h2>都市圈布局  孕育城市发展新未来</h2>
                    <em className="dou-right"></em>
                </div>
                <p className="dou-p">围绕国家战略重点区域，积极布局核心都市圈，创造城市可持续的繁荣</p>
                <div className="dou-img">
                    <img src={img}/>
                </div>
            </div>
        )
    }
}


export default IndexDou