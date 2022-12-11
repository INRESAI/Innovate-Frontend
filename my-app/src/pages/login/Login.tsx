/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Button, Checkbox, Form, Image, Input, notification } from 'antd'
import Forgot_Password from "../../images/forgot_password.png"
import Logo from '../../images/logo.png'
import LoginImage from '../../images/forgot_password.png'
import AppleIcon from "../../images/AppleIcon.png"
import FacebookIcon from "../../images/FacebookIcon.png"
import GoogleIcon from "../../images/GoogleIcon.png"
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { LoginRequest } from '../../common/define-identity'
import { useDispatchRoot } from '../../redux/store'
import { loginRequest } from '../../redux/controller'
// import { LoginRequest } from 'common/define-identity';
// import { useDispatchRoot, useSelectorRoot } from 'redux/store';
// import { loginRequest } from 'redux/controller';


export default function Login(): JSX.Element {
    const [rememberState,setRememberState] = useState<boolean>(false);
    const recentRegistration = localStorage.getItem('recentRegistration')
    const token = localStorage.getItem('token');
    const history = useHistory();
    const dispatch = useDispatchRoot();

  


    const onFinish = async (item: LoginRequest) => {
        console.log('hehehehe')
        localStorage.removeItem('recentRegistration')
        history.push('/home')
        // dispatch(loginRequest(item));
    
    }

    function onFinishFailed () {

    }

    return (
        <div>
            <div style={{marginTop: "113.14px", marginLeft: "138px", marginBottom: "45.08px"}}>
                <Image preview={false} className='logo' src={Logo} alt="Logo" />
            </div>
            <div style={{ marginLeft: "138px",marginRight: "118px", display: "flex", justifyContent: "space-between"}}>
            <div>
                <div style={{width: "220px",height: "56px",fontSize: "40px",letterSpacing: "0.5px", marginBottom:"30.6px"}}><b>Đăng nhập</b></div>
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout='vertical'
                    size='large'
                >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập email!',
                    },{
                        type: 'email',
                        message: 'Nhập đúng định dạng email!'
                    }
                    ]}
                >
                    <Input style={{borderRadius: "9px", width: "458px", height: "56.99px"}}/>
                </Form.Item>

                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập mật khẩu!',
                    },
                    ]}
                >
                    <Input.Password style={{borderRadius: "9px",width: "458px", height: "56.99px"}}/>
                </Form.Item>

                <Form.Item
                    name="remember"
                    className='ml-0'
                >
                    <Checkbox onChange={()=> setRememberState(!rememberState)}>Nhớ mật khẩu</Checkbox>
                </Form.Item>


                <Form.Item
                    
                >
                    <Button type="primary" htmlType="submit" style={{borderRadius: "9px",fontSize: "20px", backgroundColor:"#6265FF", width: "458px", height: "56.99px"}}>
                    <b>Đăng nhập</b>
                    </Button>
                </Form.Item>
                </Form>
                <div style={{textAlign: "center",width: "458px", height: "56.99px"}}>
                <a style={{color: "#6265FF"}}>Quên mật khẩu</a>
                </div>
                <div style={{marginTop: "10px", fontSize: "30px"}}>
                <div style={{color: "#CBCBCB"}}><b>Hoặc</b></div>
                <div>
                    <Image preview={false} src={FacebookIcon}/>
                    <Image preview={false} src={GoogleIcon}/>
                    <Image preview={false} src={AppleIcon}/>
                </div>
                <div style={{fontSize: "20px"}}>
                    <span>Bạn chưa có tài khoản?  </span>
                    <span><a style={{color: "#6265FF"}}>Đăng ký</a></span>
                </div>
                </div>
            </div>
            <div>
                <Image preview={false} src={Forgot_Password}/>
            </div>
            </div>
        </div>
    )
}
