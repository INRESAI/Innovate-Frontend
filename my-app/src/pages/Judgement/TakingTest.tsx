import { ArrowRightOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Modal, notification, Pagination, Radio, Steps } from 'antd';
import { useEffect, useState } from 'react';
import QuestionAPI from '../../api/questions/question.api';
import { ICriteria } from '../../common/u-innovate/define-criteria';
import { IAnswers, IGetAllQuestionsByCriteriaResponse, IQuestion, questions } from '../../common/u-innovate/define-question';
import { ISetOfQuestions } from '../../common/u-innovate/define-setOfQuestions';
import OtherTestIcon from '../../images/other-test-icon.png';

import Result from './Result';
import { motion } from 'framer-motion';
import { useDispatchRoot, useSelectorRoot } from '../../redux/store';
import { postResultsRequest, putResultsRequest, setAllQuestionsIsChosen, setAnswersIsChosen } from '../../redux/controller';
import { Answer, PostResultRequest, PutResultRequest } from '../../common/u-innovate/define-results';

const fakeOtherTestLst = [
    {
        id: "1",
        title: "Lorem ipsum dolor sit amet consectetur. Ut morbi pellentesque vitae imperdiet. ",
        content: "Lorem ipsum dolor sit amet consectetur. Sit lorem non nullam id aliquam aliquam. Tellus integer porttitor mi blandit lobortis diam integer cursus. At id porttitor arcu eu cursus est. Arcu convallis quis lacus semper enim pretium cras. At nisi turp ..."
    },
    {
        id: "2",
        title: "Lorem ipsum dolor sit amet consectetur. Ut morbi pellentesque vitae imperdiet. ",
        content: "Lorem ipsum dolor sit amet consectetur. Sit lorem non nullam id aliquam aliquam. Tellus integer porttitor mi blandit lobortis diam integer cursus. At id porttitor arcu eu cursus est. Arcu convallis quis lacus semper enim pretium cras. At nisi turp ..."
    },
    {
        id: "3",
        title: "Lorem ipsum dolor sit amet consectetur. Ut morbi pellentesque vitae imperdiet. ",
        content: "Lorem ipsum dolor sit amet consectetur. Sit lorem non nullam id aliquam aliquam. Tellus integer porttitor mi blandit lobortis diam integer cursus. At id porttitor arcu eu cursus est. Arcu convallis quis lacus semper enim pretium cras. At nisi turp ..."
    },

]
const fakeSetOfQuestions1: IQuestion[] = [
    // {
    //     id: "1",
    //     content: "1.1 Nh?? tr?????ng c?? tuy??n b??? s??? m???nh, t???m nh??n v??? ?????i m???i s??ng t???o v?? kh???i nghi???p",
    //     answerLst: [
    //         {
    //             id: "1",
    //             content: "Quan s??t ???????c ho??n to??n"
    //         },
    //         {
    //             id: "2",
    //             content: "Quan s??t ???????c m???t ph???n"
    //         },
    //         {
    //             id: "3",
    //             content: "Kh??ng quan s??t th???y"
    //         },
    //     ],
    //     pickedAnswer: null
    // },
    // {
    //     id: "2",
    //     content: "1.2 Nh?? tr?????ng c?? chi???n l?????c v??? ?????i m???i s??ng t???o v?? kh???i nghi???p cho to??n tr?????ng",
    //     answerLst: [
    //         {
    //             id: "1",
    //             content: "Quan s??t ???????c ho??n to??n"
    //         },
    //         {
    //             id: "2",
    //             content: "Quan s??t ???????c m???t ph???n"
    //         },
    //         {
    //             id: "3",
    //             content: "Kh??ng quan s??t th???y"
    //         },
    //     ],
    //     pickedAnswer: null
    // },
    // {
    //     id: "3",
    //     content: "1.3 To??n b??? c??n b???, nh??n vi??n, ng?????i h???c ???????c truy???n th??ng v?? hi???u r???ng ??MST&KN l?? ??u ti??n h??ng ?????u c???a Nh?? tr?????ng",
    //     answerLst: [
    //         {
    //             id: "1",
    //             content: "Quan s??t ???????c ho??n to??n"
    //         },
    //         {
    //             id: "2",
    //             content: "Quan s??t ???????c m???t ph???n"
    //         },
    //         {
    //             id: "3",
    //             content: "Kh??ng quan s??t th???y"
    //         },
    //     ],
    //     pickedAnswer: null
    // },
    // {
    //     id: "4",
    //     content: "1.4 L??? tr??nh chi???n l?????c v??? ??MST&KN c???a Nh?? tr?????ng ???????c ?????nh d???ng ????n gi???n, v?? ???????c truy???n th??ng r???ng r??i trong to??n b??? Nh?? tr?????ng",
    //     answerLst: [
    //         {
    //             id: "1",
    //             content: "Quan s??t ???????c ho??n to??n"
    //         },
    //         {
    //             id: "2",
    //             content: "Quan s??t ???????c m???t ph???n"
    //         },
    //         {
    //             id: "3",
    //             content: "Kh??ng quan s??t th???y"
    //         },
    //     ],
    //     pickedAnswer: null
    // },
    // {
    //     id: "5",
    //     content: "1.5 V??n b???n chi???n l?????c v??? ??MST&KN c?? ????? c???p ?????n vi???c th?????ng xuy??n xem x??t, ????nh gi??, c???p nh???t cho ph?? h???p",
    //     answerLst: [
    //         {
    //             id: "1",
    //             content: "Quan s??t ???????c ho??n to??n"
    //         },
    //         {
    //             id: "2",
    //             content: "Quan s??t ???????c m???t ph???n"
    //         },
    //         {
    //             id: "3",
    //             content: "Kh??ng quan s??t th???y"
    //         },
    //     ],
    //     pickedAnswer: null
    // },

]

