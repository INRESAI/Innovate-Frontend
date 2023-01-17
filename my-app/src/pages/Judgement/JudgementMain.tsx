import React, { useEffect, useState } from 'react'
import IntroduceMethod from './IntroduceMethod'
import JudgementCriteriaOptions from './JudgementCriteriaOptions'
import TakingTest from './TakingTest'
import './styles.judgement.scss'
import { useDispatchRoot, useSelectorRoot } from '../../redux/store'
import { getCriteriaLstRequest } from '../../redux/controller'
import CriteriaAPI from '../../api/criteria/criteria.api'
import MoreTest from './MoreTest'
import QuestionAPI from '../../api/questions/question.api'
import { ISetOfQuestions } from '../../common/u-innovate/define-setOfQuestions'
import { ICriteria } from '../../common/u-innovate/define-criteria'

const JudgementMain = () => {
    const [isShowIntro, setIsShowIntro] = useState(true);
    const [isShowCriteria, setIsShowCriteria] = useState(false);
    const [isShowTest, setIsShowTest] = useState(false);
    const [isShowMoreTest, setIsShowMoreTest] = useState(false);
    const [criteriaLst, setCriteriaLst] = useState<any>();
    const [questionLst, setQuestionLst] = useState<ISetOfQuestions[]>();

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

    const tranferFromCriteriaToTest =  async (criteriaId: string) => { // chuyen tu man chon tieu chi sang man lam bai test
        //Call API get danh sach question theo criteriaId
        let responseOfFirstAPI: any;
        let responseOfSecondAPI;
        let finalQuestionOfCriteriaLst: ISetOfQuestions[] = [];

        await QuestionAPI.getAllQuestionByCriteriaId(criteriaId).then((res: any)=>{
            console.log(res)
            responseOfFirstAPI = res.data.data;
        })

        await QuestionAPI.getAllAnswer().then((res: any)=>{
            responseOfFirstAPI.map((item: any) => { // Mapper form of data from API to form of Frontend data
                const newItem: ISetOfQuestions = {
                    id: item.setOfQuestions._id,
                    content: item.setOfQuestions.name,
                    questionLst: item.question.map((subitem: any) => {
                        return {
                            id: subitem.id,
                            content: subitem.content,
                            answerLst: res.data.data,
                            pickedAnswer: null
                        }
                    })
                }
                finalQuestionOfCriteriaLst.push(newItem);
            })
            setQuestionLst(finalQuestionOfCriteriaLst)
        })
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
                criteriaLst && isShowCriteria &&
                <JudgementCriteriaOptions
                    tranferFromCriteriaToTest={tranferFromCriteriaToTest}
                    revertToIntro={revertToIntro}
                    criteriaLst={criteriaLst}
                //Sau nay se truyen them 1 lst Criteria vao day
                />
            }
            {
                // Sau nay se sua isShowTest thanh questionByCriteria != null
                questionLst && isShowTest &&
                <TakingTest
                    revertToIntro={revertToIntro}
                    revertToCriteria={revertToCriteria}
                    tranferFromTestToMoreTests={tranferFromTestToMoreTests}
                    questionLst={questionLst}
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