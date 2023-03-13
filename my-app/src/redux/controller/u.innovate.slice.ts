/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-debugger */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { catchError, filter, mergeMap, switchMap } from "rxjs/operators";
import CriteriaAPI from "../../api/criteria/criteria.api";
// import FacilitiesAPI from "../../api/facilities/facilities.api";
import FacilitiesAPI from "../../api/facilities/facilities.api";

// import PositionsAPI from "../../api/positions/positions.api";
import PositionsAPI from "../../api/positions/positions.api";
import { RootEpic } from "../../common/define-type";
import { GetCriteriaRequest, ICriteria } from "../../common/u-innovate/define-criteria";
import { IFacilities, IFacilitiesList } from "../../common/u-innovate/define-facilities";
import { IPosition } from "../../common/u-innovate/define-position";
import { IAddresses } from "../../common/u-innovate/define-addresses";
import AddressesAPI from "../../api/addresses/addresses.api";
import { GetAllQuestionByCriteriaIdRequest, IGetAllQuestionsByCriteriaResponse } from "../../common/u-innovate/define-question";
import QuestionAPI from "../../api/questions/question.api";
import { PostResultRequest, PutResultRequest, Result } from "../../common/u-innovate/define-results";
import ResultAPI from "../../api/results/results.api";


interface UInnovateState {
    loading: boolean;
    criteriaLst: ICriteria[];
    positionsLst: IPosition[];
    facilitiesLst: IFacilities[];
    facilitiesLstByDescription: IFacilitiesList | null,
    addressesLst: IAddresses[];
    positonUniversityLst: IPosition[];
    positonLocalLst: IPosition[];
    lstQuestionsByCriteria: IGetAllQuestionsByCriteriaResponse[];
    tmplstQuestionsByCriteria: IGetAllQuestionsByCriteriaResponse[];
    tmpResult: Result | null;
}

const initState: UInnovateState = {
    loading: false,
    criteriaLst: [],
    positionsLst: [],
    facilitiesLst: [],
    facilitiesLstByDescription: null,
    addressesLst: [],
    positonUniversityLst: [],
    positonLocalLst: [],
    lstQuestionsByCriteria: [],
    tmplstQuestionsByCriteria: [],
    tmpResult: null,
}

