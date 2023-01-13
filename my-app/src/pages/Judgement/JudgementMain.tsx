import React, { useState } from 'react'
import IntroduceMethod from './IntroduceMethod'
import JudgementCriteriaOptions from './JudgementCriteriaOptions'
import TakingTest from './TakingTest'
import './styles.judgement.scss'

const JudgementMain = () => {
    const [isShowIntro,setIsShowIntro] = useState(true);
    const [isShowCriteria,setIsShowCriteria] = useState(false);
    const [isShowTest,setIsShowTest] = useState(false);

    const tranferFromIntroToCriteria = () => {
        setIsShowIntro(false);
        setIsShowCriteria(true);
    }

    const tranferFromCriteriaToTest = () => {
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
                    tranferFromIntroToCriteria = {tranferFromIntroToCriteria}
                />
            }
            {
                isShowCriteria && 
                <JudgementCriteriaOptions
                    tranferFromCriteriaToTest = {tranferFromCriteriaToTest}
                    revertToIntro = {revertToIntro}
                />
            }
            {
                isShowTest && 
                <TakingTest
                    revertToIntro = {revertToIntro}
                    revertToCriteria = {revertToCriteria}
                />
            }
        </div>
    )
}

export default JudgementMain