import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import CMainRouter from './components/CMainRouter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CHeader } from './components/Header/CHeader';
import Home from './pages/home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import CFooter from './components/Footer/CFooter';
import { Layout } from 'antd';
import JudgementMain from './pages/Judgement/JudgementMain';


function App() {
    return (
        <Layout>
            <CHeader />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about_us" element={<AboutUs />}></Route>
                <Route path="/test" element={<JudgementMain/>}></Route>

            </Routes>
            <CFooter />
        </Layout>
    );
}

export default App;