const uInnovateSlice = createSlice({
    name: 'uinnovate',
    initialState: initState,
    reducers: {

        getCriteriaLstRequest(state, action: PayloadAction<GetCriteriaRequest>) {
            state.loading = true;
            // console.log("da chui vao",state.loading)
        },
        getCriteriaLstSuccess(state, action: PayloadAction<ICriteria[]>) {
            state.criteriaLst = action.payload
            state.loading = false
        },
        getCriteriaLstFail(state, action: any) {
            state.loading = false
        },

        getCriteriaRequest(state, action: PayloadAction<string>) {
            state.loading = true;
            // console.log("da chui vao",state.loading)
        },
        getCriteriaSuccess(state, action: PayloadAction<ICriteria[]>) {
            state.criteriaLst = action.payload
            state.loading = false
        },
        getCriteriaFail(state, action: any) {
            state.loading = false
        },

        // Get all question
        getAllQuestionsByCriteriaIdRequest(state, action: PayloadAction<string>) {
            state.loading = true
        },
        getAllQuestionsByCriteriaSuccess(state, action: PayloadAction<IGetAllQuestionsByCriteriaResponse[]>) {
            console.log(action.payload[0]);
            state.lstQuestionsByCriteria = action.payload;
            state.tmplstQuestionsByCriteria = action.payload;
            state.loading = true
        },
        getAllQuestionsByCriteriaIdFail(state, action: PayloadAction<any>) {
            state.loading = true
        },

        setAnswersIsChosen(state, action: PayloadAction<any>) {

            for (let i = 0; i < state.tmplstQuestionsByCriteria[action.payload.currentIndex].questions[action.payload.indexitem].answers.length; i++) {
                (i === action.payload.index ? state.tmplstQuestionsByCriteria[action.payload.currentIndex].questions[action.payload.indexitem].answers[i].isChosen = true : state.tmplstQuestionsByCriteria[action.payload.currentIndex].questions[action.payload.indexitem].answers[i].isChosen = false)
            }
            console.log(state.tmplstQuestionsByCriteria);
        },

        setAllQuestionsIsChosen(state, action: PayloadAction<IGetAllQuestionsByCriteriaResponse[]>) {
            console.log(action.payload);
            state.lstQuestionsByCriteria = action.payload;
        },

        postResultsRequest(state, action: PayloadAction<PostResultRequest>) {
            state.loading = true;
        },

        postResultsSuccess(state, action: PayloadAction<Result>) {
            state.tmpResult = action.payload;
            console.log(action.payload);
        },
        postResultsFail(state, action: PayloadAction<Result>) {
            console.log(action.payload);

        },

        putResultsRequest(state, action: PayloadAction<PostResultRequest>) {
            state.loading = true;
        },

        putResultsSuccess(state, action: PayloadAction<any>) {
            state.tmpResult = action.payload;
            console.log(action.payload);
        },
        putResultsFail(state, action: PayloadAction<any>) {
            console.log(action.payload);
        },
        // Lấy ra hết vị trí của user
        getAllPositionsRequest(state) {
            state.loading = true
        },

        getAllPositionsSuccess(state, action: PayloadAction<any>) {
            state.positionsLst = action.payload
            for (let i = 0; i < action.payload.length; i++) {
                if (action.payload[i].type === 'UINNOVATE')
                    state.positonUniversityLst = action.payload[i].positions;
                else if (action.payload[i].type === 'PINNOVATE')
                    state.positonLocalLst = action.payload[i].positions;
            }
            state.loading = false
        },

        getAllPositionsFail(state, action: any) {
            state.loading = false
        },

        getAllAddressesRequest(state) {
            state.loading = true
        },

        getAllAddressesSuccess(state, action: PayloadAction<IAddresses[]>) {
            state.addressesLst = action.payload
            state.loading = false
        },

        getAllAddressesFail(state, action: any) {
            state.loading = false
        },
        // Lấy ra hết vai trò của user
        getAllFacilitiesRequest(state) {
            state.loading = true
        },

        getAllFacilitiesSuccess(state, action: PayloadAction<IFacilities[]>) {
            state.facilitiesLst = action.payload
            state.loading = false
        },

        getAllFacilitiesFail(state, action: any) {
            state.loading = false
        },

        // Lấy ra hết vai trò của user
        getAllFacilitiesByDescriptionRequest(state) {
            state.loading = true
        },

        getAllFacilitiesByDescriptionSuccess(state, action: PayloadAction<IFacilitiesList>) {
            state.loading = false
            state.facilitiesLstByDescription = action.payload;
        },

        getAllFacilitiesByDescriptionFail(state, action: any) {
            state.loading = false
        },


    }
})

