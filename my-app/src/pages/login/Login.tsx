import { ArrowLeftOutlined } from '@ant-design/icons';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Breadcrumb, Button, Form, Input, Select, Steps } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CaretDownOutlined } from "@ant-design/icons";
import "../../App.scss";
import LoginImage from '../../images/login-image.png';
import LoginImage2 from '../../images/login-image-2.png';

import './login.scss';

interface MyProps {
    // tranferFromLoginToHome: () => void;
}
const Login = (props: MyProps) => {
    const [isOn, setIsOn] = useState(true);
    const [current, setCurrent] = useState(0);
    const { Option } = Select;

    const handleClickNext = () => {
        setCurrent(current + 1);
    }
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    return (
        <motion.div className='login-main'
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
            <div className='back-to-login'>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to='/'>
                            <motion.div className='back-button'
                                whileHover={{ scale: 1.5 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <div className="icon"><ArrowLeftOutlined /></div>
                                <div className="text">Quay lại</div>
                            </motion.div>
                        </Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='content-main'>
                <div className='image-of-login'>
                    <div className='title'>Chào mừng bạn đến với V.innovate!</div>
                    <div className='sub-title'>Đánh giá, xếp hạng các trường đại học. cao đằng/tỉnh thành phố về dổi mới sáng tạo, khởi nghiệp và tạo tác động.</div>
                    <img src={isOn ? LoginImage : LoginImage2} alt='' />
                </div>
                <div className='form-login'>
                    <div
                        className={`container ${isOn ? 'moon' : ''}`}
                        data-darkmode={isOn}
                        onClick={() => setIsOn(!isOn)}
                        style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}
                    >
                        <motion.div layout className="handle">
                            <AnimatePresence initial={false}>
                                <motion.div
                                    className={`add-text-${isOn ? 'moon' : 'sun'}`}
                                    key={isOn ? 'moon' : 'sun'}
                                    initial={{ y: -30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 30, opacity: 0 }}
                                    transition={{ duration: .2 }}
                                />
                            </AnimatePresence>
                        </motion.div>
                    </div>
                    {
                        isOn ?
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            >

                                <Form
                                    name="basic"
                                    wrapperCol={{ span: 16 }}
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    // onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        label="Email/Tài khoản"
                                        name="EmailLogin"
                                        rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                                    >
                                        <Input className='email-input' placeholder='Nhập Email hoặc tài khoản' />
                                    </Form.Item>

                                    <Form.Item
                                        label="Mật khẩu"
                                        name="PasswordLogin"
                                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                                    >
                                        <Input.Password placeholder='Nhập mật khẩu' />
                                    </Form.Item>

                                    <Form.Item className='remember-forgot-password' name="remember" valuePropName="checked" >
                                        <FormControlLabel control={<Checkbox defaultChecked sx={{
                                            color: '#FF9955',
                                            '&.Mui-checked': {
                                                color: '#FF9955',
                                            },
                                        }} />} label="Nhớ mật khẩu" />
                                        <div className='forgot-password'>Quên mật khẩu</div>
                                    </Form.Item>

                                    <Form.Item >
                                        <Button className='button-submit' type="primary" htmlType="submit">
                                            Đăng nhập
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </motion.div>
                            :
                            <div>
                                {current === 0 &&
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1 }}>
                                        <Form
                                            name="basic"
                                            wrapperCol={{ span: 16 }}
                                            initialValues={{ remember: true }}
                                            onFinish={handleClickNext}
                                            autoComplete="off"
                                        >
                                            <Form.Item
                                                label="Họ và tên"
                                                name="UsernameRegister"
                                                rules={[{ required: true, message: 'Vui lòng nhập họ tên!' }]}
                                            >
                                                <Input className='email-input' placeholder='Nhập họ và tên' />
                                            </Form.Item>

                                            <Form.Item
                                                label="Email"
                                                name="EmailRegister"
                                                rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                                            >
                                                <Input className='email-input' placeholder='Nhập Email' />
                                            </Form.Item>
                                            <Form.Item
                                                label="Mật khẩu"
                                                name="PasswordRegiter"
                                                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                                            >
                                                <Input.Password placeholder='Nhập mật khẩu' />
                                            </Form.Item>

                                            <Form.Item
                                                label="Xác nhận mật khẩu"
                                                name="ConfirmPasswordRegiter"
                                                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                                            >
                                                <Input.Password placeholder='Nhập lại mật khẩu' />
                                            </Form.Item>

                                            <Form.Item >
                                                <Button onClick={handleClickNext} className='button-submit' type="primary" htmlType="submit">
                                                    Tiếp tục
                                                </Button>
                                            </Form.Item>
                                            <Form.Item className='step-item'>
                                                <Steps
                                                    direction='horizontal'
                                                    progressDot
                                                    current={current}
                                                    items={[{}, {}, {},]}
                                                />
                                            </Form.Item>
                                        </Form>
                                    </motion.div>
                                }
                                {current === 1 &&
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1 }}>

                                        <Form
                                            name="basic"
                                            wrapperCol={{ span: 16 }}
                                            initialValues={{ remember: true }}
                                            onFinish={handleClickNext}
                                            autoComplete="off"
                                        >
                                            <Form.Item
                                                label="Cơ sở đào tạo"
                                                name="TrainingFacilities"
                                                rules={[{ required: true, message: 'Vui lòng cơ sở đào tạo!' }]}
                                            >
                                                <Select
                                                    suffixIcon={<CaretDownOutlined />}
                                                    defaultValue={1}
                                                >
                                                    <Option value={1}>Hà Nội</Option>
                                                    <Option value={2}>Thành Phố HCM</Option>
                                                </Select>
                                            </Form.Item>

                                            <Form.Item
                                                label="Vai trò tại cơ sở đào tạo"
                                                name="RoleOfTrainingFacilities"
                                                rules={[{ required: true, message: 'Vui lòng chọn vai trò cơ sở đào tạo!' }]}
                                            >
                                                <Select
                                                    suffixIcon={<CaretDownOutlined />}
                                                    defaultValue={1}
                                                >
                                                    <Option value={1}>Sinh viên theo học tại cơ sở đào tạo</Option>
                                                    <Option value={2}>Cán bộ, giảng viên cơ sở đào tạo</Option>
                                                    <Option value={3}>Đại diện cơ sở đào tạo</Option>
                                                </Select>
                                            </Form.Item>

                                            <Form.Item >
                                                <Button onClick={handleClickNext} className='button-submit' type="primary" htmlType="submit">
                                                    Tiếp tục
                                                </Button>
                                            </Form.Item>
                                            <Form.Item className='step-item'>
                                                <Steps
                                                    progressDot
                                                    current={current}
                                                    items={[{}, {}, {},]}
                                                />
                                            </Form.Item>
                                        </Form>
                                    </motion.div>}

                                {current === 2 &&
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1 }}>

                                        <Form
                                            name="basic"
                                            wrapperCol={{ span: 16 }}
                                            initialValues={{ remember: true }}
                                            onFinish={handleClickNext}
                                            autoComplete="off"
                                        >
                                            <Form.Item
                                                label="Bạn thuộc Khoa/Viện nào tại cơ sở đào tạo đó?"
                                                name="UsernameRegister"
                                                rules={[{ required: true, message: 'Vui lòng nhập thông tin!' }]}
                                            >
                                                <Input className='email-input' placeholder='Nhập câu trả lời' />
                                            </Form.Item>
                                            <Form.Item
                                                className='agreement'
                                                name="agreement-1"
                                                valuePropName="checked"
                                                rules={[
                                                    {
                                                        validator: (_, value) =>
                                                            value ? Promise.resolve() : Promise.reject(new Error('Vui lòng chấp nhận điều khoản')),
                                                    },
                                                ]}
                                            >
                                                <FormControlLabel control={<Checkbox sx={{
                                                    color: '#FF9955',
                                                    '&.Mui-checked': {
                                                        color: '#FF9955',
                                                    },
                                                }} />} label="Tôi chấp nhận Tuyên bố về quyền riêng tư Bằng cách chọn hộp này, tôi xác nhận rằng tôi muốn đăng ký dịch vụ này và tôi đồng ý cho IID xử lý dữ liệu cá nhân của tôi cho mục đích được mô tả trong tuyên bố về quyền riêng tư (nghĩa là để nhận thông tin được yêu cầu về các chủ đề khác nhau trong lĩnh vực dịch vụ của VNHEI thông qua bản tin hoặc thông báo của chúng tôi)" />
                                            </Form.Item>
                                            <Form.Item
                                                className='agreement'
                                                name="agreement-2"
                                                valuePropName="checked"
                                                rules={[
                                                    {
                                                        validator: (_, value) =>
                                                            value ? Promise.resolve() : Promise.reject(new Error('Vui lòng chấp nhận điều khoản')),
                                                    },
                                                ]}
                                            >
                                                <FormControlLabel control={<Checkbox sx={{
                                                    color: '#FF9955',
                                                    '&.Mui-checked': {
                                                        color: '#FF9955',
                                                    },
                                                }} />} label="Tôi chấp nhận Điều khoản và Điều kiện" />
                                            </Form.Item>
                                            <Form.Item
                                                name="agreement"
                                                className='agreement'
                                                valuePropName="checked"
                                                rules={[
                                                    {
                                                        validator: (_, value) =>
                                                            value ? Promise.resolve() : Promise.reject(new Error('Vui lòng chấp nhận điều khoản')),
                                                    },
                                                ]}
                                            >
                                                <FormControlLabel control={<Checkbox sx={{
                                                    color: '#FF9955',
                                                    '&.Mui-checked': {
                                                        color: '#FF9955',
                                                    },
                                                }} />} label="Tôi muốn nhận thông tin cập nhật về VNHEI" />
                                            </Form.Item>
                                            <Form.Item
                                                name="agreement"
                                                className='agreement'
                                                valuePropName="checked"
                                                rules={[
                                                    {
                                                        validator: (_, value) =>
                                                            value ? Promise.resolve() : Promise.reject(new Error('Vui lòng chấp nhận điều khoản')),
                                                    },
                                                ]}
                                            >
                                                <FormControlLabel control={<Checkbox sx={{
                                                    color: '#FF9955',

                                                    '&.Mui-checked': {
                                                        color: '#FF9955',
                                                    },
                                                }} />} label="Tôi muốn nhận thêm thông tin về cách sử dụng trang web VNHEI" />
                                            </Form.Item>

                                            <Form.Item >
                                                <Button className='button-submit' type="primary" htmlType="submit">
                                                    Đăng ký
                                                </Button>
                                            </Form.Item>
                                            <Form.Item className='step-item'>
                                                <Steps
                                                    progressDot
                                                    current={current}
                                                    items={[{}, {}, {},]}
                                                />
                                            </Form.Item>
                                        </Form>
                                    </motion.div>
                                }
                            </div>

                    }

                </div>
            </div>

        </motion.div>
    )
}

export default Login