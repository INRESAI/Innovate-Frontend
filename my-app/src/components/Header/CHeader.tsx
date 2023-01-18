/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { SearchOutlined } from '@ant-design/icons'
import { Button, Drawer, Input, Menu } from 'antd'
import { useEffect, useState } from 'react'
import "./styles.header.scss"
// import "./styles.css";
import { Link } from "react-router-dom"
import "../../App.scss"
// import CRegisterModal from './CRegisterModal';
import { MenuOutlined } from '@ant-design/icons'


interface MyProps {
    // setIsLogout: React.Dispatch<React.SetStateAction<boolean>>
}


export const CHeader = (props: MyProps) => {
    const [visible, setVisible] = useState(false); // Biến thể hiện nút thu gọn menu có đang mở hay không
    const [current, setCurrent] = useState<string>('1') // Biến thể hiện giá trị cho nút hiện tại

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
    }, [window.location.pathname])

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

    return (
        <div className='main-header'>
            <div className='header-logo'>
                <Link to={'/'} className='logo-text'> U.innovate</Link>
            </div>
            <Menu
                className='header-menu'
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
            <Button className='header-button'>
                <Link to={'/login'}>Đăng ký</Link>
            </Button>
            <>
                <Button className='menubtn' type="primary" shape="circle" icon={<MenuOutlined />} onClick={showDrawer} ></Button>
                <Drawer title={
                    <div className='header-logo'>
                        <Link to={'/'} className='logo-text'>U.innovate</Link>
                    </div>
                } placement="right" onClose={onClose} visible={visible}>
                    <div style={{ display: 'flex', flexDirection: "column" }}>
                        <Button type="text" href="/" >Trang chủ</Button>
                        <Button type="text" href="/test" >Đánh giá</Button>
                        <Button type="text" href="/news" >Tin tức</Button>
                        <Button type="text" href="/about_us" >Về chúng tôi</Button>
                    </div>
                </Drawer>
            </>
        </div>
    )
}
