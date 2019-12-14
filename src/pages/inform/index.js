import React ,{Component}from 'react'
import { Table,Progress, Form,message } from 'antd';
import "../../assets/css/yuangong/yuangong.css"
import {getYgongList} from "../../api/api"

  
//   const data = [
//     {
//       name: '某某某',
//       zhiwu: '专员',
//       kao: '正常',
//       gongzi:"14000",
//       jiaban:"5000",
//       jindu:'刘总审理中...'
//     },
   
//   ];


class Inform extends Component{
   state={
       data:[],
       columns : [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '职务',
          dataIndex: 'zhiwu',
          key: 'zhiwu',
        },
        {
          title: '考勤情况',
          dataIndex: 'kao',
          key: 'kao',
          
        },
        {
            title: '基本工资',
            dataIndex: 'gongzi',
            key:'gongzi',
          },{
            title: '加班补助',
            dataIndex: 'jiaban',
            key:"jiaban"
          },{
            title: '申请流程进度',
            dataIndex:'jindu',
            key:"jindu"
          },
         
      ]
   }
    render(){
      
        return(
          <div className="abc">
              {/* 头部表格 */}
              <Table
                    columns= {this.state.columns}
                    dataSource={this.state.data}
                  
                    title={() => "个人信息" }
                    pagination={false}
                    />

                    {/* 进度条 */}
                    <Progress
                    type="circle"
                    strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                    }}
                    percent={78}
                    width={"50px"}
                    style={{position:"absolute",top:"135px",right:"100px"}}
                    
                />
                <div>
                    {/* 个人工资及交保险基数 */}
                    <div style={{border:"1px solid #333",width:"50%",height:"550px",float:"left"}}>
                        <p className="left_baoxian">基本工资</p>
                            <div className="left_qian">10000</div>
                        <p className="left_baoxian" >加班补贴</p>
                            <div className="left_qian">4000</div>    
                        <p className="left_baoxian">养老保险</p>
                            <div className="left_qian">800</div>
                        <p className="left_baoxian">失业保险</p>
                            <div className="left_qian">50</div>
                        <p className="left_baoxian">工伤保险</p>
                            <div className="left_qian" >0</div>
                        <p className="left_baoxian">医疗保险</p>
                            <div className="left_qian">200</div>
                        <p className="left_baoxian">公积金</p>
                            <div className="left_qian">700</div>
                        <p className="left_baoxian">应发工资</p>
                            <div className="left_qian" style={{marginBottom:"50px"}}>16260</div>
                    </div>
                    {/* 公司交保险基数 */}
                    <div style={{border:"1px solid #333",width:"50%",height:"550px",float:"right"}}>
                        <p className="right_baoxian">个人所得税</p>
                            <div className="right_qian">97</div>
                        <p className="right_baoxian">养老保险</p>
                            <div className="right_qian">2000</div>
                        <p className="right_baoxian">失业保险</p>
                            <div className="right_qian">50</div>
                        <p className="right_baoxian">工伤保险</p>
                            <div className="right_qian" >50</div>
                        <p className="right_baoxian">医疗保险</p>
                            <div className="right_qian">950</div>
                        <p className="right_baoxian">公积金</p>
                            <div className="right_qian">700</div>
                        <p className="right_baoxian">公司支付</p>
                            <div className="right_qian">4010</div>
                        <p className="right_baoxian">实发工资</p>   
                            <div className="right_qian" style={{marginBottom:"50px"}}>12300</div>
                        
                    </div>
                </div>
         </div>
        )
    }
    getdata=(msg)=>{
        getYgongList().then(res=>{
          this.setState({
            data : [...res.data.yuangongcon],
            total : res.data.total
          },()=>{
            this.setState({
              loading : false
            })
          })
          msg&&message.success(msg)
        })
      }
      
      // 获取数据的生命周期
          componentDidMount(){
           this.getdata()
            
          }
}

export default Form.create()(Inform)