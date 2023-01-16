import React, { useEffect, useState } from 'react'
import IntroduceMethod from './IntroduceMethod'
import JudgementCriteriaOptions from './JudgementCriteriaOptions'
import TakingTest from './TakingTest'
import './styles.judgement.scss'
import "../../App.scss";

const JudgementMain = () => {
    const [isShowIntro, setIsShowIntro] = useState(true);
    const [isShowCriteria, setIsShowCriteria] = useState(false);
    const [isShowTest, setIsShowTest] = useState(false);
    //Dung useSelector lay ra 2 lst criteriaLst va questionByCriteriaLst

    useEffect(() => {
        //call API get All criteria va luu vao Redux
    }, [])

    const tranferFromIntroToCriteria = () => {
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
                isShowCriteria &&
                <JudgementCriteriaOptions
                    tranferFromCriteriaToTest={tranferFromCriteriaToTest}
                    revertToIntro={revertToIntro}
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