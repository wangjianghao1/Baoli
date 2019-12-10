import React ,{Component,Fragment}from 'react'
import {Menu, Dropdown, Icon} from 'antd';
// const { SubMenu } = Menu;
// import "../../../assets/css/index/index.css"
import img from "../../../assets/img/ilogo.png"
const menu = (
    <Menu > 
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          数说华夏幸福
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          发展历程
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          公司荣誉
        </a>
      </Menu.Item>
    </Menu>
  );

class IndexHeader extends Component{
 
    render(){
        return(
          <Fragment>
            <div className="index-header">
                <div className="index-header-back"></div>
                <div className="index-logo">
                    <div className="index-logo-img">
                        <img src={img}/>
                    </div>
                    <div className="index-logo-nav">
                        <Dropdown overlay={menu} placement={"bottomCenter"} >
                            <a className="ant-dropdown-link" href="#">
                               联系我们 
                            </a>
                        </Dropdown>

                        <Dropdown overlay={menu} placement={"bottomCenter"} >
                            <a className="ant-dropdown-link" href="#">
                                产业新城 
                            </a>
                        </Dropdown>

                        <Dropdown overlay={menu} placement={"bottomCenter"} >
                            <a className="ant-dropdown-link" href="#">
                                产业集群 
                            </a>
                        </Dropdown>

                        <Dropdown overlay={menu} placement={"bottomCenter"} >
                            <a className="ant-dropdown-link" href="#">
                                研究与洞察
                            </a>
                        </Dropdown>

                        <Dropdown overlay={menu} placement={"bottomCenter"} >
                            <a className="ant-dropdown-link" href="#">
                                联系我们 
                            </a>
                        </Dropdown>
                    </div>
            
                </div>
            

            </div>
          </Fragment>
          
        )
    }
}

export default IndexHeader