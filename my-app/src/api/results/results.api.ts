/* eslint-disable new-parens */
import HttpClient from "../http-client";
import SYSTEM_CONSTANTS from "../../common/constants";
import axios from "axios";

import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from "rxjs/operators";
import { ICriteria } from "../../common/u-innovate/define-criteria";
import { GetAllQuestionByCriteriaIdRequest, IGetAllQuestionsByCriteriaResponse } from "../../common/u-innovate/define-question";
import { PostResultRequest, PutResultRequest, Result } from "../../common/u-innovate/define-results";

export default class ResultAPI {
    static host = 'http://178.128.19.31:2001';

    static PostResult(req: PostResultRequest): Observable<Result | null> {
        const api = `${ResultAPI.host}/${SYSTEM_CONSTANTS.API.RESULT.POST_RESULT}`;
        return HttpClient.post(api, req).pipe(
            map((res) => res as Result || null, catchError((error) => new Observable))
        );
    }

    static PutResult(criteriaId: string, req: PutResultRequest): Observable<Result | null> {
        const api = `${ResultAPI.host}/${SYSTEM_CONSTANTS.API.RESULT.PUT_RESULT}/${criteriaId}`;
        return HttpClient.put(api, req).pipe(
            map((res) => res as Result || null, catchError((error) => new Observable))
        );
    }

}