const getAllCriteria$: RootEpic = (action$) => action$.pipe(
    filter(getCriteriaLstRequest.match),
    switchMap((re) => {
        console.log(re);
        return CriteriaAPI.getCriteriaByUserToken(re.payload).pipe(
            mergeMap((res: any) => {
                console.log(res);
                return [uInnovateSlice.actions.getCriteriaLstSuccess(res.data),];
            }),
            catchError(err => [uInnovateSlice.actions.getCriteriaLstFail(err)])
        )
    })
)
const getCriteria$: RootEpic = (action$) => action$.pipe(
    filter(getCriteriaRequest.match),
    switchMap((re) => {
        console.log(re);
        return CriteriaAPI.getCriteria(re.payload).pipe(
            mergeMap((res: any) => {
                console.log(res);
                return [uInnovateSlice.actions.getCriteriaSuccess(res.data),];
            }),
            catchError(err => [uInnovateSlice.actions.getCriteriaFail(err)])
        )
    })
)
const getAllQuestionsByCriteriaId$: RootEpic = (action$) => action$.pipe(
    filter(getAllQuestionsByCriteriaIdRequest.match),
    switchMap((re) => {
        console.log(re);
        return QuestionAPI.getAllQuestionByCriteriaId(re.payload).pipe(
            mergeMap((res: any) => {
                console.log(res);
                return [uInnovateSlice.actions.getAllQuestionsByCriteriaSuccess(res.data),];
            }),
            catchError(err => [uInnovateSlice.actions.getAllQuestionsByCriteriaIdFail(err)])
        )
    })
)
const postResults$: RootEpic = (action$) => action$.pipe(
    filter(postResultsRequest.match),
    switchMap((re) => {
        console.log(re);
        return ResultAPI.PostResult(re.payload).pipe(
            mergeMap((res: any) => {
                console.log(res);
                return [uInnovateSlice.actions.postResultsSuccess(res.data),];
            }),
            catchError(err => [uInnovateSlice.actions.postResultsFail(err)])
        )
    })
)
const putResults$: RootEpic = (action$) => action$.pipe(
    filter(putResultsRequest.match),
    switchMap((re) => {
        console.log(re);
        const req: PutResultRequest = {
            listAnswer: re.payload.listAnswer,
            additionalProp1: {}
        }
        return ResultAPI.PutResult(re.payload.criteriaId, req).pipe(
            mergeMap((res: any) => {
                console.log(res);
                return [uInnovateSlice.actions.putResultsSuccess(res.data),];
            }),
            catchError(err => [uInnovateSlice.actions.putResultsFail(err)])
        )
    })
)
// const getAllQuestionsByCriteriaId$: RootEpic = (action$) => action$.pipe(
//     filter(getAllQuestionsByCriteriaIdRequest.match),
//     switchMap((re) => {
//         console.log(re);
//         return QuestionAPI.getAllQuestionByCriteriaId(re.payload).pipe(
//             mergeMap((res: any) => {
//                 console.log(res);
//                 return [uInnovateSlice.actions.getAllQuestionsByCriteriaSuccess(res.data),];
//             }),
//             catchError(err => [uInnovateSlice.actions.getAllQuestionsByCriteriaIdFail(err)])
//         )
//     })
// )
const getAllPosition$: RootEpic = (action$) => action$.pipe(
    filter(getAllPositionsRequest.match),
    switchMap(() => {
        return PositionsAPI.getAllPositions().pipe(
            mergeMap((res: any) => {
                console.log(res);
                return [uInnovateSlice.actions.getAllPositionsSuccess(res.data),];
            }),
            catchError(err => [uInnovateSlice.actions.getAllPositionsFail(err)])
        )
    })
)
const getAllAddresses$: RootEpic = (action$) => action$.pipe(
    filter(getAllAddressesRequest.match),
    switchMap(() => {
        return AddressesAPI.getAllAddresses().pipe(
            mergeMap((res: any) => {
                console.log(res);
                return [uInnovateSlice.actions.getAllAddressesSuccess(res.data),];
            }),
            catchError(err => [uInnovateSlice.actions.getAllAddressesFail(err)])
        )
    })
)
const getAllFacilities$: RootEpic = (action$) => action$.pipe(
    filter(getAllFacilitiesRequest.match),
    switchMap(() => {
        return FacilitiesAPI.getAllFacilities().pipe(
            mergeMap((res: any) => {
                console.log(res);
                return [uInnovateSlice.actions.getAllFacilitiesSuccess(res.data),];
            }),
            catchError(err => [uInnovateSlice.actions.getAllFacilitiesFail(err)])
        )
    })
)
const getAllFacilitiesByDescription$: RootEpic = (action$) => action$.pipe(
    filter(getAllFacilitiesByDescriptionRequest.match),
    switchMap(() => {
        return FacilitiesAPI.getAllFacilitiesByDescription().pipe(
            mergeMap((res: any) => {
                console.log(res);
                return [uInnovateSlice.actions.getAllFacilitiesByDescriptionSuccess(res.data),];
            }),
            catchError(err => [uInnovateSlice.actions.getAllFacilitiesByDescriptionFail(err)])
        )
    })
)
export const UInnovateEpics = [
    getAllCriteria$,
    getCriteria$,
    getAllPosition$,
    getAllFacilities$,
    getAllFacilitiesByDescription$,
    getAllAddresses$,
    getAllQuestionsByCriteriaId$,
    postResults$,
    putResults$,
]
export const {
    getAllPositionsRequest,
    getCriteriaLstRequest,
    getCriteriaRequest,
    getAllQuestionsByCriteriaIdRequest,
    getAllFacilitiesRequest,
    getAllFacilitiesByDescriptionRequest,
    getAllAddressesRequest,
    setAnswersIsChosen,
    setAllQuestionsIsChosen,
    postResultsRequest,
    putResultsRequest,

} = uInnovateSlice.actions
export const uInnovateReducer = uInnovateSlice.reducer