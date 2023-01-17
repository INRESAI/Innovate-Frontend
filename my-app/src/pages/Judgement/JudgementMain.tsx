import React, { useEffect, useState } from 'react'
import IntroduceMethod from './IntroduceMethod'
import JudgementCriteriaOptions from './JudgementCriteriaOptions'
import TakingTest from './TakingTest'
import './styles.judgement.scss'
import { useDispatchRoot, useSelectorRoot } from '../../redux/store'
import { getCriteriaLstRequest } from '../../redux/controller'
import CriteriaAPI from '../../api/criteria/criteria.api'
import MoreTest from './MoreTest'

const JudgementMain = () => {
    const [isShowIntro, setIsShowIntro] = useState(true);
    const [isShowCriteria, setIsShowCriteria] = useState(false);
    const [isShowTest, setIsShowTest] = useState(false);
    const [isShowMoreTest, setIsShowMoreTest] = useState(false);
    const [criteriaLst, setCriteriaLst] = useState([]);

    //Dung useSelector lay ra 2 lst criteriaLst va questionByCriteriaLst
    // const { criteriaLst } = useSelectorRoot((state) => state.uinnovate);
    const dispatch = useDispatchRoot()


    const tranferFromIntroToCriteria = () => {
        setIsShowIntro(false);
        setIsShowCriteria(true);
    }

    const tranferFromCriteriaToTest = (criteriaId: string) => { // chuyen tu man chon tieu chi sang man lam bai test
        //Call API get danh sach question theo criteriaId

        setIsShowCriteria(false);
        setIsShowTest(true);
    }
    const tranferFromTestToMoreTests = () => { // chuyen tu man chon tieu chi sang man lam bai test
        //Call API get danh sach question theo criteriaId
        setIsShowTest(false);
        setIsShowMoreTest(true);
    }
    const tranferFromMoreTestToTests = () => { // chuyen tu man chon tieu chi sang man lam bai test
        //Call API get danh sach question theo criteriaId
        setIsShowTest(true);
        setIsShowMoreTest(false);
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
                    criteriaLst={criteriaLst}
                //Sau nay se truyen them 1 lst Criteria vao day
                />
            }
            {
                // Sau nay se sua isShowTest thanh questionByCriteria != null
                isShowTest &&
                <TakingTest
                    revertToIntro={revertToIntro}
                    revertToCriteria={revertToCriteria}
                    tranferFromTestToMoreTests={tranferFromTestToMoreTests}
                //Sau nay se truyen 1 lst questionByCriteriaLst vao nua
                />
            }
            {
                isShowMoreTest &&
                <MoreTest
                    tranferFromMoreTestToTests={tranferFromMoreTestToTests}
                />
            }
        </div>
    )
}

export default JudgementMain