import { ArrowLeftOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Breadcrumb, Button, Form, Input, Select, Steps } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../App.scss";
import LoginImage2 from '../../images/login-image-2.png';
import LoginImage from '../../images/login-image.png';

import './login.scss';
import { LoginRequest, RegisterRequest } from '../../common/define-identity';
import { useDispatchRoot, useSelectorRoot } from '../../redux/store';
import { checkEmailRequest, loginRequest, registerRequest } from '../../redux/controller/login.slice';
import IdentityApi from '../../api/identity/identity.api';
import { getAllFacilitiesRequest, getAllPositionsRequest } from '../../redux/controller';
import { IPosition } from '../../common/u-innovate/define-position';

interface MyProps {
    isLogin?: boolean
}

const { Option } = Select;
// Phần đăng nhập / đăng ký của trang web
const Login = (props: MyProps) => {

    const [isLogin, setIsLogin] = useState(true); // Biến kiểm tra có đang ở trang đăng nhập hay đăng ký
    const [current, setCurrent] = useState(0);  // Biến gán giá trị đang ở bước bao nhiêu của trang đăng ký
    const dispatch = useDispatchRoot();
    const navigate = useNavigate();
    const { tokenLogin, isExistEmail } = useSelectorRoot((state) => state.login);
    const { positionsLst, facilitiesLst } = useSelectorRoot((state) => state.uinnovate);
    const [lstPosition, setLstPosition] = useState<IPosition[]>([]);
    const [lstFacility, setLstFacility] = useState<IPosition[]>([]);
    const [userName, setUserName] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [userConfirmPassword, setUserConfirmPassword] = useState<string>('');
    const [userFacilityId, setUserFacilityId] = useState<string>('');
    const [userPositionId, setUserPositionId] = useState<string>('');

    const inputRef = useRef<any>(null);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.setSelectionRange(2, 5);
        }
    };



    // Thực hiện lấy vai trò và cơ sở đào tạo của user
    useEffect(() => {
        if (!isLogin) {
            dispatch(getAllFacilitiesRequest());
            dispatch(getAllPositionsRequest());
        }
    }, [isLogin])

    // Thực hiện gán giá trị cơ sở đào tạo
    useEffect(() => {
        setLstFacility(JSON.parse(JSON.stringify(facilitiesLst)));
    }, [facilitiesLst]);

    // Thực hiện gán giá trị vai trò
    useEffect(() => {
        setLstPosition(JSON.parse(JSON.stringify(positionsLst)));
    }, [positionsLst]);

    // Thực hiện nếu đã đăng nhập thành công, trở về trang chủ
    useEffect(() => {
        if (tokenLogin) {
            navigate("/");
        }
    }, [tokenLogin])

    // Thực hiện chuyển đến trang tiếp theo nếu thông tin hợp lệ
    useEffect(() => {
        if (!isExistEmail) {
            setCurrent(current + 1);
        }
    }, [isExistEmail])
    // Hàm thực hiện lưu thông tin của trang đầu tiên của đăng ký
    const handleClickFirstStep = async (res: any): Promise<any> => {
        setUserName(res.UsernameRegister);
        setUserEmail(res.EmailRegister);
        setUserPassword(res.PasswordRegiter);
        setUserConfirmPassword(res.ConfirmPasswordRegiter);
        dispatch(checkEmailRequest(res.EmailRegister))
    }

    // Hàm thực hiện lưu thông tin của trang thứ 2 của đăng ký
    const handleClickSecondStep = async (res: any): Promise<any> => {
        console.log(res);
        setUserFacilityId(res.TrainingFacilities);
        setUserPositionId(res.RoleOfTrainingFacilities)
        setCurrent(current + 1);
    }
    // Hàm thực hiện khi đã hoàn thành form đăng ký
    const onFinishRegister = async (): Promise<any> => {
        const req: RegisterRequest = {
            "email": userEmail,
            "password": userPassword,
            "confirmPassword": userConfirmPassword,
            "name": userName,
            "phone": "string",
            "address": "string",
            "facilityId": userFacilityId,
            "positionId": userPositionId,
            "additionalProp1": {}
        };
        dispatch(registerRequest(req));
        setIsLogin(!isLogin)
        // dispatch(re(req));
    }
    // Hàm thực hiện khi đã hoàn thành form đăng nhập
    const onFinishLogin = async (account: any): Promise<any> => {
        console.log(account);
        const req: LoginRequest = {
            "email": account.EmailLogin,
            "password": account.PasswordLogin,
            "remember": account.remember,
            "additionalProp1": {},

        };
        dispatch(loginRequest(req));
    }

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
                            <motion.div
                                className='back-button'
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
                    <img src={isLogin ? LoginImage : LoginImage2} alt='' />
                </div>
                <div className='form-login'>
                    <div
                        className={`container ${isLogin ? 'login' : ''}`}
                        data-darkmode={isLogin}
                        onClick={() => setIsLogin(!isLogin)}
                        style={{ justifyContent: isLogin ? 'flex-end' : 'flex-start' }}
                    >
                        <motion.div layout className="handle">
                            <AnimatePresence initial={false}>
                                <motion.div
                                    className={`add-text-${isLogin ? 'login' : 'register'}`}
                                    key={isLogin ? 'login' : 'register'}
                                    initial={{ y: -30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 30, opacity: 0 }}
                                    transition={{ duration: .2 }}
                                />
                            </AnimatePresence>
                        </motion.div>
                    </div>
                    {
                        isLogin ?
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
                                    onFinish={onFinishLogin}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        label="Email/Tài khoản"
                                        name="EmailLogin"
                                        rules={[
                                            { type: 'email', message: 'Email không hợp lệ', },
                                            { required: true, message: 'Vui lòng nhập email!' }
                                        ]}
                                    >
                                        <Input className='input-login email-input' placeholder='Nhập Email hoặc tài khoản' />
                                    </Form.Item>

                                    <Form.Item
                                        label="Mật khẩu"
                                        name="PasswordLogin"
                                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                                    >
                                        <Input.Password className='input-login' placeholder='Nhập mật khẩu' ref={inputRef} />
                                    </Form.Item>

                                    <Form.Item className='remember-forgot-password' name="remember" valuePropName="checked" >
                                        <FormControlLabel
                                            control={<Checkbox defaultChecked sx={{
                                                color: '#FF9955',
                                                '&.Mui-checked': {
                                                    color: '#FF9955',
                                                },
                                            }} />}
                                            label="Nhớ mật khẩu"

                                        />
                                        <div className='forgot-password' onClick={handleClick}>Quên mật khẩu</div>
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
                                            onFinish={handleClickFirstStep}
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
                                                rules={[
                                                    { type: 'email', message: 'Email không hợp lệ', },
                                                    { required: true, message: 'Vui lòng nhập email!' }
                                                ]}
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
                                                dependencies={['PasswordRegiter']}
                                                rules={[
                                                    { required: true, message: 'Vui lòng nhập mật khẩu!' },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            if (!value || getFieldValue('PasswordRegiter') === value) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error('Mật khẩu xác nhận không đúng!'));
                                                        },
                                                    }),
                                                ]}
                                            >
                                                <Input.Password placeholder='Nhập lại mật khẩu' />
                                            </Form.Item>

                                            <Form.Item >
                                                <Button className='button-submit' type="primary" htmlType="submit">
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
                                            onFinish={handleClickSecondStep}
                                            autoComplete="off"
                                        >
                                            <Form.Item
                                                label="Cơ sở đào tạo"
                                                name="TrainingFacilities"
                                                rules={[{ required: true, message: 'Vui lòng cơ sở đào tạo!' }]}
                                            >
                                                <Select
                                                    suffixIcon={<CaretDownOutlined />}
                                                    placeholder="Chọn cơ sở đào tạo"
                                                >
                                                    {lstFacility.map((index) => (
                                                        <Option value={index.id}>{index.name}</Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>

                                            <Form.Item
                                                label="Vai trò tại cơ sở đào tạo"
                                                name="RoleOfTrainingFacilities"
                                                rules={[{ required: true, message: 'Vui lòng chọn vai trò cơ sở đào tạo!' }]}
                                            >
                                                <Select
                                                    suffixIcon={<CaretDownOutlined />}
                                                    placeholder="Chọn vai trò"
                                                >
                                                    {lstPosition.map((index) => (
                                                        <Option value={index.id}>{index.name}</Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>

                                            <Form.Item >
                                                <Button className='button-submit' type="primary" htmlType="submit">
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
                                            onFinish={onFinishRegister}
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
                                                name="agreement-3"
                                                className='agreement'
                                                valuePropName="checked"

                                            >
                                                <FormControlLabel control={<Checkbox sx={{
                                                    color: '#FF9955',
                                                    '&.Mui-checked': {
                                                        color: '#FF9955',
                                                    },
                                                }} />} label="Tôi muốn nhận thông tin cập nhật về VNHEI" />
                                            </Form.Item>
                                            <Form.Item
                                                name="agreement-4"
                                                className='agreement'
                                                valuePropName="checked"
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