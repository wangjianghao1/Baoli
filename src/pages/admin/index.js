import React ,{Component}from 'react'



class Admin extends Component {
  state = {
    data : [],
    loading : true,
    total : 0,
    columns : [
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
          dataIndex: 'Articletitle',
          key: 'Articletitle',
         },
        {
          title: '考勤',
          key: 'Readingvolume',
          dataIndex: 'Readingvolume',
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
          key: 'Creationtime',
          dataIndex: 'Creationtime',
          render : text =>(
            <span>
               {moment(text).format("YYYY-MM-DD")}
            </span>
          )
        },
        {
          title : "操作",
          render:(text,record,index)=>(
            <Button.Group>
              <Button type="primary">编辑</Button>
              <Button type="danger" onClick={this.deleteClick.bind(this,record,index)}>删除</Button>
            </Button.Group>
          )
        }
      ]
  }
  // 删除员工信息事件函数
  deleteClick=(record,i)=>{
    Modal.confirm({
      title:"删除后不可找回，确认删除？",
      content:<Text strong={true}>当前删除 :
      <span style={{fontWeight:"900",color:"#333"}}>{record.author}</span>-- 
      <span style={{fontWeight:"900",color:"#333"}}>{record.Articletitle} </span>--
      <span style={{fontWeight:"900",color:"#333"}}>工号{record.id}</span>
              </Text>,
      cancelText:"返回",
      onOk:()=>{
        getDeletelist(record,i)
       .then(res=>{
    //   console.log(res)
        this.state.data.splice(i,1)
    //   console.log(i)
    //   console.log(this.state.data)
        this.setState({
            data : this.state.data
           })
           this.getdata(res.data.masseg)
         })
      }
    })
  }


    render() {
        return (
  <div>
        <div>
          <Select defaultValue="jack" style={{ width: 120 }} onChange={handleChange}>
            <Option onClick={handleClick.bind(this)} value="jack">销售部</Option>
            <Option onClick={handleClick.bind(this)} value="Yiminghe">产品部</Option>
            <Option onClick={handleClick.bind(this)} value="chanpin">客服部</Option>

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
              columns={this.state.columns} 
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
// 获取数据
getdata=(msg)=>{
  getUserList().then(res=>{
    this.setState({
      data : [...res.data.listcon],
      total : res.data.total
    },()=>{
      this.setState({
        loading : false
      })
    })
    msg&&message.success(msg)
  })
}

class Admin extends Component{
    
    render(){
        return(
          <div>人事界面</div>
        )
    }
}

export default Admin