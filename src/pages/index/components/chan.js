import React ,{Component}from 'react'
import { } from 'antd';
import {CSSTransition,TransitionGroup} from "react-transition-group"
import img1 from ".././../../assets/img/bao1.jpg"
import img2 from ".././../../assets/img/bao2.jpg"
import img3 from ".././../../assets/img/bao3.jpg"
import "../../../assets/css/index/style.css"
                      

class IndexChan extends Component{
    constructor(props){
        super(props)
    }
    mouseEnterHandler(e){
   
        
    }
    mouseLeaveHandler(e){
   
    }
    render(){
        return(
          <div className="chan">
            <div className="chan-head">
                <s></s>
                <h2>产业新城  助力区域经济转型升级</h2>
                <em className="chan-head"></em>
            </div>
            <p className="chan-p">根植产业创新沃土，践行PPP市场化运作机制，全面打造产业新城</p>

            <ul className="chan-ul">
            {/* <TransitionGroup> */}
                <li className="chan-ul-li">
                    <img src={img1}/>
                    <div className="chan-ul-tran " onMouseEnter={this.mouseEnterHandler.bind(this)} onMouseLeave={this.mouseLeaveHandler.bind(this)}>
                       <CSSTransition timeout={1000}
                                    classNames="fade">
                        <div className="chan-ul-sh1">
                            <h2>固安产业新城</h2>
                            <p>
                            从农业大县，<br />
                            到“全球技术商业化中心”
                            </p>
                        </div>
                        </CSSTransition>
                    </div>
                </li>

                <li className="chan-ul-li">
                    <img src={img2}/>
                </li>

                <li className="chan-ul-li">
                    <img src={img3}/>
                </li>
                {/* </TransitionGroup> */}
            </ul>

            <div className="chan-foot"></div>
          </div>
        )
    }
}

export default IndexChan