import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import {adminRoutes} from "./router/index"
import Frame from "./components/Frame"


class App extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <Frame>
                <Switch>
                {
                    adminRoutes.map(item=>{
                        return <Route key={item.pathname} path={item.pathname} render={(routerProps)=><item.component {...routerProps}/>}/>
                    })
                }
                <Redirect to={adminRoutes[0].pathname} from="/admin" exact/>
                </Switch>
            </Frame>
        )
    }
}
 
export default App