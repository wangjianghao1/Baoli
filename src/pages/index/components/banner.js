import React ,{Component}from 'react'
import { Carousel } from 'antd';
import banner1 from "../../../assets/img/banner1.jpg"
import banner2 from "../../../assets/img/banner2.jpg"
import banner3 from "../../../assets/img/banner3.jpg"

class IndexBanner extends Component{
    constructor(props){
        super(props)
    }
    render(){
       
        return(
          <div className="index-banner">
            <Carousel autoplay></Carousel>
            <Carousel autoplay>
                <div>
                    <h3> <img src={banner1} className="index-banner-img"/></h3>
                   
                </div>
                <div>
                    <img  src={banner2}/>
                </div>
                <div>
                    <img  src={banner3}/>
                </div>
            </Carousel>,

          </div>
          
        )
    }
}

export default IndexBanner