/* eslint-disable new-parens */
import HttpClient from "../http-client";
import SYSTEM_CONSTANTS from "../../common/constants";
import axios from "axios";

import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from "rxjs/operators";
import { GetCriteriaRequest, ICriteria } from "../../common/u-innovate/define-criteria";
import { IDataResponse } from "../../common/define-meetings";

export default class CriteriaAPI {
    static host = 'http://178.128.19.31:2001';


    static getCriteriaByUserToken(req: GetCriteriaRequest): Observable<IDataResponse<any> | null> {
        const api = `${CriteriaAPI.host}/${SYSTEM_CONSTANTS.API.CRITERIA.GET_CRITERIA_BY_USER_TOKEN.replace('{type}', req.type)}`;
        return HttpClient.get(api, { headers: { Authorization: `Bearer ${req.token}` } }).pipe(
            map((res) => res as IDataResponse<ICriteria[]> || null, catchError((error) => new Observable)));
    }

    static getCriteria(type: string): Observable<IDataResponse<any> | null> {
        const api = `${CriteriaAPI.host}/${SYSTEM_CONSTANTS.API.CRITERIA.GET_CRITERIA_BY_USER_TOKEN.replace('{type}', type)}`;
        return HttpClient.get(api, {}).pipe(
            map((res) => res as IDataResponse<ICriteria[]> || null, catchError((error) => new Observable)));
    }
    // static getAllCriteria(): Observable<ICriteria[] | null> {
    //     const api = `${CriteriaAPI.host}/${SYSTEM_CONSTANTS.API.CRITERIA.GET_ALL}`;
    //     return HttpClient.get(api, {}).pipe(
    //         map((res) => res as ICriteria[] || null, catchError((error) => new Observable))
    //     );
    // }

    // static alternativeGetAllCriteria() {
    //     const api = `${CriteriaAPI.host}/${SYSTEM_CONSTANTS.API.CRITERIA.GET_ALL}`;

    //     var config = {
    //         method: 'get',
    //         url: api,
    //         headers: {}
    //     };
    //     return axios(config);
    // }
}