const fakeSetOfQuestions2: IQuestion[] = [
    // {
    //     id: "6",
    //     content: "4.1 Nh?? tr?????ng t??ch c???c tham gia v??o vi???c ph??t tri???n v?? th???c hi???n c??c chi???n l?????c ??MST&KN c???a ?????a ph????ng, khu v???c v?? / ho???c qu???c gia",
    //     answerLst: [
    //         {
    //             id: "1",
    //             content: "Quan s??t ???????c ho??n to??n"
    //         },
    //         {
    //             id: "2",
    //             content: "Quan s??t ???????c m???t ph???n"
    //         },
    //         {
    //             id: "3",
    //             content: "Kh??ng quan s??t th???y"
    //         },
    //     ],
    //     pickedAnswer: null
    // },
    // {
    //     id: "7",
    //     content: "4.2 Nh?? tr?????ng cho ph??p c???ng ?????ng ?????a ph????ng ???????c ti???p c???n, s??? d???ng c?? s??? v???t ch???t c???a Nh?? tr?????ng",
    //     answerLst: [
    //         {
    //             id: "1",
    //             content: "Quan s??t ???????c ho??n to??n"
    //         },
    //         {
    //             id: "2",
    //             content: "Quan s??t ???????c m???t ph???n"
    //         },
    //         {
    //             id: "3",
    //             content: "Kh??ng quan s??t th???y"
    //         },
    //     ],
    //     pickedAnswer: null
    // },
    // {
    //     id: "8",
    //     content: "4.3 Nh?? tr?????ng h??? tr??? c??c c??ng ty kh???i nghi???p t???i ?????a ph????ng ????? t??ng c?????ng ?????i m???i v?? t??ng tr?????ng",
    //     answerLst: [
    //         {
    //             id: "1",
    //             content: "Quan s??t ???????c ho??n to??n"
    //         },
    //         {
    //             id: "2",
    //             content: "Quan s??t ???????c m???t ph???n"
    //         },
    //         {
    //             id: "3",
    //             content: "Kh??ng quan s??t th???y"
    //         },
    //     ],
    //     pickedAnswer: null
    // },
    // {
    //     id: "9",
    //     content: "4.4 Nh?? tr?????ng c?? s??? hi???n di???n m???nh m??? trong c???ng ?????ng ?????a ph????ng, b???ng c??ch h??? tr??? c??c ho???t ?????ng v??n h??a v?? ngh??? thu???t ?????a ph????ng",
    //     answerLst: [
    //         {
    //             id: "1",
    //             content: "Quan s??t ???????c ho??n to??n"
    //         },
    //         {
    //             id: "2",
    //             content: "Quan s??t ???????c m???t ph???n"
    //         },
    //         {
    //             id: "3",
    //             content: "Kh??ng quan s??t th???y"
    //         },
    //     ],
    //     pickedAnswer: null
    // },


]

