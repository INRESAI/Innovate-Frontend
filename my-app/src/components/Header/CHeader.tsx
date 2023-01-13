/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Avatar, Button, Drawer, Dropdown, Image, Input, Menu, Switch } from 'antd'
import React, { useState } from 'react'
import Logo from '../../images/U.innovateLogo.png'
import avatar from '../../images/avatar.jpg'
import notification from '../../images/notification.png'
import { SearchOutlined } from '@ant-design/icons';
import "./styles.header.scss";
// import "./styles.css";
import "../../App.scss";
import { Link } from "react-router-dom";
import { useSelectorRoot } from '../../redux/store';
// import CRegisterModal from './CRegisterModal';
import { IUser } from '../../common/define-identity'
import { MDBBtn } from 'mdb-react-ui-kit';
import { EuroOutlined, HeartOutlined, BarsOutlined, MenuOutlined, CalculatorOutlined } from '@ant-design/icons';


interface MyProps {
    // setIsLogout: React.Dispatch<React.SetStateAction<boolean>>
}


export const CHeader = (props: MyProps) => {
    const userEmail = localStorage.getItem('userEmail');
    const [visible, setVisible] = useState(false);
    const [isOnModal, setIsOnModal] = useState<boolean>(false);
    const [current, setCurrent] = useState<string>('1')

    const handleMenuClick = (e: any) => {
        if (e.key === '1' || e.key === '2') {
            setVisible(false);
        }
    };

    const toggle = () => {
        setIsOnModal(!isOnModal);
    };

    const handleVisibleChange = (flag: boolean) => {
        setVisible(flag);
    };
    const showDrawer = () => {
        setVisible(true);
    }
    const onClose = () => {
        setVisible(false);
    }

    const handleClick = (e: { key: any }) => {
        console.log('click ', e);
        setCurrent(e.key);

    };
    return (
        <div className='main-header'>
            <div className='header-logo'>
                <Link to={'/'} className='logo-text'> U.innovate</Link>
            </div>
            <Menu className='header-menu' onClick={handleClick} selectedKeys={[current]} mode="horizontal" overflowedIndicator={<MenuOutlined />} >
                <Menu.Item key="1" >
                    <Link to={'/'}> Trang chủ </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to={'/evaluate'}>Đánh giá </Link>
                </Menu.Item>
                <Menu.Item key="3" >
                    <Link to={'/news'}>Tin tức</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to={'/about_us'}>Về chúng tôi</Link>
                </Menu.Item>
            </Menu>
            <div className='header-content-input'>
                <Input
                    className='search-input'
                    placeholder='Tìm kiếm'
                />
                <SearchOutlined className='icon-search' />
            </div>
            <Button className='header-button'>Đăng ký</Button>
            <>
                <Button className='menubtn' type="primary" shape="circle" icon={<MenuOutlined />} onClick={showDrawer} ></Button>
                <Drawer title={
                    <div className='header-logo'>
                        <Link to={'/'} className='logo-text'>U.innovate</Link>
                    </div>
                } placement="right" onClose={onClose} visible={visible}>
                    <div style={{ display: 'flex', flexDirection: "column" }}>
                        <Button type="text" href="/" >Trang chủ</Button>
                        <Button type="text" href="/evaluate" >Đánh giá</Button>
                        <Button type="text" href="/news" >Tin tức</Button>
                        <Button type="text" href="/about_us" >Về chúng tôi</Button>
                    </div>
                </Drawer>
            </>
        </div>
    )
}
