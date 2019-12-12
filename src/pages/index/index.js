import React ,{Component}from 'react'
import { } from 'antd';
import IndexHeader from "./components/header.js"
import IndexBanner from "./components/banner.js"
import "../../assets/css/index/index.css"




class Index extends Component{
   
    render(){
        return(
          <div className="index">
                <IndexHeader />
                <IndexBanner />
          </div>
          
        )
    }
}

export default Index