const fakeSetOfQuestionsLst: ISetOfQuestions[] = [
    {
        id: '1',
        content: "4.1 Nh?? tr?????ng t??ch c???c tham gia v??o vi???c ph??t tri???n v?? th???c hi???n c??c chi???n l?????c ??MST&KN c???a ?????a ph????ng, khu v???c v?? / ho???c qu???c gia",
        questionLst: fakeSetOfQuestions1
    },
    {
        id: '2',
        content: "4.1 Nh?? tr?????ng t??ch c???c tham gia v??o vi???c ph??t tri???n v?? th???c hi???n c??c chi???n l?????c ??MST&KN c???a ?????a ph????ng, khu v???c v?? / ho???c qu???c gia",
        questionLst: fakeSetOfQuestions2
    },
    {
        id: '3',
        content: "4.1 Nh?? tr?????ng t??ch c???c tham gia v??o vi???c ph??t tri???n v?? th???c hi???n c??c chi???n l?????c ??MST&KN c???a ?????a ph????ng, khu v???c v?? / ho???c qu???c gia",
        questionLst: []
    },
    {
        id: '4',
        content: "4.1 Nh?? tr?????ng t??ch c???c tham gia v??o vi???c ph??t tri???n v?? th???c hi???n c??c chi???n l?????c ??MST&KN c???a ?????a ph????ng, khu v???c v?? / ho???c qu???c gia",
        questionLst: []
    },
    {
        id: '5',
        content: "4.1 Nh?? tr?????ng t??ch c???c tham gia v??o vi???c ph??t tri???n v?? th???c hi???n c??c chi???n l?????c ??MST&KN c???a ?????a ph????ng, khu v???c v?? / ho???c qu???c gia",
        questionLst: []
    },
    {
        id: '6',
        content: "4.1 Nh?? tr?????ng t??ch c???c tham gia v??o vi???c ph??t tri???n v?? th???c hi???n c??c chi???n l?????c ??MST&KN c???a ?????a ph????ng, khu v???c v?? / ho???c qu???c gia",
        questionLst: []
    },
    {
        id: '7',
        content: "4.1 Nh?? tr?????ng t??ch c???c tham gia v??o vi???c ph??t tri???n v?? th???c hi???n c??c chi???n l?????c ??MST&KN c???a ?????a ph????ng, khu v???c v?? / ho???c qu???c gia",
        questionLst: []
    },
    {
        id: '8',
        content: "4.1 Nh?? tr?????ng t??ch c???c tham gia v??o vi???c ph??t tri???n v?? th???c hi???n c??c chi???n l?????c ??MST&KN c???a ?????a ph????ng, khu v???c v?? / ho???c qu???c gia",
        questionLst: []
    },
    {
        id: '9',
        content: "4.1 Nh?? tr?????ng t??ch c???c tham gia v??o vi???c ph??t tri???n v?? th???c hi???n c??c chi???n l?????c ??MST&KN c???a ?????a ph????ng, khu v???c v?? / ho???c qu???c gia",
        questionLst: []
    },

]
interface MyProps {
    revertToIntro: () => void; // Chuyen qua lai giua cac phan cua danh gia
    revertToCriteria: () => void
    tranferFromTestToMoreTests: () => void;
    choseCriteria: any;
    numberOfQuestion: number;
}

