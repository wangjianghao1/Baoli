import React ,{Component}from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {settingRoutes} from "../../../router/index"
import {withRouter} from "react-router-dom"
const { Header,Content } = Layout;
class SettingHeard extends Component{

  state = {
    menus : settingRoutes.filter(item=>item.isNav === true)
  }
  handleClick=(item)=>{
    this.props.history.push( item.key )
    
 }
    
    render(){
      // console.log(settingRoutes)
        return(
          <div className="setting">
          <Layout>
          <Header style={{ position: 'absolute', zIndex: 1, width: '1000px' }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[this.props.location.pathname]}
              style={{ lineHeight: '64px' }}
            >
            {
              this.state.menus.map(item=>{
                      return <Menu.Item 
                      onClick={this.handleClick} 
                      key={item.pathname}>
                      {item.title}
                      </Menu.Item>
                  })
              }
            </Menu>
          </Header>
          <Layout style={{ margin: '60px 24px 24px' }}>
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
        </Layout>,
              
          </div>
        )
    }

     
}

export default withRouter(SettingHeard)