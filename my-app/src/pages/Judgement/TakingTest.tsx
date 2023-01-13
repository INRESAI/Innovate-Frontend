import { Breadcrumb, Button, Checkbox } from 'antd';
import React from 'react'
import OtherTestIcon from '../../images/other-test-icon.png'

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

const fakeQuestionLst = [
    {
        id: "1",
        title: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        optionsOfAnswer: [
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
        answer: null
    },
    {
        id: "1",
        title: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        optionsOfAnswer: [
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
        answer: null
    },
    {
        id: "1",
        title: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        optionsOfAnswer: [
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
        answer: null
    },
    {
        id: "1",
        title: "4.1 Nhà trường tích cực tham gia vào việc phát triển và thực hiện các chiến lược ĐMST&KN của địa phương, khu vực và / hoặc quốc gia",
        optionsOfAnswer: [
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
        answer: null
    },
    
]

interface MyProps{
    revertToIntro: () => void;
    revertToCriteria: () => void
}

const TakingTest = (props: MyProps) => {
    return (
        <div className='taking-test'>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <a onClick={()=>props.revertToIntro()}>Đánh giá</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a onClick={() => {props.revertToCriteria()}}>Bắt đầu đánh giá</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
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
                    <div>Bạn có thể đọc về các yếu tố đánh giá của U.innovate và tải xuống ghi chú Khái niệm, cung cấp thông tin cơ bản về U.innovate và khái niệm về các trường đại học khởi nghiệp</div>
                    <div className='taking-test-area'>
                        <div className='sub-title'>4. Nhà trường là động lực ĐMST&KN trong phát triển địa phương, xã hội và cộng đồng.</div>
                        <div className='question-lst'>
                            {
                                fakeQuestionLst.map((item)=> (
                                    <div>
                                        <div>{item.title}</div>
                                        <div className='options-of-answer'>
                                            {
                                                item.optionsOfAnswer.map((subitem)=>(
                                                    <div style={{display:'flex',margin: '30px'}}>
                                                        <Checkbox/>
                                                        <div>{subitem.content}</div>
                                                    </div>
                                                    
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
                                        {/* <li className="page-item disabled"><a className="page-link">First</a></li>
                                        <li className="page-item disabled">
                                        <a className="page-link" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        </li> */}
                                        <li className="page-item active"><a className="page-link">1</a></li>
                                        <li className="page-item"><a className="page-link">2</a></li>
                                        <li className="page-item"><a className="page-link">3</a></li>
                                        <li className="page-item"><a className="page-link">4</a></li>
                                        <li className="page-item"><a className="page-link">5</a></li>
                                        {/* <li className="page-item">
                                        <a className="page-link" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                        </li>
                                        <li className="page-item"><a className="page-link">Last</a></li> */}
                                    </ul>
                                </nav>
                            </div>
                            <div className='button-group'>
                                <Button className='button'>Quay lại</Button>
                                <Button className='button'>Hoàn thành</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='other-tests'>
                    {
                        fakeOtherTestLst.map((item)=>
                            <div className='test'>
                                <div>{item.title}</div>
                                <div>{item.content}</div>
                                <div style={{display: 'flex', justifyContent: 'space-between', margin: '15px'}}>
                                    <div>
                                        <img src={OtherTestIcon}/>
                                    </div>
                                    <div style={{display: 'flex'}}>
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