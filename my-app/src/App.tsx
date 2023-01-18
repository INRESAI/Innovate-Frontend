import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import CMainRouter from './components/CMainRouter';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { CHeader } from './components/Header/CHeader';
import Home from './pages/home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import CFooter from './components/Footer/CFooter';
import { Layout } from 'antd';
import JudgementMain from './pages/Judgement/JudgementMain';
import Login from './pages/login/Login';
import AnimationRouter from './components/AnimationRouter';


function App() {

    const [isShowHeader, setIsShowHeader] = useState<boolean>(true); // Biến gán giá trị có hiển thị header hay không
    const [isShowFooter, setIsShowFooter] = useState<boolean>(true); // Biến gán giá trị có hiển thị footer hay không

    // Biến lấy địa chỉ url của trang
    const location = useLocation();

    // Thực hiện ẩn hiện header và footer dựa theo đường dẫn địa chỉ
    useEffect(() => {
        let urlLink = location.pathname;
        if (urlLink === "/test") {
            setIsShowFooter(false);
            setIsShowHeader(true);
        }
        else if (urlLink === "/login") {
            setIsShowHeader(false);
            setIsShowFooter(false);
        }
        else {
            setIsShowHeader(true);
            setIsShowFooter(true);
        }
    }, [location]);
    return (
        <Layout>
            {isShowHeader && <CHeader />}
            <AnimationRouter/>
            {isShowFooter && <CFooter />}
        </Layout>
    );
}

export default App;
