import { Button } from 'antd'
import Pagination from '@mui/material/Pagination';
import "../../App.scss";

import React, { Children, useRef, useState } from 'react'
import Chart from "chart.js";
import './styles.judgement.scss'
import ResultImage from '../../images/result-image.png';
import { ISetOfQuestions } from '../../common/u-innovate/define-setOfQuestions';

interface MyProps{
    receivedResult: any;
    quantityOfEachTypeOfAnswer: number[],
    doneQuestionLst: ISetOfQuestions[];
    revertToCriteria: () => void;
    setReceivedResult: React.Dispatch<any>;
}



const Result = (props: MyProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const Child = React.memo(props => {
        console.log("rendered");
        return <React.Fragment></React.Fragment>;
    });


    const chartRef = useRef<Chart | null>(null);
    console.log(props.quantityOfEachTypeOfAnswer[0],props.quantityOfEachTypeOfAnswer[1],props.quantityOfEachTypeOfAnswer[2])
    // callback creates the chart on the canvas element
    const canvasCallback = (canvas: HTMLCanvasElement | null) => {
        if (!canvas) return;
        chartRef.current = new Chart(canvas,
            {
                type: 'doughnut',
                data: {
                    labels: ["Quan sát được hoàn toàn", "Quan sát được một phần", "Không quan sát thấy"], //Thay bang cac nhan rac 
                    datasets: [
                        {
                            label: "Population (millions)",
                            backgroundColor: ["#FB9400", "#9610FF","#FF4D67"], 
                            data: [props.quantityOfEachTypeOfAnswer[0],props.quantityOfEachTypeOfAnswer[1],props.quantityOfEachTypeOfAnswer[2]] //So luong rac hien tai. Truyen array tu data goi ve vao day

                            // data: [7,7,3] //So luong rac hien tai. Truyen array tu data goi ve vao day
                        }
                    ]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Tỷ lệ mỗi loại câu trả lời'
                    }
                }
            }
        );
          
    };

    const handleChange = (event: any, value: any) => {
        setCurrentIndex(value - 1);

    };
    
    console.log('jejeje')
    return (
        <div>
            <div className='turn-back-btn'>
                <Button className='text' onClick={()=> {
                    props.setReceivedResult(undefined)
                    props.revertToCriteria()

                }}>{`< Quay lại`}</Button>
            </div>
            <div className='total'>
                <div style={{marginTop: 35}}>
                    <div style={{fontWeight: 700, fontSize: 40, marginBottom: 12}}>Kết quả đánh giá của bạn: {props.receivedResult.total} điểm</div>
                    {/* <div>Lorem ipsum dolor sit amet consectetur. Ut amet a amet lacinia etiam integer urna pharetra. Malesuada tristique volutpat semper pharetra mauris dis.</div> */}
                    <div className='detail-total'>
                            {/* <Child> */}
                                <canvas style={{width: 792}} ref={canvasCallback}></canvas>

                            {/* </Child> */}
                        {/* <div className='chart-of-result'>
                            {props.receivedResult.total}
                        </div>
                        <div>
                            <div>Quan sát được hoàn toàn</div>
                            <div>Quan sát được một phần</div>
                            <div>Không quan sát thấy</div>

                        </div> */}
                    </div>
                </div>
                <div className='result-image'>
                    <img src={ResultImage}/>
                </div>
            </div>
            <div className='taking-test-area'>
                {/* Khi call API se thay doan duoi nay thanh currentSetOfQuestion.content */}
                <div className='sub-title'>{props.doneQuestionLst[currentIndex].content}</div>

                <div className='question-lst'>
                    {
                        props.doneQuestionLst[currentIndex].questionLst.map((item) => ( // Sau nay se thay bang useState currentSetOfQuestion
                            <div>
                                <div className='content'>{item.content}</div>
                                <div className='options-of-answer'>
                                    {
                                        item.answerLst.map((subitem) => (
                                            <label className='lst-item'
                                                onClick={() => {
                                                    // item.pickedAnswer = subitem
                                                    // setCurrentChoseAnswerId(currentChoseAnswerId + 1)
                                                    // console.log(item);
                                                }}
                                            >
                                                <input
                                                    type="radio" className="radio-btn"
                                                    checked={item.pickedAnswer === subitem}
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
                    <Pagination className='pagination' onChange={handleChange} count={props.doneQuestionLst.length} variant="outlined" siblingCount={0} />
                    <div className='button-group'>
                        {/* <Button className='button' onClick={() => setCurrentIndex(currentIndex - 1)}>Quay lại</Button> */}
                        {/* <Button className='button' onClick={() => { handleFinishTest() }}>Hoàn thành</Button> */}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Result