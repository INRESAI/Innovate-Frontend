import { ArrowRightOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, notification, Pagination, Steps } from 'antd';
import { useEffect, useState } from 'react';
import QuestionAPI from '../../api/questions/question.api';
import { ICriteria } from '../../common/u-innovate/define-criteria';
import { IAnswers, IGetAllQuestionsByCriteriaResponse, IQuestion, questions } from '../../common/u-innovate/define-question';
import { ISetOfQuestions } from '../../common/u-innovate/define-setOfQuestions';
import OtherTestIcon from '../../images/other-test-icon.png';

import Result from './Result';
import { motion } from 'framer-motion';
import { useDispatchRoot, useSelectorRoot } from '../../redux/store';
import { setAnswersIsChosen } from '../../redux/controller';

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
    //     content: "1.1 Nhà trường có tuyên bố sứ mệnh, tầm nhìn về đổi mới sáng tạo và khởi nghiệp",
    //     answerLst: [
    //         {
    //             id: "1",
    //             content: "Quan sát được hoàn toàn"
    //         },
    //         {
    //             id: "2",
    //             content: "Quan sát được một phần"
    //         },
    //         {
    //             id: "3",
    //             content: "Không quan sát thấy"
    //         },
    //     ],
    //     pickedAnswer: null
    // },
    // {
    //     id: "2",
    //     content: "1.2 Nhà trường có chiến lược về đổi mới sáng tạo và khởi nghiệp cho toàn trường",
    //     answerLst: [
    //         {
    //             id: "1",
    //             content: "Quan sát được hoàn toàn"
    //         },
    //         {
    //             id: "2",
    //             content: "Quan sát được một phần"
    //         },
    //         {
    //             id: "3",
    //             content: "Không quan sát thấy"
    //         },
    //     ],
    //     pickedAnswer: null
    // },
    // {
    //     id: "3",
    //     content: "1.3 Toàn bộ cán bộ, nhân viên, người học được truyền thông và hiểu rằng ĐMST&KN là ưu tiên hàng đầu của Nhà trường",
    //     answerLst: [
    //         {
    //             id: "1",
    //             content: "Quan sát được hoàn toàn"
    //         },
    //         {
    //             id: "2",
    //             content: "Quan sát được một phần"
    //         },
    //         {
    //             id: "3",
    //             content: "Không quan sát thấy"
    //         },
    //     ],
    //     pickedAnswer: null
    // },
    // {
    //     id: "4",
    //     content: "1.4 Lộ trình chiến lược về ĐMST&KN của Nhà trường được định dạng đơn giản, và được truyền thông rộng rãi trong toàn bộ Nhà trường",
    //     answerLst: [
    //         {
    //             id: "1",
    //             content: "Quan sát được hoàn toàn"
    //         },
    //         {
    //             id: "2",
    //             content: "Quan sát được một phần"
    //         },
    //         {
    //             id: "3",
    //             content: "Không quan sát thấy"
    //         },
    //     ],
    //     pickedAnswer: null
    // },
    // {
    //     id: "5",
    //     content: "1.5 Văn bản chiến lược về ĐMST&KN có đề cập đến việc thường xuyên xem xét, đánh giá, cập nhật cho phù hợp",
    //     answerLst: [
    //         {
    //             id: "1",
    //             content: "Quan sát được hoàn toàn"
    //         },
    //         {
    //             id: "2",
    //             content: "Quan sát được một phần"
    //         },
    //         {
    //             id: "3",
    //             content: "Không quan sát thấy"
    //         },
    //     ],
    //     pickedAnswer: null
    // },

]

