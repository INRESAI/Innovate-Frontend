/* eslint-disable */
import SYSTEM_CONSTANTS from '../../common/constants';
import { ActiveAccountRequest, CheckEmailResponse, GetUserInfoRequest, IUser, LoginRequest, NewResponseLogin, RegisterRequest, ResponseDeparment, ResponseLogin } from '../../common/define-identity';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from "rxjs/operators";
import HttpClient from "../http-client";
import JSEncrypt from 'jsencrypt';
import { error } from 'console';
import { IDataResponse } from '../../common/define-meetings';
import axios from 'axios';
export default class IdentityApi {
    static host = 'http://178.128.19.31:2001';

    static getCurrentUserByToken(token: string): Observable<IDataResponse<any> | null> {
        const api = `${IdentityApi.host}/${SYSTEM_CONSTANTS.API.IDENTITY.CONNECT_TOKEN}`;
        return HttpClient.post(api, token).pipe(
            map((res) => res as IDataResponse<IUser> || null, catchError((error) => new Observable)));
    }

    static login(body: LoginRequest): Observable<IDataResponse<any> | null> {
        const api = `${IdentityApi.host}/${SYSTEM_CONSTANTS.API.IDENTITY.LOGIN}`;
        return HttpClient.post(api, body).pipe(
            map((res) => res as IDataResponse<IUser> || null, catchError((error) => new Observable)));
    }
    // static getUserInfo(body: GetUserInfoRequest): Observable<IDataResponse<any> | null> {
    //     const api = `${IdentityApi.host}/${SYSTEM_CONSTANTS.API.IDENTITY.GETUSERINFO}`;
    //     return HttpClient.post(api, body, headers).pipe(
    //         map((res) => res as IDataResponse<IUser> || null, catchError((error) => new Observable)));
    // }
    static getUserInfo(token: any): Observable<IDataResponse<any> | null> {
        const api = `${IdentityApi.host}/${SYSTEM_CONSTANTS.API.IDENTITY.PROFILE}`;
        return HttpClient.get(api, { headers: { Authorization: `Bearer ${token}` } }).pipe(
            map((res) => res as IDataResponse<IUser> || null, catchError((error) => new Observable)));
    }
    // static alternativeGetAllCriteria() {
    //     const api = `${CriteriaAPI.host}/${SYSTEM_CONSTANTS.API.CRITERIA.GET_ALL}`;

    //     var config = {
    //         method: 'get',
    //         url: api,
    //         headers: {}
    //     };
    //     return axios(config);
    // }
    static checkEmail(body: string): Observable<IDataResponse<any> | null> {
        const api = `${IdentityApi.host}/${SYSTEM_CONSTANTS.API.IDENTITY.CHECKEMAIL}?email=${body}`;
        return HttpClient.get(api).pipe(
            map((res) => res as IDataResponse<CheckEmailResponse> || null, catchError((error) => new Observable)));
    }
    static checkActiveAccount(body: ActiveAccountRequest): Observable<IDataResponse<any> | null> {
        const api = `${IdentityApi.host}/${SYSTEM_CONSTANTS.API.IDENTITY.ACTIVE_ACCOUNT}?email=${body.email}&activeCode=${body.activeCode}`;
        return HttpClient.get(api).pipe(
            map((res) => res as IDataResponse<any> || null, catchError((error) => new Observable)));
    }

    static register(body: RegisterRequest): Observable<IDataResponse<any> | null> {
        const api = `${IdentityApi.host}/${SYSTEM_CONSTANTS.API.IDENTITY.REGISTER}`;
        return HttpClient.post(api, body).pipe(
            map((res) => res as IDataResponse<IUser> || null, catchError((error) => new Observable))
        );
    }

    static deparmentId(token: any): Observable<ResponseDeparment | null> {
        const api = `${IdentityApi.host}/${SYSTEM_CONSTANTS.API.LISTHOTEL.DEPARTMENT}`;
        return HttpClient.get(api, { headers: { Authorization: `Bearer ${token}` } }).pipe(
            map((res) => res as ResponseDeparment || null)
        )
    }

    static forgotPassword(email: string): Observable<any | null> {
        const api = `${IdentityApi.host}/${SYSTEM_CONSTANTS.API.IDENTITY.FORGOT}/${email}/notify/passwordreset`;
        return HttpClient.post(api, {}).pipe(
            map((res) => res as any || null, catchError((error) => new Observable)));

    }
}