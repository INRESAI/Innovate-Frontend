import { Breadcrumb, Button, Checkbox, notification } from 'antd';
import React, { useEffect, useState } from 'react'
import { IQuestion } from '../../common/u-innovate/define-question';
import { ISetOfQuestions } from '../../common/u-innovate/define-setOfQuestions';
import OtherTestIcon from '../../images/other-test-icon.png'
import { ArrowRightOutlined } from '@ant-design/icons';
import Pagination from '@mui/material/Pagination';

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
const fakeSetOfQuestions1: IQuestion[] = [
    {
        id: "1",
        content: "1.1 Nhà trường có tuyên bố sứ mệnh, tầm nhìn về đổi mới sáng tạo và khởi nghiệp",
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
        content: "1.2 Nhà trường có chiến lược về đổi mới sáng tạo và khởi nghiệp cho toàn trường",
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
        content: "1.3 Toàn bộ cán bộ, nhân viên, người học được truyền thông và hiểu rằng ĐMST&KN là ưu tiên hàng đầu của Nhà trường",
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
        content: "1.4 Lộ trình chiến lược về ĐMST&KN của Nhà trường được định dạng đơn giản, và được truyền thông rộng rãi trong toàn bộ Nhà trường",
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
        content: "1.5 Văn bản chiến lược về ĐMST&KN có đề cập đến việc thường xuyên xem xét, đánh giá, cập nhật cho phù hợp",
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

const fakeSetOfQuestions2: IQuestion[] = [
    {
        id: "6",
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
        id: "7",
        content: "4.2 Nhà trường cho phép cộng đồng địa phương được tiếp cận, sử dụng cơ sở vật chất của Nhà trường",
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
        id: "8",
        content: "4.3 Nhà trường hỗ trợ các công ty khởi nghiệp tại địa phương để tăng cường đổi mới và tăng trưởng",
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
        id: "9",
        content: "4.4 Nhà trường có sự hiện diện mạnh mẽ trong cộng đồng địa phương, bằng cách hỗ trợ các hoạt động văn hóa và nghệ thuật địa phương",
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
}

const TakingTest = (props: MyProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSetOfQuestion, setCurrentSetOfQuestion] = useState<ISetOfQuestions>(); // Set lai moi khi chon phan pagination
    const [currentChoseAnswerId, setCurrentChoseAnswerId] = useState<number>(0);


    useEffect(() => {
        console.log('----------------RENDERED-------------------')
    }, [])

    useEffect(() => {
        console.log('----------------RENDERED-------------------')

    })
    const handleChange = (event: any, value: any) => {
        setCurrentIndex(value - 1);

    };

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
                                fakeSetOfQuestionsLst[currentIndex].questionLst.map((item) => ( // Sau nay se thay bang useState currentSetOfQuestion
                                    <div>
                                        <div className='content'>{item.content}</div>
                                        <div className='options-of-answer'>
                                            {
                                                item.answerLst.map((subitem) => (
                                                    <label className='lst-item'
                                                        onClick={() => {
                                                            item.pickedAnswer = subitem.id
                                                            setCurrentChoseAnswerId(currentChoseAnswerId + 1)
                                                            console.log(item);
                                                        }}
                                                    >
                                                        <input
                                                            type="radio" className="radio-btn"
                                                            checked={item.pickedAnswer === subitem.id}
                                                            value={subitem.id} id={subitem.id} name={item.id}
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
                            <Pagination className='pagination' onChange={handleChange} count={fakeSetOfQuestionsLst.length} variant="outlined" />
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
                                <div className='title'>{item.title}</div>
                                <div className='content'>{item.content}</div>
                                <div className='btn-and-icon' style={{ display: 'flex', justifyContent: 'space-between', margin: '15px' }}>
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
                    <div className='more-test'>
                        <div className="text">Xem thêm</div>
                        <div className="icon"><ArrowRightOutlined /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TakingTest