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
import { ICriteria } from "../../common/u-innovate/define-criteria";
import { IFacilities } from "../../common/u-innovate/define-facilities";
import { IPosition } from "../../common/u-innovate/define-position";


interface UInnovateState {
    loading: boolean;
    criteriaLst: ICriteria[];
    positionsLst: IPosition[];
    facilitiesLst: IFacilities[];
}

const initState: UInnovateState = {
    loading: false,
    criteriaLst: [],
    positionsLst: [],
    facilitiesLst: [],
}

const uInnovateSlice = createSlice({
    name: 'uinnovate',
    initialState: initState,
    reducers: {
        getCriteriaLstRequest(state) {
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

        // Get all question
        getAllQuestionsByCriteriaIdRequest(state, action: PayloadAction<string>) {
            state.loading = true
        },
        getAllQuestionsByCriteriaSuccess(state, action: PayloadAction<any>) {
            state.loading = true
        },
        getAllQuestionsByCriteriaIdFail(state, action: PayloadAction<any>) {
            state.loading = true
        },

        // Lấy ra hết vị trí của user
        getAllPositionsRequest(state) {
            state.loading = true
        },

        getAllPositionsSuccess(state, action: PayloadAction<IPosition[]>) {
            state.positionsLst = action.payload
            state.loading = false
        },

        getAllPositionsFail(state, action: any) {
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
    }
})

const getAllCriteria$: RootEpic = (action$) => action$.pipe(
    filter(getCriteriaLstRequest.match),
    switchMap(() => {
        // IdentityApi.login(re.payload) ?

        return CriteriaAPI.getAllCriteria().pipe(
            mergeMap((res: any) => {
                console.log(res);
                return [uInnovateSlice.actions.getCriteriaLstSuccess(res.data),];
            }),
            catchError(err => [uInnovateSlice.actions.getCriteriaLstFail(err)])
        )
    })
)
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
// const getAllQuestionsByCriteriaId$: RootEpic = (action$) => action$.pipe(
//     filter(getAllQuestionsByCriteriaIdRequest.match),
//     switchMap((req) => {
//         // IdentityApi.login(re.payload) ?

//         return QuestionAPI.getAllQuestionByCriteriaId(req.payload).pipe(
//             mergeMap((res: any) => {
//                     console.log(res);
//                     return [
//                         uInnovateSlice.actions.getCriteriaLstSuccess(res.data),

//                     ];
//             }),
//             catchError(err => [uInnovateSlice.actions.getCriteriaLstFail(err)])
//         )
//     })
// )


export const UInnovateEpics = [
    getAllCriteria$,
    getAllPosition$,
    getAllFacilities$,
    // getAllQuestionsByCriteriaId$
]
export const {
    getAllPositionsRequest,
    getCriteriaLstRequest,
    getAllQuestionsByCriteriaIdRequest,
    getAllFacilitiesRequest,

} = uInnovateSlice.actions
export const uInnovateReducer = uInnovateSlice.reducer