
import React ,{Component}from 'react'
import {Icon ,BackTop} from 'antd';

class   IndexTop extends Component{

    render(){
        return(
            <div className="index-top">
                <BackTop  visibilityHeight={200}/>
                <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}>  </strong>
               
          </div>
        )
    }
}

export default IndexTop