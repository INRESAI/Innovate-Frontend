import { ArrowLeftOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Checkbox, Form, Input, Select, Steps, message } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../App.scss";
import LoginImage2 from '../../images/login-image-2.png';
import LoginImage from '../../images/login-image.png';

import { LoginRequest, RegisterRequest } from '../../common/define-identity';
import { IFacilities } from '../../common/u-innovate/define-facilities';
import { IPosition } from '../../common/u-innovate/define-position';
import { getAllFacilitiesRequest, getAllPositionsRequest } from '../../redux/controller';
import { checkEmailRequest, loginRequest, registerRequest } from '../../redux/controller/login.slice';
import { useDispatchRoot, useSelectorRoot } from '../../redux/store';
import ActiveAccountModel from '../ActiveAccount/ActiveAccountModel';
import './login.scss';

interface MyProps {
    isLogin?: boolean
}

const { Option } = Select;
const easeIn = [0.42, 0, 1, 1];
const easeOut = [0, 0, 0.58, 1];

// Phần đăng nhập / đăng ký của trang web
const Login = (props: MyProps) => {

    const [form] = Form.useForm();
    const [isLogin, setIsLogin] = useState(true); // Biến kiểm tra có đang ở trang đăng nhập hay đăng ký
    const [current, setCurrent] = useState(0);  // Biến gán giá trị đang ở bước bao nhiêu của trang đăng ký
    const dispatch = useDispatchRoot();
    const navigate = useNavigate();
    const { tokenLogin, isExistEmail, registerSuccess } = useSelectorRoot((state) => state.login);
    const { positionsLst, facilitiesLst } = useSelectorRoot((state) => state.uinnovate);
    const [lstPosition, setLstPosition] = useState<IPosition[]>([]);
    const [lstFacility, setLstFacility] = useState<IFacilities[]>([]);
    const [userName, setUserName] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [userConfirmPassword, setUserConfirmPassword] = useState<string>('');
    const [userFacilityId, setUserFacilityId] = useState<string>('');
    const [userPositionId, setUserPositionId] = useState<string>('');
    const [checkFacility, setCheckFacility] = useState<number>(0);
    const [checkClickTypeOfFacility, setCheckClickTypeOfFacility] = useState<boolean>(false);
    const [checkClickFacility, setCheckClickFacility] = useState<boolean>(false);
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

    // Thực hiện khi đăng ký thành công
    useEffect(() => {
        if (registerSuccess) {
            setIsLogin(!isLogin)
            message.success('Email xác nhận đã gửi!');
        }
    }, [registerSuccess])

    // Hàm thực hiện lưu thông tin của trang đầu tiên của đăng ký
    const handleClickFirstStep = async (res: any): Promise<any> => {
        console.log(res);
        setUserName(res.userName);
        setUserEmail(res.userEmail);
        setUserPassword(res.userPassword);
        setUserConfirmPassword(res.userConfirmPassword);
        dispatch(checkEmailRequest(res.userEmail));
    }
    // Hàm thực hiện check khi click vào select 
    const handleTypeOfFacilityVisibleChange = (visible: boolean) => {
        setCheckClickTypeOfFacility(visible);
    }

    // Hàm thực hiện check khi click vào select của trường đại học / cao đẳng

    const handleFacilityVisibleChange = (visible: boolean) => {
        setCheckClickFacility(visible);
    }
    // Hàm thực hiện thay đổi thông tin nhập khi chọn đại học / cao đẳng 
    const handleOnChangeTypeOfFacility = (val: string) => {
        if (val === '1') {
            setCheckFacility(1)
        }
        if (val === '2') {
            setCheckFacility(2)
        }
        console.log(val);

    }

    // Hàm thực hiện lưu thông tin của trang thứ 2 của đăng ký
    const handleClickSecondStep = async (res: any): Promise<any> => {
        console.log(res);
        setUserFacilityId(res.userFacilityId);
        setUserPositionId(res.userPositionId)
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
        // setIsLogin(!isLogin)
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

    // Hàm thực hiện trở lại trang chủ
    const onClickBackButton = () => {
        navigate("/");
        setCurrent(0);

    }

    // Hàm chuyển đổi giữa đăng nhập và đăng xuất
    const onClickSwitchButton = () => {
        setIsLogin(!isLogin)
        setCurrent(0);
    }

    // Hàm thực hiện trở lại các bước đăng nhập
    const onClickBackPage = () => {
        setCurrent(current - 1)
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
                        <div onClick={onClickBackButton}>
                            <motion.div
                                className='back-button'
                                whileHover={{ scale: 1.5 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <div className="icon"><ArrowLeftOutlined /></div>
                                <div className="text">Quay lại</div>
                            </motion.div>
                        </div>
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
                        onClick={onClickSwitchButton}
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
                                        <Input.Password className='input-login' placeholder='Nhập mật khẩu' />
                                    </Form.Item>

                                    <Form.Item className='remember-forgot-password' name="remember" valuePropName="checked" >
                                        <label className='label-login'>
                                            <Checkbox className='checkbox-login' />
                                            <>Nhớ mật khẩu</>
                                        </label>
                                        <div className='forgot-password' >Quên mật khẩu</div>
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
                                            form={form}
                                        >
                                            <Form.Item
                                                label="Họ và tên"
                                                name="userName"
                                                rules={[{ required: true, message: 'Vui lòng nhập họ tên!' }]}
                                            >

                                                <Input className='email-input' placeholder='Nhập họ và tên' />
                                            </Form.Item>

                                            <Form.Item
                                                label="Email"
                                                name="userEmail"
                                                rules={[
                                                    { type: 'email', message: 'Email không hợp lệ', },
                                                    { required: true, message: 'Vui lòng nhập email!' }
                                                ]}
                                            >
                                                <Input className='email-input' placeholder='Nhập Email' />
                                            </Form.Item>
                                            <Form.Item
                                                label="Mật khẩu"
                                                name="userPassword"
                                                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                                            >
                                                <Input.Password id='basic_PasswordRegiter' placeholder='Nhập mật khẩu' />
                                            </Form.Item>

                                            <Form.Item
                                                className='userConfirmPassword'
                                                label="Xác nhận mật khẩu"
                                                name="userConfirmPassword"
                                                dependencies={['userPassword']}
                                                rules={[
                                                    { required: true, message: 'Vui lòng nhập xác nhận mật khẩu!' },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            if (!value || getFieldValue('userPassword') === value) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error('Mật khẩu xác nhận không đúng!'));
                                                        },
                                                    }),
                                                ]}
                                            >
                                                <Input.Password id='basic_ConfirmPasswordRegiter' placeholder='Nhập lại mật khẩu' />
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
                                            form={form}
                                        >
                                            <Form.Item
                                                label="Cơ sở đào tạo"
                                                name="typeOfFacility"
                                                rules={[{ required: true, message: 'Vui lòng cơ sở đào tạo!' }]}>
                                                <Select
                                                    suffixIcon={<CaretDownOutlined />}
                                                    placeholder="Chọn cơ sở đào tạo"
                                                    onChange={handleOnChangeTypeOfFacility}
                                                    onDropdownVisibleChange={handleTypeOfFacilityVisibleChange}
                                                >
                                                    <Option value='1'>Đại học</Option>
                                                    <Option value='2'>Cao đẳng</Option>
                                                </Select>
                                            </Form.Item>
                                            {checkFacility === 1 &&
                                                <motion.div
                                                    initial={{ opacity: 0, marginTop: 70 }}
                                                    animate={checkClickTypeOfFacility ? { opacity: 1, marginTop: 70 } : { opacity: 1, marginTop: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                >
                                                    <Form.Item
                                                        label="Chọn trường đại học"
                                                        name="userFacilityId"
                                                        rules={[{ required: true, message: 'Vui lòng chọn trường đại học!' }]}
                                                    >
                                                        <Select
                                                            showSearch
                                                            suffixIcon={<CaretDownOutlined />}
                                                            placeholder="Tìm kiếm trường đại học"
                                                            onDropdownVisibleChange={handleFacilityVisibleChange}
                                                            optionFilterProp="children"
                                                            // filterOption={(input, option) =>
                                                            //     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                            // }
                                                        // onChange={handleChange}
                                                        >
                                                            {lstFacility.map((index) => (
                                                                <Option value={index.id}>{index.name}</Option>
                                                            ))}
                                                        </Select>
                                                    </Form.Item>
                                                </motion.div>
                                            }
                                            {checkFacility === 2 &&
                                                <motion.div
                                                    initial={{ opacity: 0, marginTop: 70 }}
                                                    animate={checkClickTypeOfFacility ? { opacity: 1, marginTop: 70 } : { opacity: 1, marginTop: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                >
                                                    <Form.Item
                                                        label="Chọn trường cao đẳng"
                                                        name="userFacilityId"
                                                        rules={[{ required: true, message: 'Vui lòng chọn trường cao đẳng!' }]}
                                                    >
                                                        <Select
                                                            suffixIcon={<CaretDownOutlined />}
                                                            placeholder="Tìm kiếm theo cao đẳng"
                                                            onDropdownVisibleChange={handleFacilityVisibleChange}

                                                        // onChange={handleChange}
                                                        >
                                                            {lstFacility.map((index) => (
                                                                <Option value={index.id}>{index.name}</Option>
                                                            ))}
                                                        </Select>
                                                    </Form.Item>
                                                </motion.div>
                                            }
                                            <motion.div
                                                initial={{ marginTop: 0 }}
                                                animate={checkClickFacility ? { marginTop: 205 } : { marginTop: 0 }}
                                                exit={{ marginTop: 0 }}
                                                transition={{ duration: 0.25 }}>
                                                <Form.Item
                                                    label="Vai trò tại cơ sở đào tạo"
                                                    name="userPositionId"
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
                                            </motion.div>

                                            <Form.Item >
                                                <div style={{ display: 'flex', margin: '10px 0', justifyContent: 'space-between' }}>
                                                    <motion.div
                                                        style={{ width: '100%', marginRight: '20px' }}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}>
                                                        <Button className='button-submit' type="primary" htmlType="submit" style={{ marginRight: 10 }}>
                                                            Tiếp tục
                                                        </Button>
                                                    </motion.div>
                                                    <motion.div
                                                        style={{ width: '100%' }}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}>
                                                        <Button className='button-back' onClick={onClickBackPage}>
                                                            Quay lại
                                                        </Button>
                                                    </motion.div>
                                                </div>
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

                                {(current === 2 && userPositionId === "63bfc266919bbb3754b7162a") &&
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
                                            form={form}

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
                                                <label className='label-login label-agreement'>
                                                    <Checkbox className='checkbox-login' />
                                                    <>Tôi chấp nhận Tuyên bố về quyền riêng tư
                                                        Bằng cách chọn hộp này, tôi xác nhận rằng tôi muốn đăng ký dịch vụ này và tôi đồng ý cho IID xử lý dữ liệu cá nhân của tôi cho mục đích được mô tả trong tuyên bố về quyền riêng tư (nghĩa là để nhận thông tin được yêu cầu về các chủ đề khác nhau trong lĩnh vực dịch vụ của VNHEI thông qua bản tin hoặc thông báo của chúng tôi)   </>
                                                </label>
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
                                                <label className='label-login label-agreement'>
                                                    <Checkbox className='checkbox-login' />
                                                    <>Tôi chấp nhận <strong>  Điều khoản và Điều kiện</strong></>
                                                </label>
                                            </Form.Item>
                                            <Form.Item
                                                name="agreement-3"
                                                className='agreement'
                                                valuePropName="checked"

                                            >
                                                <label className='label-login label-agreement'>
                                                    <Checkbox className='checkbox-login' />
                                                    <>Tôi muốn nhận thông tin cập nhật về VNHEI</>
                                                </label>
                                            </Form.Item>
                                            <Form.Item
                                                name="agreement-4"
                                                className='agreement'
                                                valuePropName="checked"
                                            >
                                                <label className='label-login label-agreement'>
                                                    <Checkbox className='checkbox-login' />
                                                    <>Tôi muốn nhận thêm thông tin về cách sử dụng trang web VNHEI</>
                                                </label>
                                            </Form.Item>

                                            <Form.Item >
                                                <div style={{ display: 'flex', margin: '10px 0', justifyContent: 'space-between' }}>
                                                    <motion.div
                                                        style={{ width: '100%', marginRight: '20px' }}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}>
                                                        <Button className='button-submit' type="primary" htmlType="submit" style={{ marginRight: 10 }}>
                                                            Đăng ký
                                                        </Button>
                                                    </motion.div>
                                                    <motion.div
                                                        style={{ width: '100%' }}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}>
                                                        <Button className='button-back' onClick={onClickBackPage}>
                                                            Quay lại
                                                        </Button>
                                                    </motion.div>
                                                </div>
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
                                {(current === 2 && userPositionId !== "63bfc266919bbb3754b7162a") &&
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
                                            form={form}

                                        >
                                            <Form.Item
                                                label="Bạn thuộc Khoa/Viện nào tại cơ sở đào tạo đó?"
                                                name="input-1"
                                                rules={[{ required: true, message: 'Vui lòng nhập thông tin!' }]}
                                            >
                                                <Input className='email-input' placeholder='Nhập câu trả lời' />
                                            </Form.Item>
                                            <Form.Item
                                                label="Vai trò của bạn tại Cơ sở đào tạo đó?"
                                                name="input-2"
                                                rules={[{ required: true, message: 'Vui lòng nhập thông tin!' }]}
                                            >
                                                <Input className='email-input' placeholder='Nhập câu trả lời' />
                                            </Form.Item>
                                            <Form.Item
                                                label="Lĩnh vực phụ trách?"
                                                name="input-3"
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
                                                <label className='label-login label-agreement'>
                                                    <Checkbox className='checkbox-login' />
                                                    <>Tôi chấp nhận Tuyên bố về quyền riêng tư
                                                        Bằng cách chọn hộp này, tôi xác nhận rằng tôi muốn đăng ký dịch vụ này và tôi đồng ý cho IID xử lý dữ liệu cá nhân của tôi cho mục đích được mô tả trong tuyên bố về quyền riêng tư (nghĩa là để nhận thông tin được yêu cầu về các chủ đề khác nhau trong lĩnh vực dịch vụ của VNHEI thông qua bản tin hoặc thông báo của chúng tôi)   </>
                                                </label>
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
                                                <label className='label-login label-agreement'>
                                                    <Checkbox className='checkbox-login' />
                                                    <>Tôi chấp nhận <strong>  Điều khoản và Điều kiện</strong></>
                                                </label>
                                            </Form.Item>
                                            <Form.Item
                                                name="agreement-3"
                                                className='agreement'
                                                valuePropName="checked"

                                            >
                                                <label className='label-login label-agreement'>
                                                    <Checkbox className='checkbox-login' />
                                                    <>Tôi muốn nhận thông tin cập nhật về VNHEI</>
                                                </label>
                                            </Form.Item>
                                            <Form.Item
                                                name="agreement-4"
                                                className='agreement'
                                                valuePropName="checked"
                                            >
                                                <label className='label-login label-agreement'>
                                                    <Checkbox className='checkbox-login' />
                                                    <>Tôi muốn nhận thêm thông tin về cách sử dụng trang web VNHEI</>
                                                </label>
                                            </Form.Item>

                                            <Form.Item >
                                                <div style={{ display: 'flex', margin: '10px 0', justifyContent: 'space-between' }}>
                                                    <motion.div
                                                        style={{ width: '100%', marginRight: '20px' }}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}>
                                                        <Button className='button-submit' type="primary" htmlType="submit" style={{ marginRight: 10 }}>
                                                            Đăng ký
                                                        </Button>
                                                    </motion.div>
                                                    <motion.div
                                                        style={{ width: '100%' }}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}>
                                                        <Button className='button-back' onClick={onClickBackPage}>
                                                            Quay lại
                                                        </Button>
                                                    </motion.div>
                                                </div>
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
            {registerSuccess && <ActiveAccountModel email={userEmail} />}
        </motion.div>
    )
}

export default Login