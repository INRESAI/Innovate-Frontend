import Pagination from '@mui/material/Pagination';
import "../../App.scss";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { ChartDonut, ChartThemeColor } from '@patternfly/react-charts';
import Chart from "chart.js";
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { ISetOfQuestions } from '../../common/u-innovate/define-setOfQuestions';
import ResultImage from '../../images/result-image.png';
import './styles.judgement.scss';

interface MyProps {
    receivedResult: any;
    quantityOfEachTypeOfAnswer: number[];
    doneQuestionLst: ISetOfQuestions[];
    totalScoreOfQuestionList: number;
    revertToCriteria: () => void;
    setReceivedResult: React.Dispatch<any>;
}

const Result = (props: MyProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {

    })
    const chartRef = useRef<Chart | null>(null);
    console.log(props.quantityOfEachTypeOfAnswer[0], props.quantityOfEachTypeOfAnswer[1], props.quantityOfEachTypeOfAnswer[2])
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
                            backgroundColor: ["#FB9400", "#9610FF", "#FF4D67"],
                            data: [props.quantityOfEachTypeOfAnswer[0], props.quantityOfEachTypeOfAnswer[1], props.quantityOfEachTypeOfAnswer[2]], //So luong rac hien tai. Truyen array tu data goi ve vao day
                            borderWidth: 4,
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

    return (
        <div className='result-answer'>
            <div className='turn-back-btn' >
                <motion.div
                    className='back-button'
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    onClick={() => {
                        props.setReceivedResult(undefined)
                        props.revertToCriteria()
                    }}

                >
                    <div className="icon"><ArrowLeftOutlined /></div>
                    <div className="text">Quay lại</div>
                </motion.div>
            </div>
            <div className='total-score'>
                <div className='total-score-left'>
                    <div className='title' >Kết quả đánh giá của bạn!</div>
                    <div className='sub-title'>Lorem ipsum dolor sit amet consectetur. Ut amet a amet lacinia etiam integer urna pharetra. Malesuada tristique volutpat semper pharetra mauris dis.</div>
                    <div className='detail-total'>
                        {/* <Child> */}
                        <ChartDonut
                            constrainToVisibleArea={true}
                            data={[{ x: 'Quan sát được hoàn toàn', y: props.quantityOfEachTypeOfAnswer[0] }, { x: 'Quan sát được một phần', y: props.quantityOfEachTypeOfAnswer[1] }, { x: 'Không quan sát thấy', y: props.quantityOfEachTypeOfAnswer[2] }]}
                            // labels={({ datum }) => `${datum.x}: ${datum.y}%`}
                            legendData={[{ name: `Quan sát được hoàn toàn: ${props.quantityOfEachTypeOfAnswer[0]} câu` }, { name: `Quan sát được một phần: ${props.quantityOfEachTypeOfAnswer[1]} câu` }, { name: `Không quan sát thấy: ${props.quantityOfEachTypeOfAnswer[2]} câu` }]}
                            legendOrientation="vertical"
                            legendPosition="right"
                            padding={{
                                bottom: 20,
                                left: 20,
                                right: 260, // Adjusted to accommodate legend
                                top: 20
                            }}
                            subTitle={`Tổng ${props.totalScoreOfQuestionList} điểm`}
                            title={props.receivedResult.total}
                            themeColor={ChartThemeColor.multiUnordered}
                            width={400}
                        />
                        {/* <canvas className='chart-score' ref={canvasCallback}></canvas> */}
                        {/* <div className='score-out-of-total-score'>
                            <div className='score'>{props.receivedResult.total}</div>
                            <div className='total-score-of-test'>Tổng {props.totalScoreOfQuestionList} điểm</div>
                        </div> */}
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
                <div className='total-score-right'>
                    <img src={ResultImage} alt='' />
                </div>
            </div>
            <div className='title-view-test'>
                <div className='title'>Xem lại phần trả lời</div>
                <div className='content'>Lorem ipsum dolor sit amet consectetur. Ut amet a amet lacinia etiam integer urna pharetra. Malesuada tristique volutpat semper pharetra mauris dis.</div>
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
                                                style={{ pointerEvents: "none" }}
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
                </div>
            </div>
        </div>
    )
}

export default Result