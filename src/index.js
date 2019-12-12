import React from 'react'
import ReactDom from "react-dom"
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import App from "./App.js"
import {Provider} from "react-redux"
import NotFound from "./pages/notFound/index"
import "./assets/css/global.css"
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css' ;
import {mainRoutes} from "./router/index"
import store from "./store/store"

ReactDom.render(
    (
    <Provider store={store}>
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
    </Provider>
    ),document.getElementById("root"))
