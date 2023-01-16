/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-debugger */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootEpic } from "../../common/define-type";
import { catchError, filter, switchMap,mergeMap, map } from "rxjs/operators";
import { notification } from "antd";
import { ICriteria } from "../../common/u-innovate/define-criteria";
import CriteriaAPI from "../../api/criteria/criteria.api";


interface UInnovateState {
    loading: boolean;
    criteriaLst: ICriteria[]
}

const initState: UInnovateState = {
    loading: false,
    criteriaLst: []
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

            // notification.open({
            //     message: 'Đăng nhập thành công rồi nhớ <3',
            //     description:
            //     'Chúc bạn có trải nghiệm tốt nhất cùng FruitAI!',
            //     onClick: () => {
            //     console.log('Notification Clicked!');
            //     },
            // });
            state.criteriaLst = action.payload
            state.loading = false
        },
        getCriteriaLstFail(state, action: any){
            state.loading =false
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
                    return [
                        uInnovateSlice.actions.getCriteriaLstSuccess(res.data),

                    ];
            }),
            catchError(err => [uInnovateSlice.actions.getCriteriaLstFail(err)])
        )
    })
)




export const UInnovateEpics = [
    getAllCriteria$,

]
export const {
    getCriteriaLstRequest,

} = uInnovateSlice.actions
export const uInnovateReducer = uInnovateSlice.reducer