const TakingTest = (props: MyProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSetOfQuestion, setCurrentSetOfQuestion] = useState<ISetOfQuestions>(); // Set lai moi khi chon phan pagination
    const [currentChoseAnswerId, setCurrentChoseAnswerId] = useState<number>(0);
    const [receivedResult, setReceivedResult] = useState<boolean>(false);
    let questionLstOfRequestBody: any[] = []; // doi lai form cua questionLst cho phu hop voi bodyRequest cua API
    let quantityOfEachTypeOfAnswer: number[] = [0, 0, 0]; // Lst luu lai so luong cau tra loi moi loai, vi tri 0 luu cau tra loi "quan sat hoan toan", 1 la "quan sat duoc 1 phan", 2 la "khong quan sat duoc"    const [numberOfQuestionsAnswered, setNumberOfQuestionsAnswered] = useState<number>(0); // Ki???m tra xem ???? ??i???n h???t ????p ??n c???a trang ????? hi???n th??? n??t ti???p tuc
    const [numberOfQuestions, setNumberOfQuestions] = useState<number>(0);
    const [quantityOfEachTypeOfAnswerUseState, setquantityOfEachTypeOfAnswerUseState] = useState<number[]>([0, 0, 0]);
    const [numberOfQuestionsAnswered, setNumberOfQuestionsAnswered] = useState<number>(0); // Ki???m tra xem ???? ??i???n h???t ????p ??n c???a trang ????? hi???n th??? n??t ti???p tuc
    const [totalScoreOfQuestionList, setTotalScoreOfQuestionList] = useState<number>(0); // T???ng s??? ??i???m c???a danh s??ch c??u h???i
    const [checkNextBtn, setCheckNextBtn] = useState<boolean>(false); // Ki???m tra xem ???? ??i???n h???t ????p ??n c???a trang ????? hi???n th??? n??t ti???p tuc
    const { lstQuestionsByCriteria, criteriaLst, tmplstQuestionsByCriteria } = useSelectorRoot((state) => state.uinnovate);

    const [countAnswer, setCoundAnswer] = useState<number>(0);
    const [userType, setUserType] = useState<string>('');

    const [isOpenSaveModal, setIsOpenSaveModal] = useState<boolean>(false);

    const dispatch = useDispatchRoot()


    useEffect(() => {
        let type = localStorage.getItem('userType') ? localStorage.getItem('userType') : '';
        if (type) {
            type = type.slice(1);
            type = type.slice(0, type.length - 1);
            setUserType(type);
        }
    }, [])

    // useEffect(() => {
    // }, [tmplstQuestionsByCriteria])

    useEffect(() => {
        countQuestionIsAnswered();
        checkIsPartOfQuestionIsAnswered();
    }, [currentChoseAnswerId])

    useEffect(() => {
        checkIsPartOfQuestionIsAnswered();
    }, [currentIndex])


    // ?????m s??? l?????ng c??u h???i ???? ???????c tr??? l???i 
    const countQuestionIsAnswered = () => {
        // let tmp:  = tmplstQuestionsByCriteria;

        let n = tmplstQuestionsByCriteria.length;
        let numberAnswered = 0;
        // tmplstQuestionsByCriteria[currentIndex].questions.map((item, indexitem) => ( // Sau nay se thay bang useState currentSetOfQuestion

        for (let i = 0; i < n; i++) {
            tmplstQuestionsByCriteria[i].questions.forEach(question => {
                question.answers.forEach(answer => {
                    if (answer.isChosen) numberAnswered += 1;
                })
            })
        }

        setNumberOfQuestionsAnswered(numberAnswered);
    }

    // Ki???m tra xem t???ng trang c???a danh s??ch c??u h???i ???? ???????c tr??? l???i h???t ch??a
    const checkIsPartOfQuestionIsAnswered = () => {
        let n = tmplstQuestionsByCriteria.length;
        for (let i = 0; i < n; i++) {
            if (i === currentIndex) {
                tmplstQuestionsByCriteria[i].questions.forEach(question => {
                    question.answers.forEach(answer => {
                        if (!answer.isChosen) {
                            setCheckNextBtn(false);
                        }
                    })
                })
            }
        }

        tmplstQuestionsByCriteria.length === currentIndex + 1 ? setCheckNextBtn(false) : setCheckNextBtn(true);
    }

    const checkWhetherDoneTest = () => { // Check xem nguoi dung da nhap het cau tra loi chua
        if (numberOfQuestionsAnswered === props.numberOfQuestion)
            return true;
        return false;
    }

    // const handleChangePagination = () => {
    //     setCurrentIndex(currentIndex + 1);
    //     setCheckNextBtn(false);
    // };
    // const handleBackPagination = () => {
    //     setCurrentIndex(currentIndex - 1);
    //     setCheckNextBtn(true);
    // }

    const handlePageChange = (page: number) => {
        setCurrentIndex(page - 1);
    };

    const handleFinishTest = async () => { // Neu da nhap het cau tra loi thi se call API tinh toan diem 
        console.log(tmplstQuestionsByCriteria);
        showSaveModal();

    }
    const onHandleClickAnswer = (indexitem: number, index: number) => {
        const req = {
            currentIndex: currentIndex,
            indexitem: indexitem,
            index: index,
        }
        setCurrentChoseAnswerId(currentChoseAnswerId + 1);
        dispatch(setAnswersIsChosen(req));
    }

    const showSaveModal = () => {
        setIsOpenSaveModal(true);
    };

    const handleOkSaveModal = () => {
        let answerLst: Answer[] = [];
        tmplstQuestionsByCriteria.map((item, index) => {
            item.questions.map((question, index) => {
                question.answers.map((answer, index) => {
                    if (answer.isChosen) {
                        answerLst.push({
                            questionId: answer.questionId,
                            answerId: answer.id,
                            point: answer.point,
                            additionalProp1: {}
                        })
                    }
                })
            })
        });
        console.log(answerLst);

        const req: PostResultRequest = {
            criteriaId: props.choseCriteria.criteriaId,
            listAnswer: answerLst,
            additionalProp1: {}
        }
        props.choseCriteria.isAnswered ? dispatch(putResultsRequest(req)) : dispatch(postResultsRequest(req));
        props.revertToCriteria();
        setIsOpenSaveModal(false);
    };

    const handleCancelSaveModal = () => {
        setIsOpenSaveModal(false);
    };

    const onClickBackBread = () => {
        showSaveModal();
        // props.revertToCriteria()
    }
    return (
        <div className='taking-test'>
            {/* {
                receivedResult && quantityOfEachTypeOfAnswerUseState &&
                <Result
                    receivedResult={receivedResult}
                    quantityOfEachTypeOfAnswer={quantityOfEachTypeOfAnswerUseState}
                    doneQuestionLst={props.questionLst}
                    revertToCriteria={props.revertToCriteria}
                    setReceivedResult={setReceivedResult}
                    totalScoreOfQuestionList={totalScoreOfQuestionList}
                    numberOfQuestionList={props.numberOfQuestions}
                />
            } */}
            {
                !receivedResult &&
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <a onClick={() => onClickBackBread()}>????nh gi??</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a onClick={() => onClickBackBread()}>B???t ?????u ????nh gi??</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item className='present-link'>
                            {props.choseCriteria.name}
                        </Breadcrumb.Item>

                    </Breadcrumb>
                    <div className='test-body'>
                        <div className='test-detail'>
                            <div className='title'>{props.choseCriteria.name}</div>
                            <div className='text'>{props.choseCriteria.description}</div>
                            <div className='test-content'>
                                {tmplstQuestionsByCriteria[currentIndex] &&
                                    <div className='taking-test-area'>
                                        {/* Khi call API se thay doan duoi nay thanh currentSetOfQuestion.content */}
                                        <div className='sub-title'>{tmplstQuestionsByCriteria[currentIndex]?.setOfQuestions.name}:
                                            {userType === 'PINNOVATE' &&
                                                tmplstQuestionsByCriteria[currentIndex]?.setOfQuestions.description
                                            }
                                        </div>

                                        <div className='question-lst' >
                                            {
                                                tmplstQuestionsByCriteria[currentIndex].questions.map((item, indexitem) => ( // Sau nay se thay bang useState currentSetOfQuestion
                                                    <div>
                                                        <div className='content'>{item.question.content}</div>
                                                        <div className='options-of-answer'>
                                                            {

                                                                item.answers.map((subitem, indexsubitem) => (
                                                                    <label className='lst-item'
                                                                        onClick={() => {
                                                                            onHandleClickAnswer(indexitem, indexsubitem)
                                                                        }}
                                                                    >
                                                                        <input
                                                                            type="radio" className="radio-btn"
                                                                            checked={subitem.isChosen === true}
                                                                            value={subitem.id} id={subitem.id} name={subitem.key.toString()}
                                                                        />
                                                                        <div className="label">{subitem.content}</div>
                                                                    </label>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className='footer'>
                                            <Pagination className='pagination' current={currentIndex + 1} total={tmplstQuestionsByCriteria.length * 10} onChange={handlePageChange} showLessItems={true} />
                                            <div className='button-group'>
                                                <div className='number-of-questions-answered'>
                                                    ???? tr??? l???i: {numberOfQuestionsAnswered}/{props.numberOfQuestion}
                                                </div>
                                                {/* {currentIndex > 0 &&
                                                    <motion.div className='taking-test-button'
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}>
                                                        <Button className='button' onClick={() => { handleBackPagination() }}>Quay l???i</Button>
                                                    </motion.div>
                                                }
                                                {checkNextBtn &&
                                                    <motion.div className='taking-test-button'
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}>
                                                        <Button className='button' onClick={() => { handleChangePagination() }}>Ti???p t???c</Button>
                                                    </motion.div>
                                                } */}
                                                {
                                                    (checkWhetherDoneTest()) &&
                                                    <motion.div className='taking-test-button'
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}>
                                                        <Button
                                                            className='button'
                                                            onClick={() => { handleFinishTest() }}
                                                        >Ho??n th??nh
                                                        </Button>
                                                    </motion.div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div className="note-taking-test">
                                    <div className="note-title">H?????NG D???N TH???C HI???N B??I ????NH GI??</div>
                                    {/* <div className="note-content">Lorem ipsum dolor sit amet consectetur. Quisque quis ut sed sed ultrices facilisi. Mi in malesuada erat ac bibendum eget tristique. Tristique quam nunc dolor tempus varius fusce. Lacus tincidunt tellus nec sit. Nibh tincidunt integer varius tempus elit velit imperdiet a. Pellentesque sociis egestas sed nunc ultrices elementum id dui. Aliquam in sed tristique suspendisse sit. Nulla consectetur pharetra viverra magna. Lacus malesuada hendrerit feugiat sit proin massa at. Volutpat ultricies placerat sapien gravida sed risus vitae.</div> */}
                                    {/* <div className="note-content">Placerat eget nisl dictum augue vitae et massa. Viverra a maecenas id amet eget cras egestas velit. Etiam scelerisque eleifend cras in sed est diam ultrices. Quam aliquam dictum purus tincidunt id viverra netus faucibus. Vestibulum aliquam enim ac mauris nulla diam mi faucibus. Elit ornare at erat integer mus euismod blandit tellus. Semper dui varius aliquet tristique lorem accumsan eget. Turpis cras tincidunt pharetra sit dui massa eleifend malesuada. Odio enim odio morbi in.</div> */}
                                    <div className="note-content">
                                        L??u ??:
                                        <ul>
                                            <li>L???a ch???n ????p ??n theo ph???n x??? nhanh v?? t??? nhi??n nh???t ?????i v???i b???n th??n m??nh.</li>
                                            <li>Kh??ng c??? g???ng l???a ch???n ????p ??n v?? mu???n x??y d???ng m???t h??nh ???nh ho??n h???o n??o ????.</li>
                                        </ul>
                                    </div>
                                    {userType === 'UINNOVATE' &&
                                        <div className="note-content">
                                            Quy t???c t??nh ??i???m:
                                            <ul>
                                                <li>Ch??a ??p d???ng - 1 ??i???m</li>
                                                <li>Quan s??t ???????c m???t ph???n - 2 ??i???m</li>
                                                <li>Quan s??t ???????c ho??n to??n - 3 ??i???m</li>
                                            </ul>
                                        </div>
                                    }
                                    {userType === 'PINNOVATE' &&
                                        <></>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <Modal
                className='taking-test-save-modal'
                title="L??u thay ?????i"
                visible={isOpenSaveModal}
                onOk={handleOkSaveModal}
                onCancel={handleCancelSaveModal}
                footer={[
                    <motion.div
                        whileHover={{ scale: 1.1, opacity: 0.75 }}
                        whileTap={{ scale: 0.95 }}>
                        <Button className='btn-back-test' key="back" onClick={handleCancelSaveModal}>
                            Quay l???i
                        </Button>
                    </motion.div>,
                    <motion.div
                        whileHover={{ scale: 1.1, opacity: 0.75 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button className='btn-save-test' key="submit" type="primary" onClick={handleOkSaveModal}>
                            X??c nh???n
                        </Button>
                    </motion.div>
                ]}
            >
                <div className="title">
                    B???n c?? mu???n l??u thay ?????i ?
                </div>
                <div className="body">
                    Khi l??u thay ?????i, b???n s??? ???????c chuy???n ?????n trang b???t ?????u ????nh gi?? v?? ti???p t???c ????nh gi??
                </div>
            </Modal>
        </div>
    )
}

export default TakingTest