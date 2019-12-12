import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import img from "../../../assets/img/ilogo.png"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {setUserInfo} from "../reducer/index"




class LoginContent extends Component {
    constructor(props) {
        super(props)
    
    }
  
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.setUserInfo(values)
                this.props.history.push('/admin')
                // console.log(values)
                // console.log('Received values of form: ', values);
               
            
            }
        });
    };


    render() {
        // console.log(this.props.login)
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-content">
                <div className="login-logo">
                    <img  src={img}/>
                </div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>记住密码</Checkbox>)}
                        <a className="login-form-forgot" href="">
                        忘记密码
                    </a>
                        <Button type="primary" block htmlType="submit" className="login-form-button">
                            登录
                    </Button>
                         <a href="">现在注册!</a>
                    </Form.Item>
                </Form>

            </div>
        )

    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginContent);
const mapStatetoProps=(state)=>({
     login:state.login
})
export default connect(mapStatetoProps,{setUserInfo})(withRouter(WrappedNormalLoginForm)) 