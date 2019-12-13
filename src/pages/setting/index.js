import React ,{Component}from 'react'
import "../../assets/css/setting/setting.css"
import ReactDom from "react-dom"
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import {settingRoutes} from "../../router/index"



import SettingHeard from "./components/heare"


class Setting extends Component{
    
    render(){
        return(
          <div className="setting">
              <SettingHeard>

        <Switch>
      
            {
                settingRoutes.map(item=>{
                  return <Route key={item.pathname} path={item.pathname} render={(routerProps)=><item.component {...routerProps}/>}/>
                })
               
            }
            <Redirect to={settingRoutes[0].pathname} from="/admin/setting"/>>
            
        </Switch>
    </SettingHeard>
          </div>
        )
    }

     
}

export default Setting