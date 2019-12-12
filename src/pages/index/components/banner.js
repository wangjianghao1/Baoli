import React ,{Component}from 'react'
import { Carousel } from 'antd';
import banner1 from "../../../assets/img/banner-a.jpg"
import banner2 from "../../../assets/img/banner2.jpg"
import banner3 from "../../../assets/img/banner3.jpg"
class IndexBanner extends Component{
    render(){
       
        return(
          <div className="index-banner">
              
            <Carousel autoplay></Carousel>
            <Carousel autoplay>
                <div>
                     <img src={banner1} className="index-banner-img"/>
                </div>

                <div>
                    <img  src={banner2} className="index-banner-img"/>
                </div>
                <div>
                    <img  src={banner3} className="index-banner-img"/>
                </div>
            </Carousel>,
                <div className="banner-title">
                <Carousel autoplay dots={false}>
                    <div>
                        <div className="banner-title-p">
                            <p className="banner-title-pri">
                                不忘初心<br />
                            携20年之经验<br />
                            致力成为全球产业新城
                            </p>
                            <h2>产业新城运营商</h2>
                        </div>
                    </div>
                    <div>
                    <div className="banner-title-p">
                            <p className="banner-title-pri">
                                不忘初心<br />
                            携20年之经验<br />
                            致力成为全球产业新城
                            </p>
                            <h2>产业新城运营商</h2>
                        </div>
                    </div>
                    <div>
                    <div className="banner-title-p">
                            <p className="banner-title-pri">
                                不忘初心<br />
                            携20年之经验<br />
                            致力成为全球产业新城
                            </p>
                            <h2>产业新城运营商</h2>
                        </div>
                    </div>
                </Carousel>

                </div>
          </div>
          
        )
    }
}

export default IndexBanner