import { ArrowLeftOutlined } from '@ant-design/icons';
import { Breadcrumb, List, Switch } from 'antd';
import { useEffect, useState } from 'react';
import OtherTestIcon from '../../images/other-test-icon.png';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import LoginImage from '../../images/login-image.png';
import './login.scss'
import "../../App.scss"
import { Box, Button, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';

interface MyProps {
    // tranferFromLoginToHome: () => void;
}
const Login = (props: MyProps) => {
    const [isOn, setIsOn] = useState(true);


    const handleSubmit = () => {

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
                    <img src={LoginImage} alt='' />
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
                    <Box className='form' component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email / Tài khoản"
                            name="email"
                            autoComplete="email"
                            placeholder='Nhập Email hoặc tài khoản'
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Mật khẩu"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            placeholder='Nhập mật khẩu'

                        />
                        <Grid container>
                            <Grid item xs>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Nhớ mật khẩu"
                                />
                            </Grid>
                            <Grid item>
                                <Link to={'/login'} >
                                    Quên mật khẩu
                                </Link>
                            </Grid>
                        </Grid>

                        <Button
                            // type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Đăng nhập
                        </Button>
                    </Box>
                </div>
            </div>

        </motion.div>
    )
}

export default Login