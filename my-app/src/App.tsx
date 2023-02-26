import { useEffect, useState } from 'react';
import './App.css';
import './App.scss'
// import CMainRouter from './components/CMainRouter';
import { Layout } from 'antd';
import { useLocation } from 'react-router-dom';
import { GetUserInfoRequest } from './common/define-identity';
import AnimationRouter from './components/AnimationRouter';
import CFooter from './components/Footer/CFooter';
import { CHeader } from './components/Header/CHeader';
import { getUserInfoRequest } from './redux/controller';
import { useDispatchRoot } from './redux/store';


function App() {

    const [isShowHeader, setIsShowHeader] = useState<boolean>(true); // Biến gán giá trị có hiển thị header hay không
    const [isShowFooter, setIsShowFooter] = useState<boolean>(true); // Biến gán giá trị có hiển thị footer hay không
    const dispatch = useDispatchRoot();

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

    useEffect(() => {
        let checkLogin = localStorage.getItem('token') ? localStorage.getItem('token') : ''

        if (checkLogin) {
            checkLogin = checkLogin.slice(1);
            checkLogin = checkLogin.slice(0, checkLogin.length - 1);
            console.log(checkLogin);

            const req: GetUserInfoRequest = {
                "accessToken": checkLogin,
                "additionalProp1": {},
            };
            dispatch(getUserInfoRequest(req));
        }
    })

    return (
        <Layout>
            {isShowHeader && <CHeader />}
            <AnimationRouter />
            {isShowFooter && <CFooter />}
        </Layout>
    );
}

export default App;
