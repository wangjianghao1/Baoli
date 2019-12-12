import React ,{Component}from 'react'
import echarts from "echarts"
import "../../assets/css/setting/setting.css"



class Setting extends Component{
    
    render(){
        return(
          <div ref={(div)=>this.div=div} className="setting">
          
          </div>
        )
    }
    createEcharts =()=>{
      console.log(this.div)
    const myChart= echarts.init(this.div)

      // 指定图表的配置项和数据
      var option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    }
    componentDidMount(){
      this.createEcharts()
    }
}

export default Setting