const fakeSetOfQuestions2: IQuestion[] = [
    // {
    //     id: "6",
    //     content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
    //     answerLst: [
    //         {
    //             id: "1",
    //             content: "Quan sát được hoàn toàn"
    //         },
    //         {
    //             id: "2",
    //             content: "Quan sát được một phần"
    //         },
    //         {
    //             id: "3",
    //             content: "Không quan sát thấy"
    //         },
    //     ],
    //     pickedAnswer: null
    // },
    // {
    //     id: "7",
    //     content: "4.2 Nhà trường cho phép cộng đồng địa phương được tiếp cận, sử dụng cơ sở vật chất của Nhà trường",
    //     answerLst: [
    //         {
    //             id: "1",
    //             content: "Quan sát được hoàn toàn"
    //         },
    //         {
    //             id: "2",
    //             content: "Quan sát được một phần"
    //         },
    //         {
    //             id: "3",
    //             content: "Không quan sát thấy"
    //         },
    //     ],
    //     pickedAnswer: null
    // },
    // {
    //     id: "8",
    //     content: "4.3 Nhà trường hỗ trợ các công ty khởi nghiệp tại địa phương để tăng cường đổi mới và tăng trưởng",
    //     answerLst: [
    //         {
    //             id: "1",
    //             content: "Quan sát được hoàn toàn"
    //         },
    //         {
    //             id: "2",
    //             content: "Quan sát được một phần"
    //         },
    //         {
    //             id: "3",
    //             content: "Không quan sát thấy"
    //         },
    //     ],
    //     pickedAnswer: null
    // },
    // {
    //     id: "9",
    //     content: "4.4 Nhà trường có sự hiện diện mạnh mẽ trong cộng đồng địa phương, bằng cách hỗ trợ các hoạt động văn hóa và nghệ thuật địa phương",
    //     answerLst: [
    //         {
    //             id: "1",
    //             content: "Quan sát được hoàn toàn"
    //         },
    //         {
    //             id: "2",
    //             content: "Quan sát được một phần"
    //         },
    //         {
    //             id: "3",
    //             content: "Không quan sát thấy"
    //         },
    //     ],
    //     pickedAnswer: null
    // },


]

