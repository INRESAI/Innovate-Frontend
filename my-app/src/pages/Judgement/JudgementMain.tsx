import React, { useEffect, useState } from 'react'
import IntroduceMethod from './IntroduceMethod'
import JudgementCriteriaOptions from './JudgementCriteriaOptions'
import TakingTest from './TakingTest'
import './styles.judgement.scss'
import { useDispatchRoot, useSelectorRoot } from '../../redux/store'
import { getCriteriaLstRequest } from '../../redux/controller'
import CriteriaAPI from '../../api/criteria/criteria.api'

const JudgementMain = () => {
    const [isShowIntro,setIsShowIntro] = useState(true);
    const [isShowCriteria,setIsShowCriteria] = useState(false);
    const [isShowTest,setIsShowTest] = useState(false);
    const [criteriaLst,setCriteriaLst] = useState<any>();
    //Dung useSelector lay ra 2 lst criteriaLst va questionByCriteriaLst
    // const { criteriaLst } = useSelectorRoot((state) => state.uinnovate);
    const dispatch = useDispatchRoot()

    // const getAllCriteria

    // useEffect(() => {
    //     //call API get All criteria va luu vao Redux
    //     const res = CriteriaAPI.alternativeGetAllCriteria()
    //     setCriteriaLst(res.data);
    // },[])

    const tranferFromIntroToCriteria = async () => {
        await CriteriaAPI.alternativeGetAllCriteria().then((res: any)=>{
            console.log(res)
            // dispatch(sendAnswersRequest(data.data))
            setCriteriaLst(res.data.data)
            
            console.log(criteriaLst)

        })
        setIsShowIntro(false);
        setIsShowCriteria(true);
    }

    const tranferFromCriteriaToTest = (criteriaId: string) => { // chuyen tu man chon tieu chi sang man lam bai test
        //Call API get danh sach question theo criteriaId
        
        setIsShowCriteria(false);
        setIsShowTest(true);
    }

    const revertToIntro = () => {
        setIsShowIntro(true);
        setIsShowCriteria(false);
        setIsShowTest(false);
    }

    const revertToCriteria = () => {
        setIsShowIntro(false);
        setIsShowCriteria(true);
        setIsShowTest(false);
    }
    return (
        <div className='judgement-main'>
            {
                isShowIntro &&
                <IntroduceMethod
                    tranferFromIntroToCriteria={tranferFromIntroToCriteria}
                />
            }
            {
                criteriaLst &&
                <JudgementCriteriaOptions
                    tranferFromCriteriaToTest = {tranferFromCriteriaToTest}
                    revertToIntro = {revertToIntro}
                    criteriaLst = {criteriaLst}
                    //Sau nay se truyen them 1 lst Criteria vao day
                />
            }
            {
                // Sau nay se sua isShowTest thanh questionByCriteria != null
                isShowTest &&
                <TakingTest
                    revertToIntro={revertToIntro}
                    revertToCriteria={revertToCriteria}
                //Sau nay se truyen 1 lst questionByCriteriaLst vao nua
                />
            }
        </div>
    )
}

export default JudgementMain