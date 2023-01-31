/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-debugger */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { WritableDraft } from "immer/dist/internal";
import { catchError, filter, map, mergeMap, switchMap } from "rxjs/operators";
// import IdentityApi from "../../api/identity.api";
import { GetUserInfoRequest, IUser, LoginRequest, RegisterRequest, ResponseDeparment } from "../../common/define-identity";
import { RootEpic } from "../../common/define-type";
import Utils from "../../common/utils";
import IdentityApi from "../../api/identity/identity.api";

type MessageLogin = {
    content: string;
    errorCode?: number
}
type MessageForgot = {
    ErrorCode?: number,
    Message: string
}
interface LoginState {
    loading: boolean;
    isSuccess: boolean;
    user: IUser | undefined;
    message: MessageLogin | undefined;
    messageForgot: MessageForgot | undefined;
    departmentId: number;
    refresh_token: string;
    statusCode: string | undefined
    tokenLogin: string | undefined;
}

const initState: LoginState = {
    loading: false,
    isSuccess: true,
    user: undefined,
    departmentId: 1,
    message: undefined,
    messageForgot: undefined,
    refresh_token: "",
    statusCode: undefined,
    tokenLogin: undefined,
}

const loginSlice = createSlice({
    name: 'login',
    initialState: initState,
    reducers: {
        // checkIsLogin(state, action: any) {
        //     state.tokenLogin = action
        //     console.log("---get token---");
        // },
        loginRequest(state, action: PayloadAction<LoginRequest>) {
            state.loading = true;
            // console.log("da chui vao",state.loading)
        },
        loginSuccess(state, action: PayloadAction<{ token: string }>) {
            Utils.setLocalStorage('token', action.payload.token);
            state.tokenLogin = action.payload.token
            state.loading = false
            state.isSuccess = true;
            notification.open({
                message: 'Đăng nhập thành công',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
                style: {
                    marginTop: 40
                }
            });
        },
        loginFail(state, action: any) {
            console.log(action);
            notification.open({
                message: 'Đăng nhập không thành công',
                description:
                    'Hãy kiểm tra lại thông tin đăng nhập.',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
                style: {
                    marginTop: 40
                }
            });
            state.message = action.payload.message
        },
        checkAbleToLogin(state, action: PayloadAction<string>) {
            state.statusCode = action.payload;
        }
        ,
        getUserInfoRequest(state, action: PayloadAction<GetUserInfoRequest>) {
            state.tokenLogin = action.payload.accessToken
            state.loading = true;
        },
        getUserInfoSuccess(state, action: PayloadAction<{ user: IUser, token: string }>) {
            Utils.setLocalStorage('userName', action.payload.user.name);
            Utils.setLocalStorage('userMail', action.payload.user.email);
            state.loading = false;
            state.isSuccess = true;
            state.user = action.payload.user;
            console.log('---get user info success---');
            

        },
        getUserInfoFail(state, action: any) {
            // state.user = action.payload
            console.log(action);
            notification.open({
                message: 'Lấy thông tin thành viên không thành công',
                description:
                    'Hãy kiểm tra lại thông tin đăng nhập.',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
                style: {
                    marginTop: 40
                }
            });
            state.message = action.payload.message
        },
        forgotRequest(state, action: PayloadAction<string>) {
            state.loading = true
        },
        sendMailSuccess(state, action: PayloadAction<{ message: WritableDraft<MessageLogin> | undefined }>) {
            state.message = action.payload.message
            state.loading = false
            state.isSuccess = true;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        },
        getDepartmentRequest(state, action: PayloadAction<string>) {
            state.loading = true;
        },
        getDepartmentSuccess(state, action: PayloadAction<ResponseDeparment>) {
            state.isSuccess = true;
            state.departmentId = action.payload.departmentId;
        },
        message(state, action: PayloadAction<MessageLogin>) {
            state.message = action.payload;
            state.loading = false
        },
        messageForgot(state, action: PayloadAction<MessageForgot>) {
            state.messageForgot = action.payload;
            state.loading = false
        },
        clearMessageResquest(state) {
            state.loading = true
        },
        clearMessage(state) {
            state.messageForgot = undefined;
            state.message = undefined;
            state.loading = false
        },
        setStatusCode(state, action: PayloadAction<string>) {
            state.statusCode = action.payload;
        },
        clearAllRequest(state) {
            state.loading = true;
            state.statusCode = undefined;
            state.user = undefined;
        },

        registerRequest(state, action: PayloadAction<RegisterRequest>) {
            state.loading = true;
            console.log('Da chui vao voi action: ', action);
        },

        registerSuccess(state, action: PayloadAction<any>) {
            notification.open({
                message: 'Đăng ký tài khoản thành công',
                // description:
                //     action.payload.response.message,
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
            // openNotification(NotificationType.Info, 'topRight', `Đăng ký tài khoản mới thành công!`, ``);

            state.user = action.payload.user
            state.isSuccess = true;
        },

        registerFail(state, action: PayloadAction<any>) {
            notification.open({
                message: 'Đăng ký không thành công',
                description:
                    action.payload.response.message,
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
            state.loading = false
        },
    }
})

const login$: RootEpic = (action$) => action$.pipe(
    filter(loginRequest.match),
    switchMap((re) => {
        // IdentityApi.login(re.payload) ?
        console.log(re);
        const body: LoginRequest = {
            "email": re.payload.email,
            "password": re.payload.password,
            "remember": re.payload.remember,
            "additionalProp1": {},
        };

        return IdentityApi.login(body).pipe(
            mergeMap((res: any) => {
                console.log(res);
                console.log(res.data.accessToken);
                const token = res.data.accessToken
                return [
                    loginSlice.actions.loginSuccess({ token: token }),
                    loginSlice.actions.setLoading(false),
                    loginSlice.actions.setStatusCode(res.statusCode)
                ];
            }),
            catchError(err =>
                [loginSlice.actions.loginFail(err)]
            )
        )
    })
)

const forgot$: RootEpic = (action$) => action$.pipe(
    filter(forgotRequest.match),
    switchMap((re) => {
        return IdentityApi.forgotPassword(re.payload).pipe(
            map((res: any) => {
                return loginSlice.actions.messageForgot({ Message: "success" });
            }), catchError(err => [loginSlice.actions.messageForgot(err.response)])
        )
    })
)

const clearMessage$: RootEpic = (action$) => action$.pipe(
    filter(clearMessageResquest.match),
    map(() => { return loginSlice.actions.clearMessage() })
)

const logOut$: RootEpic = (action$) => action$.pipe(
    filter(clearAllRequest.match),
    mergeMap(() => {
        return [
            loginSlice.actions.clearAllRequest(),
            loginSlice.actions.setLoading(false)
        ]
    })
)

const register$: RootEpic = (action$) => action$.pipe(
    filter(registerRequest.match),
    switchMap((re) => {
        console.log(re.payload);
        const body: RegisterRequest = {
            "email": re.payload.email,
            "password": re.payload.password,
            "confirmPassword": re.payload.confirmPassword,
        };
        return IdentityApi.register(body).pipe(
            mergeMap((res: any) => {
                return [
                    loginSlice.actions.setLoading(false),
                    loginSlice.actions.setStatusCode(res.statusCode),
                    loginSlice.actions.registerSuccess(res)
                ];
            }),
            catchError(err =>
                [
                    loginSlice.actions.setStatusCode('UniqueEmail'),
                    loginSlice.actions.registerFail(err)
                ]
            )
        )
    })
)

const getUserInfo$: RootEpic = (action$) => action$.pipe(
    filter(getUserInfoRequest.match),
    switchMap((re) => {
        console.log(re);
        const body: GetUserInfoRequest = {
            "accessToken": re.payload.accessToken,
            "additionalProp1": {}
        };

        return IdentityApi.getUserInfo(body).pipe(
            mergeMap((res: any) => {
                console.log(res);
                const token = res.data.accessToken; 

                const user: IUser = {
                    email: res.data.email,
                    name: res.data.name,
                    address: res.data.address,
                    facilityId: res.data.facilityId,
                    positionId: res.data.positionId,
                };
                console.log(user);
                return [
                    loginSlice.actions.getUserInfoSuccess({ user, token: token }),
                ];
            }),
            catchError(err =>
                [loginSlice.actions.getUserInfoFail(err)]
            )
        )
    })
)
export const LoginEpics = [
    login$,
    forgot$,
    clearMessage$,
    logOut$,
    register$,
    getUserInfo$
]
export const {
    // getDepartmentRequest,
    getUserInfoRequest,
    loginRequest,
    forgotRequest,
    clearMessageResquest,
    clearAllRequest,
    registerRequest,
    checkAbleToLogin
} = loginSlice.actions
export const loginReducer = loginSlice.reducer