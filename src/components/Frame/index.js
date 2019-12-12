import React, { Component } from "react"
import { Layout, Menu, Icon } from 'antd';
import {withRouter} from "react-router-dom"
import "../../assets/css/admin/admin.css"
import logo from "../../assets/img/logo.png"
import {adminRoutes} from "../../router"

const menus = adminRoutes.filter(item=>item.isNav === true)

const { Header, Content, Sider } = Layout;
class Admin extends Component {
    handleClick=(item)=>{
       this.props.history.push( item.key )
    }
    render() {
      
        return (
            <Layout>
                <Header className="header" style={{background:"cadetblue"}}>
                    <img className="admin-logo" src={logo} alt=" "/>
                    <div className="admin-title">
                        <h1>后&nbsp;台&nbsp;管&nbsp;理</h1>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[this.props.location.pathname]}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            {
                            menus.map(item=>{
                                    return <Menu.Item 
                                    onClick={this.handleClick} 
                                    key={item.pathname}>
                                    <Icon type={item.icon} / >
                                    {item.title}
                                    </Menu.Item>
                                })
                            }
                                
                            
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                marginTop: 24,
                                height: "auto",
                            }}
                        >
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(Admin)