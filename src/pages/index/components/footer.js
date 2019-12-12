import React,{Component}from 'react'
import {withRouter} from 'react-router-dom';
import img1 from "../../../assets/img/iweixin.png"
import img2 from "../../../assets/img/iin.png"
import img3 from "../../../assets/img/er.jpg"
import img4 from "../../../assets/img/gov.gif"

class IndexFooter extends Component{
    constructor(props){
        super(props)
        this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
        console.log(this.props)
        this.props.history.push('/login')
    }
    render(){
        return(
          <div className="footer">
            <div className="index-footer-i"></div>
            <div className="footer-nav">
                <div className="footer-nav-title">
                    <h2>合作共赢</h2>
                    <ul>
                        <li>华夏幸福产业新城合作</li>
                        <li>华夏幸福产业发展合作</li>
                        <li>华夏幸福研究与洞察</li>
                        <li>供方合作</li>
                    </ul>
                </div>

                <div className="footer-nav-title">
                    <h2>投资者关系</h2>
                    <ul>
                        <li>公司资料</li>
                        <li>公司公告</li>
                        <li>公司治理</li>
                        <li>投资者互动</li>
                        <li>投资者保护</li>
                    </ul>
                </div>

                <div className="footer-nav-title">
                    <h2>加入我们</h2>
                    <ul>
                        <li>人才理念</li>
                        <li>校园招聘</li>
                        <li>社会招聘</li>
                    </ul>
                </div>

                <div className="footer-nav-title">
                    <h2>华夏幸福网群</h2>
                    <ul>
                        <li>华夏幸福大学</li>
                        <li>河北华夏幸福足球俱乐部</li>
                        <li>幸福基业物业</li>
                        <li>孔雀城</li>
                    </ul>
                </div>

                <div className="footer-nav-title">
                    <h2></h2>
                    <ul>
                        <li>Techcode太库</li>
                        <li>华夏幸福产业新城合作</li>
                        <li>伙伴招商</li>
                        <li>火炬孵化</li>
                    </ul>
                </div>

                <div className="footer-nav-list">
                    <h2>关注我们</h2>
                    <ul>
                        <li>
                            <div className="footer-list-weixin">
                                <img src={img1} className="wx"/>
                                <span>
                                    <img src={img2} className="ines"/>
                                </span>
                            </div>
                        </li>

                        <li>
                            <img src={img3} className="footer-nav-erwei"/>
                        </li>

                        <li>
                            <a className="footer-init" onClick={this.clickHandler}>员工入口</a>
                    
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-fa">
                <span>法律声明</span>
                <span>|</span>
                <span>隐私保护</span>
                <span>|</span>
                <span>网站地图</span>
            </div>

            <div className="footer-foot">
                <div className="footer-foot-title">
                    版权所有 廊坊京御房地产开发有限公司@2019，保留一切权力。ICP备案序号：冀ICP备10007376号-4
                    
                </div>
                <div className="footer-foot-img">
                    <img src={img4}/>
                </div>
            </div>
          </div>
        )
    }
}

export default  withRouter(IndexFooter)