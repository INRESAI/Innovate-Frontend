import { Breadcrumb, Button, Checkbox, notification } from 'antd';
import React, { useState } from 'react'
import { IQuestion } from '../../common/u-innovate/define-question';
import { ISetOfQuestions } from '../../common/u-innovate/define-setOfQuestions';
import OtherTestIcon from '../../images/other-test-icon.png'
import "../../App.scss";

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

const fakeSetOfQuestionsLst: ISetOfQuestions[] = [
    {
        id: '1',
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        questionLst: []
    },
    {
        id: '1',
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        questionLst: []
    },
    {
        id: '1',
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        questionLst: []
    },
    {
        id: '1',
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        questionLst: []
    },
    {
        id: '1',
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        questionLst: []
    },
    {
        id: '1',
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        questionLst: []
    },
    {
        id: '1',
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        questionLst: []
    },
    {
        id: '1',
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        questionLst: []
    },
    {
        id: '1',
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        questionLst: []
    },

]

const fakeSetOfQuestions: IQuestion[] = [
    {
        id: "1",
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        answerLst: [
            {
                id: "1",
                content: "Quan sát được hoàn toàn"
            },
            {
                id: "2",
                content: "Quan sát được một phần"
            },
            {
                id: "3",
                content: "Không quan sát thấy"
            },
        ],
        pickedAnswer: null
    },
    {
        id: "2",
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        answerLst: [
            {
                id: "1",
                content: "Quan sát được hoàn toàn"
            },
            {
                id: "2",
                content: "Quan sát được một phần"
            },
            {
                id: "3",
                content: "Không quan sát thấy"
            },
        ],
        pickedAnswer: null
    },
    {
        id: "3",
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        answerLst: [
            {
                id: "1",
                content: "Quan sát được hoàn toàn"
            },
            {
                id: "2",
                content: "Quan sát được một phần"
            },
            {
                id: "3",
                content: "Không quan sát thấy"
            },
        ],
        pickedAnswer: null
    },
    {
        id: "4",
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        answerLst: [
            {
                id: "1",
                content: "Quan sát được hoàn toàn"
            },
            {
                id: "2",
                content: "Quan sát được một phần"
            },
            {
                id: "3",
                content: "Không quan sát thấy"
            },
        ],
        pickedAnswer: null
    },
    {
        id: "5",
        content: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        answerLst: [
            {
                id: "1",
                content: "Quan sát được hoàn toàn"
            },
            {
                id: "2",
                content: "Quan sát được một phần"
            },
            {
                id: "3",
                content: "Không quan sát thấy"
            },
        ],
        pickedAnswer: null
    },

]

interface MyProps {
    revertToIntro: () => void; // Chuyen qua lai giua cac phan cua danh gia
    revertToCriteria: () => void
}

const TakingTest = (props: MyProps) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [currentSetOfQuestion, setCurrentSetOfQuestion] = useState<ISetOfQuestions>(); // Set lai moi khi chon phan pagination
    const [currentChoseAnswerId,setCurrentChoseAnswerId] = useState<string>("");




    const tranferTpAnotherSetOfQuestion = (index: number) => {
        setCurrentIndex(index);
        // setCurrentSetOfQuestion()
    }

    const checkWhetherUserDoneTest = () => { // Check xem nguoi dung da nhap het cau tra loi chua
        fakeSetOfQuestionsLst.forEach((item) => {
            item.questionLst.forEach((subitem) => {
                if (subitem.pickedAnswer === null) {
                    return false
                }
            })
        })

        return true
    }

    const handleFinishTest = () => { // Neu da nhap het cau tra loi thi se call API tinh toan diem 
        if (checkWhetherUserDoneTest()) {
            //Call API
        } else {
            notification.open({
                message: 'Bạn vui lòng hoàn thành toàn bộ các câu hỏi!',
                type: "error",
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
            return
        }
    }

    return (
        <div className='taking-test'>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <a onClick={() => props.revertToIntro()}>Đánh giá</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a onClick={() => { props.revertToCriteria() }}>Bắt đầu đánh giá</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item className='present-link'>
                    Lãnh đạo quản trị
                </Breadcrumb.Item>
                {/* <Breadcrumb.Item>
                <a href="">Application List</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item> */}
            </Breadcrumb>
            <div className='test-body'>
                <div className='test-detail'>
                    <div className='title'>Lãnh đạo và quản trị</div>
                    <div className='text'>Bạn có thể đọc về các yếu tố đánh giá của U.innovate và tải xuống ghi chú Khái niệm, cung cấp thông tin cơ bản về U.innovate và khái niệm về các trường đại học khởi nghiệp</div>
                    <div className='taking-test-area'>
                        {/* Khi call API se thay doan duoi nay thanh currentSetOfQuestion.content */}
                        <div className='sub-title'>4. Nhà trường là động lực ĐMST&KN trong phát triển địa phương, xã hội và cộng đồng.</div>

                        <div className='question-lst'>
                            {
                                fakeSetOfQuestions.map((item) => ( // Sau nay se thay bang useState currentSetOfQuestion
                                    <div>
                                        <div className='content'>{item.content}</div>
                                        <div className='options-of-answer'>
                                            {
                                                item.answerLst.map((subitem) => (
                                                    <label className='lst-item'
                                                        onClick={() => {
                                                            item.pickedAnswer = subitem.id
                                                            console.log(fakeSetOfQuestions);
                                                        }}
                                                    >
                                                        <input type="radio" className="radio-btn" name={item.id} id="a-opt" />
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
                            <div className='pagination'>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination pagination-circle pg-blue">

                                        {/* <li className="page-item active"><a className="page-link">1</a></li>
                                        <li className="page-item"><a className="page-link">2</a></li>
                                        <li className="page-item"><a className="page-link">3</a></li>
                                        <li className="page-item"><a className="page-link">4</a></li>
                                        <li className="page-item"><a className="page-link">5</a></li> */}
                                        {
                                            fakeSetOfQuestionsLst.map((item, index) => {
                                                return (
                                                    <li className={`page-item ${index + 1 === currentIndex ? 'active' : ''}`} onClick={() => { tranferTpAnotherSetOfQuestion(index + 1) }}><a className="page-link">{index + 1}</a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </nav>
                            </div>
                            <div className='button-group'>
                                <Button className='button' onClick={() => setCurrentIndex(currentIndex - 1)}>Quay lại</Button>
                                <Button className='button' onClick={() => { handleFinishTest() }}>Hoàn thành</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='other-tests'>
                    {
                        fakeOtherTestLst.map((item) =>
                            <div className='test'>
                                <div>{item.title}</div>
                                <div>{item.content}</div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '15px' }}>
                                    <div>
                                        <img src={OtherTestIcon} />
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <Button className='button'>TẢI VỀ</Button>
                                        <Button className='button'>XEM THÊM</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default TakingTest