/* eslint-disable new-parens */
import HttpClient from "../http-client";
import SYSTEM_CONSTANTS from "../../common/constants";
import axios from "axios";

import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from "rxjs/operators";
import { ICriteria } from "../../common/u-innovate/define-criteria";
import { IGetAllQuestionsByCriteriaResponse } from "../../common/u-innovate/define-question";

export default class QuestionAPI {
    static host = 'http://178.128.19.31:2001';


    // static getAllQuestionByCriteriaId(criteriaId: string): Observable<IGetAllQuestionsByCriteriaResponse[] | null> {
    //     const api = `${QuestionAPI.host}/${SYSTEM_CONSTANTS.API.QUESTION.GET_ALL}/${criteriaId}`;
    //     return HttpClient.get(api,{}).pipe(
    //         map((res) => res as IGetAllQuestionsByCriteriaResponse[] || null, catchError((error) => new Observable))
    //     );
    // }

    static getAllQuestionByCriteriaId =  (criteriaId: string) => {
        var config = {
            method: 'get',
            url: `${QuestionAPI.host}/${SYSTEM_CONSTANTS.API.QUESTION.GET_ALL}/${criteriaId}`,
            headers: { }
        };
        return axios(config)
    }

    static getAllAnswer = () => {
        var config = {
            method: 'get',
            url: `${QuestionAPI.host}/${SYSTEM_CONSTANTS.API.ANSWER.GET_ALL}`,
            headers: { }
        };

        return axios(config)
    }

    static caculateResult = (questionLst: any[]) => {
        var data = JSON.stringify({
            // "total": 0,
            "listAnswer": questionLst,
            "additionalProp1": {}
        });

        const currentToken = localStorage.getItem('accessToken') // Doi sau khi xong login thi cong tiep
          
        var config = {
            method: 'post',
            url: `${QuestionAPI.host}/${SYSTEM_CONSTANTS.API.RESULT.CACULATE}`,
            headers: { // Sau khi xong phan Login se thay accessToken vao sau Bearer
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpZXVAZ21haWwuY29tIiwic2NvcGVzIjpbInVzZXIiXSwiaWF0IjoxNjc1MjE5NDY0LCJleHAiOjE2NzUzMDU4NjR9.WQP7_tu9ii55UqymrYjEvTegTRI4d6KES_ilSjodFCg', 
                'Content-Type': 'application/json'
            },
            data : data
        };
          
        return axios(config)
          
    }
}