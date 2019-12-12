import React ,{Component}from 'react'
import {} from 'antd';
import IndexHeader from "./components/header.js"
import IndexBanner from "./components/banner.js"
import IndexDou from "./components/dou"
import IndexChan from "./components/chan"
import IndexTop from "./components/top"
import IndexFooter from "./components/footer.js"
import PlayerExample from "./components/vidio"
import "../../assets/css/index/index.css"




class Index extends Component{
 
    render(){
        return(
          <div className="index">
                <IndexHeader />
                <div className="Index-conent">
                    <IndexBanner /> 
                    <PlayerExample />
                    <IndexChan />
                    <IndexDou />
                    <IndexTop />
                    <IndexFooter />
                </div>

          </div>
          
        )
    }
}

export default Index