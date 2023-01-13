import React, { Suspense } from "react";
import { RouterItem } from "../common/define-type";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cloading from "./Cloading";
import CPrivateRoute from "./CPrivateRouter";
import { CHeader } from "./Header/CHeader";
import CFooter from "./Footer/CFooter";
import AboutUs from "../pages/AboutUs/AboutUs";
import Home from "../pages/home/Home";
// import CLoading from "./CLoading";
// import CPrivateRoute from "./CPrivateRouter";

const LoginModule = React.lazy(() => import("../pages/login/Login"));
// const MainContentModule = React.lazy(() => import("pages/main"));
const PageNotFound = React.lazy(() => import("../pages/404/PageNotFound"));
// const MatrixChatApp = React.lazy(() => import("pages/welcome"));
// const FruitManager = React.lazy(() => import("../pages/fruitManager/FruitManager"));
const Homepage = React.lazy(() => import("../pages/home/Home"))
const AboutUsPage = React.lazy(() => import("../pages/AboutUs/AboutUs"))

const RouterArr: RouterItem[] = [
    {
        path: "/",
        component: Homepage
    },
    {
        path: "/about_us",
        component: AboutUsPage
    },
    {
        path: "/login",
        component: LoginModule
    },
    // {
    //     path: "/main",
    //     component: MainContentModule,
    //     noExact: true
    // },
    // {
    //     path: "/welcome",
    //     component: MatrixChatApp
    // },
    {
        path: "/home",
        component: Homepage
    },

    {
        path: "*",
        component: PageNotFound
    },

]

export default function CMainRouter(): JSX.Element {
    return (
        // <Router>
        //     <Suspense fallback={<Cloading />}>
        //         <Switch>
        //             <Route path="/login">
        //                 <LoginModule />
        //             </Route>
        //             <CPrivateRoute path="/">
        //                 <>
        //                     <CHeader/>
        //                     <Switch>
        //                         {RouterArr.map(({ path, component: Component, noExact, ...rest }) => {
        //                             return <Route path={path} component={Component} key={path} exact={noExact ? false : true} {...rest} />
        //                         })}
        //                     </Switch>
        //                     <CFooter/>
        //                 </>
        //             </CPrivateRoute>
        //         </Switch>
        //     </Suspense>
        // </Router>
        <Router>
            <CHeader />
            <Route path="/"><Home /></Route>
            <Route path="/about_us"><AboutUs /></Route>

            <CFooter />
        </Router>
    )
}