const fakeSetOfQuestionsLst: ISetOfQuestions[] = [
    {
        id: '1',
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        questionLst: fakeSetOfQuestions1
    },
    {
        id: '2',
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        questionLst: fakeSetOfQuestions2
    },
    {
        id: '3',
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        questionLst: []
    },
    {
        id: '4',
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        questionLst: []
    },
    {
        id: '5',
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        questionLst: []
    },
    {
        id: '6',
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        questionLst: []
    },
    {
        id: '7',
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        questionLst: []
    },
    {
        id: '8',
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        questionLst: []
    },
    {
        id: '9',
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
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
    let quantityOfEachTypeOfAnswer: number[] = [0, 0, 0]; // Lst luu lai so luong cau tra loi moi loai, vi tri 0 luu cau tra loi "quan sat hoan toan", 1 la "quan sat duoc 1 phan", 2 la "khong quan sat duoc"    const [numberOfQuestionsAnswered, setNumberOfQuestionsAnswered] = useState<number>(0); // Kiểm tra xem đã điền hết đáp án của trang để hiển thị nút tiếp tuc
    const [numberOfQuestions, setNumberOfQuestions] = useState<number>(0);
    const [quantityOfEachTypeOfAnswerUseState, setquantityOfEachTypeOfAnswerUseState] = useState<number[]>([0, 0, 0]);
    const [numberOfQuestionsAnswered, setNumberOfQuestionsAnswered] = useState<number>(0); // Kiểm tra xem đã điền hết đáp án của trang để hiển thị nút tiếp tuc
    const [totalScoreOfQuestionList, setTotalScoreOfQuestionList] = useState<number>(0); // Tổng số điểm của danh sách câu hỏi
    const [checkNextBtn, setCheckNextBtn] = useState<boolean>(false); // Kiểm tra xem đã điền hết đáp án của trang để hiển thị nút tiếp tuc
    const { lstQuestionsByCriteria, criteriaLst, tmplstQuestionsByCriteria } = useSelectorRoot((state) => state.uinnovate);

    const [countAnswer, setCoundAnswer] = useState<number>(0);
    const [userType, setUserType] = useState<string>('');

    const dispatch = useDispatchRoot()


    useEffect(() => {
        let type = localStorage.getItem('userType') ? localStorage.getItem('userType') : '';
        if (type) {
            type = type.slice(1);
            type = type.slice(0, type.length - 1);
            setUserType(type);
        }
    }, [])

    useEffect(() => {
        console.log(tmplstQuestionsByCriteria);
    }, [tmplstQuestionsByCriteria])

    // useEffect(() => {
    // countQuestionIsAnswered();
    //     checkIsPartOfQuestionIsAnswered();
    // }, [currentChoseAnswerId])

    // useEffect(() => {
    //     checkIsPartOfQuestionIsAnswered();
    // }, [currentIndex])

    // const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    //     setCurrentIndex(value - 1);
    // };
    // // Đếm số lượng câu hỏi đã được trả lời 
    // const countQuestionIsAnswered = () => {
    //     let count = 0;
    // lstQuestionsByCriteria
    //     props.questionLst.forEach(item => {
    //         item.questionLst.forEach(question => {
    //             if (question.pickedAnswer) count += 1;
    //         });
    //     });
    //     setNumberOfQuestionsAnswered(count);
    // }
    // // Kiểm tra xem từng trang của danh sách câu hỏi đã được trả lời hết chưa
    // const checkIsPartOfQuestionIsAnswered = () => {
    //     for (let i = 0; i < props.questionLst[currentIndex].questionLst.length; i++) {
    //         if (!props.questionLst[currentIndex].questionLst[i].pickedAnswer) {
    //             setCheckNextBtn(false);
    //             return;
    //         }
    //     }
    //     props.questionLst.length === currentIndex + 1 ? setCheckNextBtn(false) : setCheckNextBtn(true);
    // }
    // const checkWhetherDoneTest = () => { // Check xem nguoi dung da nhap het cau tra loi chua
    //     let check = 1;
    //     questionLstOfRequestBody = [];
    //     props.questionLst.forEach((item) => {
    //         if (check === 0) return;
    //         item.questionLst.forEach((subitem) => {
    //             if (subitem.pickedAnswer === null) {
    //                 check = 0;
    //                 return;
    //             } else {
    //                 questionLstOfRequestBody.push({ // Neu cau hoi da duoc chon dap an thi se day ID cau hoi va ID cau tra loi vao lst
    //                     "questionId": subitem.id,
    //                     "answerId": subitem.pickedAnswer.id,
    //                     "point": subitem.pickedAnswer.point,
    //                     "additionalProp1": {}
    //                 })
    //             }
    //         })
    //     })
    //     if (check === 1) return true;
    //     else {
    //         questionLstOfRequestBody = [] // Neu chi can 1 cau hoi chua duoc tra loi thi se xoa toan bo lst
    //         return false
    //     };
    // }
    const handleChangePagination = () => {
        setCurrentIndex(currentIndex + 1);
        setCheckNextBtn(false);
    };
    const handleBackPagination = () => {
        setCurrentIndex(currentIndex - 1);
        setCheckNextBtn(true);
    }

    const handlePageChange = (page: number) => {
        setCurrentIndex(page - 1);
    };
    // const handleFinishTest = async () => { // Neu da nhap het cau tra loi thi se call API tinh toan diem 
    //     console.log("---------------Leu leu leu----------------")

    //     if (checkWhetherDoneTest() === true) {
    //         console.log('-----------------Mai la anh em ban nhe------------------')
    //         console.log(props.questionLst)
    //         let count = 0;
    //         // Luu lai so luong cau tra loi moi loai
    //         props.questionLst.forEach((item) => {
    //             count += item.questionLst.length * 5;
    //             item.questionLst.forEach((subitem) => {
    //                 console.log(subitem.pickedAnswer?.id);
    //                 if (subitem.pickedAnswer?.id === "63c4109aa5775a103cdc9de0") { // Quan sat duoc hoan toan
    //                     quantityOfEachTypeOfAnswer[0] += 1
    //                 } else if (subitem.pickedAnswer?.id === "63c410a6a5775a103cdc9de2") { // Quan sat duoc 1 phan
    //                     quantityOfEachTypeOfAnswer[1] += 1
    //                 } else {
    //                     quantityOfEachTypeOfAnswer[2] += 1 // KHong quan sat duoc
    //                 }
    //             })
    //         })

    //         console.log(quantityOfEachTypeOfAnswer)
    //         setquantityOfEachTypeOfAnswerUseState(quantityOfEachTypeOfAnswer)
    //         setTotalScoreOfQuestionList(count);
    //         //Call API tinh diem

    //         await QuestionAPI.caculateResult(questionLstOfRequestBody).then(res => {
    //             console.log(res.data.data);
    //             setReceivedResult(res.data.data);
    //         })
    //     }
    // }
    const onHandleClickAnswer = (indexitem: number, index: number) => {
        const req = {
            currentIndex: currentIndex,
            indexitem: indexitem,
            index: index,
        }
        dispatch(setAnswersIsChosen(req));
    }

    // const getname = (i: number) => {
    //     // console.log(i, j, n);
    //     let val = countAnswer;
    //     val += i;
    //     setCoundAnswer(val);
    //     return val.toString();
    // }
    return (
        // <></>
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
                            <a onClick={() => props.revertToIntro()}>Đánh giá</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a onClick={() => { props.revertToCriteria() }}>Bắt đầu đánh giá</a>
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
                                        <div className='sub-title'>{tmplstQuestionsByCriteria[currentIndex]?.setOfQuestions.name}</div>

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
                                                                            defaultChecked={subitem.isChosen === true}
                                                                            value={subitem.id} id={subitem.id} name={indexitem.toString()}
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
                                                    Đã trả lời: {numberOfQuestionsAnswered}/{props.numberOfQuestion}
                                                </div>
                                                {currentIndex > 0 &&
                                                    <motion.div className='taking-test-button'
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}>
                                                        <Button className='button' onClick={() => { handleBackPagination() }}>Quay lại</Button>
                                                    </motion.div>
                                                }
                                                {checkNextBtn &&
                                                    <motion.div className='taking-test-button'
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}>
                                                        <Button className='button' onClick={() => { handleChangePagination() }}>Tiếp tục</Button>
                                                    </motion.div>
                                                }
                                                {
                                                    // (props.questionLst.length === currentIndex + 1 && checkWhetherDoneTest()) &&
                                                    // <motion.div className='taking-test-button'
                                                    //     whileHover={{ scale: 1.1 }}
                                                    //     whileTap={{ scale: 0.95 }}>
                                                    //     <Button className='button' onClick={() => { handleFinishTest() }}>Hoàn thành</Button>
                                                    // </motion.div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div className="note-taking-test">
                                    <div className="note-title">HƯỚNG DẪN THỰC HIỆN BÀI ĐÁNH GIÁ</div>
                                    <div className="note-content">Lorem ipsum dolor sit amet consectetur. Quisque quis ut sed sed ultrices facilisi. Mi in malesuada erat ac bibendum eget tristique. Tristique quam nunc dolor tempus varius fusce. Lacus tincidunt tellus nec sit. Nibh tincidunt integer varius tempus elit velit imperdiet a. Pellentesque sociis egestas sed nunc ultrices elementum id dui. Aliquam in sed tristique suspendisse sit. Nulla consectetur pharetra viverra magna. Lacus malesuada hendrerit feugiat sit proin massa at. Volutpat ultricies placerat sapien gravida sed risus vitae.</div>
                                    <div className="note-content">Placerat eget nisl dictum augue vitae et massa. Viverra a maecenas id amet eget cras egestas velit. Etiam scelerisque eleifend cras in sed est diam ultrices. Quam aliquam dictum purus tincidunt id viverra netus faucibus. Vestibulum aliquam enim ac mauris nulla diam mi faucibus. Elit ornare at erat integer mus euismod blandit tellus. Semper dui varius aliquet tristique lorem accumsan eget. Turpis cras tincidunt pharetra sit dui massa eleifend malesuada. Odio enim odio morbi in.</div>
                                    <div className="note-content">
                                        Lưu ý:
                                        <ul>
                                            <li>Lựa chọn đáp án theo phản xạ nhanh và tự nhiên nhất đối với bản thân mình.</li>
                                            <li>Không cố gắng lựa chọn đáp án vì muốn xây dựng một hình ảnh hoàn hảo nào đó.</li>
                                        </ul>
                                    </div>
                                    {userType === 'UINNOVATE' &&
                                        <div className="note-content">
                                            Quy tắc tính điểm:
                                            <ul>
                                                <li>Chưa áp dụng - 1 điểm</li>
                                                <li>Quan sát được một phần - 2 điểm</li>
                                                <li>Quan sát được hoàn toàn - 3 điểm</li>
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
        </div>
    )
}

export default TakingTest