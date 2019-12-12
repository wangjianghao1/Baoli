import React ,{Component}from 'react'
import { Card,Button,message } from 'antd';
import moment from "moment"
import '../../assets/css/bianji/bianji.css'


class Bian extends Component{
   
    render(){
      // 获取传递过来的数据
      const state=this.props.history.location.state
        return(
          <>
          <Card title="员工编辑" bordered={false} style={{ width: "100% ",height:"55px",background:"pink" }} />
          {/* 将获取的数据进行渲染 */}
          <h5>姓名</h5>  <span className="span_state" contentEditable >{state.author}</span><br/>
          <h5>工号</h5>  <span className="span_state" contentEditable> {state.id}</span><br/>
          <h5>部门</h5> <span className="span_state" contentEditable> {state.Articletitle}</span><br/>
          <h5>入职时间</h5> <span className="span_state" contentEditable>{moment(state.Creationtime).format("YYYY-MM-DD")}</span><br/>
          <Button onClick={this.handleQuxiao} type="primary" style={{margin:"5px 20px 0px 0px"}}>取消</Button>
          <Button onClick={this.handleClick} type="primary" style={{marginTop:"5px"}}>完成</Button>
          </>
        )
    }
    // 修改成功（跳出弹窗，返回人事页面）
    handleClick=()=>{
      message.success('当前信息修改成功')
      
        this.props.history.push("/admin/personnel")
      
    }
    // 取消按钮(重新渲染页面)
    handleQuxiao=()=>{
        
      }

    }
  



export default Bian