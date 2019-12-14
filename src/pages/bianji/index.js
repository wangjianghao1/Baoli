import React ,{Component}from 'react'
import { Button,message, Form, DatePicker,Input } from 'antd';
import moment from "moment"
import '../../assets/css/bianji/bianji.css'


class Bian extends Component{
   
    render(){
// form表单需要的提取
// const { RangePicker } = DatePicker;
const { getFieldDecorator } = this.props.form;
// const rangeConfig = {
//   rules: [{ type: 'array', required: true, message: 'Please select time!' }],
// };

      // 获取传递过来的数据
      const state=this.props.history.location.state
        return(
          <>
            <Form onSubmit={this.handleSubmit}>
              
                <Form.Item label="姓名">
              {getFieldDecorator('text', {
                
              })(<Input placeholder={state.author} style={{width:"50%"}} />)}
            </Form.Item> 
            <Form.Item label="工号">
              {getFieldDecorator('number', {
              })(<Input placeholder={state.id} style={{width:"50%"}} />)}
            </Form.Item> 
            <Form.Item label="部门">
              {getFieldDecorator('string', {
              })(<Input placeholder={state.Articletitle} style={{width:"50%"}} />)}
            </Form.Item>   
            <Form.Item label="入职时间">
              {getFieldDecorator('number1', {
              })(<Input placeholder={moment(state.Creationtime).format("YYYY-MM-DD")} style={{width:"50%"}} />)}
            </Form.Item> 
            <Form.Item label="更改时间" hasFeedback validateStatus="success" style={{width:"50%"}}>
                <DatePicker placeholder="请输入时间" style={{ width: '100%' }} />
            </Form.Item>

            <Button onClick={this.handleQuxiao} type="primary" style={{margin:"5px 20px 0px 0px"}}>重置</Button> 
            <Button type="primary" htmlType="submit" onClick={this.handleClick}>完成</Button>
          
            </Form>
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
  



export default  Form.create()(Bian)