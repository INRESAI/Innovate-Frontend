/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { SearchOutlined } from '@ant-design/icons'
import { Avatar, Button, Drawer, Dropdown, Input, Menu, MenuProps } from 'antd'
import { useEffect, useState } from 'react'
import "./styles.header.scss"
// import "./styles.css";
import { Link, useNavigate } from "react-router-dom"
// import CRegisterModal from './CRegisterModal';
import { MenuOutlined, UserOutlined, DownOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import Utils from '../../common/utils'
import UserIcon1 from '../../images/user-1.png';
import UserIcon2 from '../../images/user-2.png';
import UserIcon3 from '../../images/user-3.png';

import SearchIcon from '../../images/Search_Icon.png'
import { useDispatchRoot, useSelectorRoot } from '../../redux/store'
import { ChangeTypeRequest } from '../../common/define-identity'
import { changeTypeRequest } from '../../redux/controller'

interface MyProps {
    // setIsLogout: React.Dispatch<React.SetStateAction<boolean>>
}

// Phần header của trang web
export const CHeader = (props: MyProps) => {
    const [visible, setVisible] = useState(false); // Biến thể hiện nút thu gọn menu có đang mở hay không
    const [current, setCurrent] = useState<string>('1') // Biến thể hiện giá trị cho nút hiện tại
    const { user, tmpUser } = useSelectorRoot((state) => state.login);

    const [userIcon, setUserIcon] = useState<string>(UserIcon1);
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const [textLogo, setTextLogo] = useState<string>("V.INNOVATE");
    const [items, setItems] = useState<MenuProps['items']>([])
    const navigate = useNavigate();
    const dispatch = useDispatchRoot();

    useEffect(() => {
        let checkLogin = localStorage.getItem('token') ? localStorage.getItem('token') : ''
        if (checkLogin) {
            setIsLogin(true);

            if (user?.type === 'UINNOVATE') {
                setUserIcon(UserIcon1);
                setTextLogo('U.INNOVATE');
            }
            if (user?.type === 'UIMPACT') {
                setUserIcon(UserIcon2);
                setTextLogo('U.IMPACT');
            }
            if (user?.type === 'PINNOVATE') {
                setUserIcon(UserIcon3);
                setTextLogo('P.INNOVATE');
            }
        }
    });

    useEffect(() => {
        let userType = localStorage.getItem('userType') ? localStorage.getItem('userType') : ''
        if (userType) {
            userType = userType.slice(1);
            userType = userType.slice(0, userType.length - 1);
            console.log(userType);
            if (userType === 'PINNOVATE') {
                setItems([
                    {
                        key: '1',
                        label: (
                            <Link to='/' onClick={onClickLogout}>
                                Đăng xuất
                            </Link>
                        ),
                    },
                ])
            }
            else {
                setItems([
                    {
                        key: '2',
                        label: (
                            <div>
                                Chọn công cụ đánh giá
                            </div>
                        ),
                        children: [
                            {
                                key: '2-1',
                                label: (
                                    <Link to='/' onClick={handleClickChangeTypeUINNOVATE}>U.INNOVATE</Link>
                                ),
                            },
                            {
                                key: '2-2',
                                label: (
                                    <Link to='/' onClick={handleClickChangeTypeUIMPACT}>U.IMPACT</Link>
                                ),
                            },
                        ],
                    },
                    {
                        key: '3',
                        label: (
                            <Link to='/' onClick={onClickLogout}>
                                Đăng xuất
                            </Link>
                        ),
                    },
                ]);
            }
        }

    }, [user])

    // Kiểm tra xem đường dẫn đang là gì để set thuộc tính đã click cho header
    useEffect(() => {
        if (window.location.pathname === '/test')
            setCurrent('2')
        if (window.location.pathname === '/news')
            setCurrent('3')
        if (window.location.pathname === '/about_us')
            setCurrent('4')
        if (window.location.pathname === '/')
            setCurrent('1')
    }, [])

    useEffect(() => {
        if (tmpUser)
            window.location.reload();
    }, [tmpUser])

    // Hiển thị ra nút thu gọn menu
    const showDrawer = () => {
        setVisible(true);
    }

    // Đóng nút thu gọn menu
    const onClose = () => {
        setVisible(false);
    }

    // Gán giá trị cho biến nút hiện tại
    const handleClick = (e: { key: any }) => {
        setCurrent(e.key);
    };
    const onClickLogout = () => {
        Utils.removeItemLocalStorage('token');
        Utils.removeItemLocalStorage('userPosition');
        Utils.removeItemLocalStorage('userMail');
        Utils.removeItemLocalStorage('theme');
        Utils.removeItemLocalStorage('userName');
        Utils.removeItemLocalStorage('userType');

        window.location.reload();
    }

    const handleClickChangeTypeUINNOVATE = () => {

        const req: ChangeTypeRequest = {
            type: 'UINNOVATE',
            additionalProp1: {},
        }
        dispatch(changeTypeRequest(req))
        // setTimeout(() => window.location.reload(), 2000);
        // window.location.reload();

    }
    const handleClickChangeTypeUIMPACT = () => {

        const req: ChangeTypeRequest = {
            type: 'UIMPACT',
            additionalProp1: {},
        }
        dispatch(changeTypeRequest(req))
        // setTimeout(() => window.location.reload(), 2000);
        // window.location.reload();

    }
    const handleClickLogin = () => {
        navigate('/login');
    }
    return (
        <div className='main-header'>
            <div className='header-logo'>
                <div id='main-header-logo' className='logo-text'>{textLogo}</div>
            </div>
            <Menu
                className={`header-menu + ${isLogin ? 'login' : ''}`}
                onClick={handleClick}
                defaultSelectedKeys={[current]}
                selectedKeys={[current]}
                mode="horizontal"
                overflowedIndicator={<MenuOutlined />}
            >
                <Menu.Item key="1" >
                    <Link to={'/'}> Trang chủ </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to={'/test'}>Đánh giá </Link>
                </Menu.Item>
                {/* <Menu.Item key="3" >
                    <Link to={'/news'}>Tin tức</Link>
                </Menu.Item> */}
                <Menu.Item key="4">
                    <Link to={'/about_us'}>Về chúng tôi</Link>
                </Menu.Item>
            </Menu>
            {/* <div className='header-content-input '>
                <Input
                    className='search-input'
                    placeholder='Tìm kiếm'
                />
                <SearchOutlined className='icon-search' />
            </div> */}
            {/* <div className={`header-content-input ${isLogin ? 'login' : ''}`}>
                <Input
                    className='search-input'
                    placeholder='Tìm kiếm'
                />
                <img src={SearchIcon} className='icon-search'></img>
            </div> */}
            {!isLogin &&
                <>
                    <motion.div className='header-button'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                        <Button onClick={handleClickLogin}>Đăng Ký / Đăng Nhập</Button>
                    </motion.div>
                </>
            }
            {isLogin &&
                // <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                //     <Avatar className='header-avatar' src={UserIcon} />
                // </Dropdown>
                <div className='header-avatar-content' style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                        <div className='header-avatar-right'>
                            <div
                                className='header-avatar-name'>{user?.name}
                            </div>
                            <div
                                className='header-avatar-position'>{user?.position.description}
                            </div>
                            {/* <div>{user?.po}</div> */}
                        </div>
                        <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                            <DownOutlined style={{ cursor: 'pointer' }} />
                        </Dropdown>
                    </div>
                </div>
            }
            <>
                <Button className={`menubtn + ${isLogin ? 'login' : ''}`} type="primary" shape="circle" icon={<MenuOutlined />} onClick={showDrawer} ></Button>
                <Drawer
                    title={
                        <div className='header-logo'>
                            <Link to={'/'} className='logo-text'>V.innovate</Link>
                        </div>
                    }
                    placement="right"
                    onClose={onClose}
                    visible={visible}>
                    <div style={{ display: 'flex', flexDirection: "column" }}>
                        <Button type="text" href="/" >Trang chủ</Button>
                        <Button type="text" href="/test" >Đánh giá</Button>
                        <Button type="text" href="/about_us" >Về chúng tôi</Button>
                        {!isLogin && <Button type="text" href="/login" >Đăng nhập / Đăng ký</Button>}
                    </div>
                </Drawer>
            </>
        </div>
    )
}
