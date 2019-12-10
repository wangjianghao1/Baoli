import React from 'react'
import ReactDom from "react-dom"
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import App from "./App.js"
import NotFound from "./pages/notFound/index"
import "./assets/css/global.css"
import 'antd/dist/antd.css';
import {mainRoutes} from "./router/index"


ReactDom.render(
    (
    <Router>
        <Switch>
        <Route path="/admin" render={(routerProps)=><App {...routerProps}/>}/>
            {
                mainRoutes.map(item=>{
                    return <Route key={item.pathname} path={item.pathname} component={item.component}/>
                })
               
            }
            <Redirect to="/index" from="/" exact/>
            <Route to="/*" component={NotFound} />
        </Switch>
    </Router>
    ),document.getElementById("root"))
