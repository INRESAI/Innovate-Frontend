import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import CriteriaAPI from '../../api/criteria/criteria.api'
import QuestionAPI from '../../api/questions/question.api'
import { ISetOfQuestions } from '../../common/u-innovate/define-setOfQuestions'
import { useDispatchRoot, useSelectorRoot } from '../../redux/store'
import IntroduceMethod from './IntroduceMethod'
import JudgementCriteriaOptions from './JudgementCriteriaOptions'
import MoreTest from './MoreTest'
import TakingTest from './TakingTest'
import './styles.judgement.scss'
import { GetCriteriaRequest, ICriteria } from '../../common/u-innovate/define-criteria'
import { getAllQuestionsByCriteriaIdRequest, getCriteriaLstRequest } from '../../redux/controller'

const JudgementMain = () => {
    const [isShowIntro, setIsShowIntro] = useState(true); // true
    const [isShowCriteria, setIsShowCriteria] = useState(false); // false
    const [isShowTest, setIsShowTest] = useState(false);
    const [isShowMoreTest, setIsShowMoreTest] = useState(false);
    const [numberOfQuestion, setNumberOfQuestions] = useState<number>(0);
    const [choseCriteria, setChoseCriteria] = useState<any>(); // Luu lai Criteria duoc chon o giao dien danh sach Criteria. Sau do truyen vao giao dien lam test
    const { user } = useSelectorRoot((state) => state.login);
    const { criteriaLst, lstQuestionsByCriteria, tmpResult } = useSelectorRoot((state) => state.uinnovate);

    //Dung useSelector lay ra 2 lst criteriaLst va questionByCriteriaLst
    const dispatch = useDispatchRoot()

    useEffect(() => {
        let checkLogin = localStorage.getItem('token') ? localStorage.getItem('token') : ''
        if (checkLogin && user) {
            checkLogin = checkLogin.slice(1);
            checkLogin = checkLogin.slice(0, checkLogin.length - 1);
            const req: GetCriteriaRequest = {
                "token": checkLogin,
                "type": user.type,
            }
            dispatch(getCriteriaLstRequest(req))
        }
    }, [user])


    useEffect(() => {
        let checkLogin = localStorage.getItem('token') ? localStorage.getItem('token') : ''
        if (checkLogin && user) {
            checkLogin = checkLogin.slice(1);
            checkLogin = checkLogin.slice(0, checkLogin.length - 1);
            const req: GetCriteriaRequest = {
                "token": checkLogin,
                "type": user.type,
            }
            dispatch(getCriteriaLstRequest(req))
        }
    }, [tmpResult])
    // const getAllCriteria

    // useEffect(() => {
    //     //call API get All criteria va luu vao Redux
    //     const res = CriteriaAPI.alternativeGetAllCriteria()
    //     setCriteriaLst(res.data);
    // },[])

    const tranferFromIntroToCriteria = async () => {
        // await CriteriaAPI.alternativeGetAllCriteria().then((res: any) => {
        //     console.log(res)
        //     // dispatch(sendAnswersRequest(data.data))
        //     setCriteriaLst(res.data.data)

        //     console.log(criteriaLst)

        // })
        setIsShowIntro(false);
        setIsShowCriteria(true);
    }

    const tranferFromCriteriaToTest = async (criteria: any) => { // chuyen tu man chon tieu chi sang man lam bai test
        console.log(criteria);
        // dispatch(getAllQuestionsByCriteriaIdRequest(criteria.criteriaId))
        setNumberOfQuestions(criteria.numberOfQuestion);
        setChoseCriteria(criteria);
        // await QuestionAPI.getAllQuestionByCriteriaId(criteria.id).then((res: any) => { // Lay tat ca bo cau hoi (moi bo cau hoi gom nhieu cau hoi) cua tieu chi duoc chon
        //     console.log(res)
        //     responseOfFirstAPI = res.data.data;
        // })

        // await QuestionAPI.getAllAnswer().then((res: any) => {
        //     responseOfFirstAPI.map((item: any) => { // Mapper form of data from API to form of Frontend data
        //         const newItem: ISetOfQuestions = {
        //             id: item.setOfQuestions._id,
        //             content: item.setOfQuestions.name,
        //             questionLst: item.question.map((subitem: any) => {
        //                 return {
        //                     id: subitem.id,
        //                     content: subitem.content,
        //                     answerLst: res.data.data,
        //                     pickedAnswer: null
        //                 }
        //             })
        //         }
        //         finalQuestionOfCriteriaLst.push(newItem);
        //     })
        //     setQuestionLst(finalQuestionOfCriteriaLst)
        // })
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
        let checkLogin = localStorage.getItem('token') ? localStorage.getItem('token') : ''
        console.log(user);
        if (checkLogin && user) {
            checkLogin = checkLogin.slice(1);
            checkLogin = checkLogin.slice(0, checkLogin.length - 1);
            const req: GetCriteriaRequest = {
                "token": checkLogin,
                "type": user?.type,
            }
            console.log(req);
            dispatch(getCriteriaLstRequest(req))
        }
        setIsShowIntro(false);
        setIsShowCriteria(true);
        setIsShowTest(false);
    }

    return (
        <motion.div className='judgement-main'
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}>
            {
                isShowIntro &&
                <IntroduceMethod
                    tranferFromIntroToCriteria={tranferFromIntroToCriteria}
                />
            }
            {
                criteriaLst && isShowCriteria &&
                // isShowCriteria &&
                <JudgementCriteriaOptions
                    tranferFromCriteriaToTest={tranferFromCriteriaToTest}
                    revertToIntro={revertToIntro}
                    criteriaLst={criteriaLst}
                //Sau nay se truyen them 1 lst Criteria vao day
                />
            }
            {
                // Sau nay se sua isShowTest thanh questionByCriteria != null
                isShowTest && choseCriteria &&
                <TakingTest
                    choseCriteria={choseCriteria}
                    revertToIntro={revertToIntro}
                    revertToCriteria={revertToCriteria}
                    tranferFromTestToMoreTests={tranferFromTestToMoreTests}
                    numberOfQuestion={numberOfQuestion}
                //Sau nay se truyen 1 lst questionByCriteriaLst vao nua
                />
            }
            {
                isShowMoreTest &&
                <MoreTest
                    tranferFromMoreTestToTests={tranferFromMoreTestToTests}
                />
            }
        </motion.div>
    )
}

export default JudgementMain