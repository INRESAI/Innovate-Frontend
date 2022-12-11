/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Avatar, Button, Dropdown, Image, Input, Menu, Switch } from 'antd'
import React, { useState } from 'react'
import Logo from '../images/logo.png'
import avatar from '../images/avatar.jpg'
import notification from '../images/notification.png'
import { SearchOutlined } from '@ant-design/icons';
import "./styles.header.scss";
import "./styles.css";
import "../App.scss";
import { useHistory } from "react-router-dom";
import { useSelectorRoot } from '../redux/store';
// import CRegisterModal from './CRegisterModal';
import { IUser } from '../common/define-identity'

interface MyProps{
  // setIsLogout: React.Dispatch<React.SetStateAction<boolean>>
}


export const CHeader = (props : MyProps)=> {
    const userEmail = localStorage.getItem('userEmail');
    const [visible, setVisible] = useState(false);
    const [isOnModal,setIsOnModal] = useState<boolean>(false);
    const history = useHistory();

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

    return (
        <div className='main-header' style={{zIndex: 10, boxShadow: '0px 1px 10px rgb(98 101 255 / 25%)'}}>
            {/* {
                isOnModal && <CRegisterModal
                isOpen = {isOnModal}
                toggle = {toggle}/>
            } */}
            <div className='content-start w-1/3 mt-4 ml-4' style={{marginTop:13, marginBottom: 18}}><img src={Logo}/></div>
            <div className='main-search'>
                {/* <Search style={{borderRadius:'10px'}}/> */}
                <Input
                    id='search-input'
                    placeholder="Tìm kiếm"
                    // className='main-search-content'
                    suffix={<SearchOutlined className="site-form-item-icon" />}
                />
            </div>
            <div className='user-area-header '>
                <div style={{marginTop: "15px", marginRight: "15px"}}>
                    <Button>Thêm camera</Button>
                </div>
                <div style={{marginTop: "15px", marginRight: "8px"}}>
                <Dropdown 
                    onVisibleChange={handleVisibleChange} 
                    visible={visible}
                    overlay={
                    <Menu
                    onClick={handleMenuClick}
                        items={[
                        {
                            key: '1',
                            label: (
                            <div>
                                <a target="_blank" rel="noopener noreferrer" >
                                Cài đặt tài khoản
                                </a>
                            </div>
                            
                            ),
                        },
                        {
                            key: '2',
                            label: (
                            <div>
                                <a onClick={()=>{
                                setIsOnModal(true);
                                // history.push("/register")
                                }}>
                                Tạo tài khoản mới 
                                </a>
                            </div>
                            ),
                        },
                        {
                            key: '3',
                            label: (
                            <div className='flex-row'>
                                <p>
                                Theme
                                </p>
                                <Switch checkedChildren="Sáng" unCheckedChildren="Tối" defaultChecked />
                            </div>
                            ),
                        },
                        {
                            type: "divider",
                        },
                        {
                            key: '4',
                            label: (
                            <a  onClick={()=>{
                                localStorage.removeItem('token');
                                localStorage.removeItem('user');

                                
                                history.push('/');
                                window.location.reload();
                            }}>
                                Đăng xuất
                            </a>
                            ),
                        },
                        
                        ]}
                    />
                    } 
                    placement="bottom" 
                    arrow 
                    trigger={["click"]}

                >
                    <div className='mr-2 mt-4 cursor-pointer' onClick={(e) => e.preventDefault()}><Avatar src={avatar}/></div>
                </Dropdown>
                </div>
                
                <div className=' mr-4 cursor-pointer' style={{marginTop: "13px"}}><Image preview={false} src={notification}/></div>
                
            </div>
        </div>
    )
}
