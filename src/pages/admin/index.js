import React, { Component } from "react"
import moment from "moment"
import { 
  Card,
  Button,
  Table, 
  ConfigProvider, 
  Tag ,
  Select } from 'antd';
  import zhCN from 'antd/es/locale/zh_CN';
  import {getUserList} from "../../api/api"
const columns = [
  {
    title: '姓名',
    dataIndex: 'author',
    key: 'author',
  },
    {
      title: '工号',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '部门',
      dataIndex: 'Article title.con',
      key: 'Article title',
     
      
      
    },
    {
      title: '考勤',
      key: 'Reading volume',
      dataIndex: 'Reading volume',
      render: text => (
        <span>
          <Tag color={ text >= 300 ? "green" : "red"}>
            {text}
          </Tag>
        </span>
      ),
    },
    {
      title: '入职时间',
      key: 'Creation time',
      dataIndex: 'Creation time',
      render : text =>(
        <span>
           {moment(text).format("YYYY-MM-DD")}
        </span>
      )
    },
    {
      title : "操作",
      render:_=>(
        <Button.Group>
          <Button type="primary">编辑</Button>
          <Button type="danger">删除</Button>
        </Button.Group>
      )
    }
  ];
  
  

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
function handleClick (value) {
  console.log(value.item.props.children);
 
}  
class Admin extends Component {
  state = {
    data : [],
    list:["销售部","产品部","客服部"],
    loading : true,
    total : 0
  }
    render() {
        return (
            <div>
            <div>
      <Select defaultValue="jack" style={{ width: 120 }} onChange={handleChange}>
        <Option onClick={handleClick} value="jack">销售部</Option>
        <Option onClick={handleClick} value="Yiminghe">产品部</Option>
        <Option onClick={handleClick} value="chanpin">客服部</Option>

      </Select>
   
  </div>,
                <Card 
                bordered={false} 
                title="员工信息" 
                extra={<Button type="primary" >下载excal</Button>} 
                style={{ width: "100%" }}/>
                <ConfigProvider locale={zhCN} >
                <Table 
                loading={this.state.loading}
                  rowKey={(record)=>record.id}
                  columns={columns} 
                  dataSource={this.state.data} 
                  
                  pagination={
                    {
                      hideOnSinglePage : true,
                      total : this.state.total,
                      pageSize:5
                    }
                  }
                  
                />
                </ConfigProvider>
            </div>
        )
    }
    componentDidMount(){
     
      getUserList().then(res=>{
        this.setState({
          data : [...res.data.listcon],
          total : res.data.total
        },()=>{
          this.setState({
            loading : false
          })
        })
      })
    }
}

export default Admin