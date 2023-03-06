import { Avatar, Breadcrumb, Button, Card, List, Progress } from 'antd'
import React, { useEffect, useState } from 'react'
import { ICriteria } from '../../common/u-innovate/define-criteria'
// import Criteria1 from '../../images/criteria1.png'
// import Criteria2 from '../../images/criteria2.png'
// import Criteria3 from '../../images/criteria3.png'
// import Criteria4 from '../../images/criteria4.png'
// import Criteria5 from '../../images/criteria5.png'
// import Criteria6 from '../../images/criteria6.png'
// import Criteria7 from '../../images/criteria7.png'
// import Criteria8 from '../../images/criteria8.png'
import Lock1 from '../../images/Lock/1.png';
import Lock2 from '../../images/Lock/2.png';
import Lock3 from '../../images/Lock/3.png';
import Lock4 from '../../images/Lock/4.png';
import Lock5 from '../../images/Lock/5.png';
import Lock6 from '../../images/Lock/6.png';
import Lock7 from '../../images/Lock/7.png';
import Lock8 from '../../images/Lock/8.png';
import Lock9 from '../../images/Lock/9.png';
import Lock10 from '../../images/Lock/10.png';
import Lock11 from '../../images/Lock/11.png';
import Lock12 from '../../images/Lock/12.png';
import Unlock1 from '../../images/Unlock/1.png';
import Unlock2 from '../../images/Unlock/2.png';
import Unlock3 from '../../images/Unlock/3.png';
import Unlock4 from '../../images/Unlock/4.png';
import Unlock5 from '../../images/Unlock/5.png';
import Unlock6 from '../../images/Unlock/6.png';
import Unlock7 from '../../images/Unlock/7.png';
import Unlock8 from '../../images/Unlock/8.png';
import Unlock9 from '../../images/Unlock/9.png';
import Unlock10 from '../../images/Unlock/10.png';
import { motion } from 'framer-motion'


interface MyProps {
    tranferFromCriteriaToTest: (criteria: ICriteria) => void;
    revertToIntro: () => void;
    criteriaLst: ICriteria[];
}

const TemporaryCriteriaLst = [
    {
        id: "1",
        name: 'LÃNH ĐẠO QUẢN TRỊ',
        description: "Yếu tố quan trọng để phát triển khởi nghiệp và đổi mới văn hoá trong lĩnh vực đại học",
        lockImage: Lock1,
        unLockImage: Unlock1,
        used: true,
    },
    {
        id: "2",
        name: "NĂNG LỰC TỔ CHỨC",
        lockImage: Lock2,
        unLockImage: Unlock2,
        description: "Năng lực tổ chức của một cơ sở giáo dục đại học thúc đẩy khả năng thực hiện chiến lược ",
        used: false,
    },
    {
        id: "3",
        name: "DẠY HỌC VÀ KHỞI NGHIỆP",
        lockImage: Lock3,
        unLockImage: Unlock3,
        description: "Khám phá các phương pháp giảng dạy sáng tạo và tìm cách kích thích tư duy khởi nghiệp",
        used: false,
    },
    {
        id: "4",
        name: "ƯƠM TẠO KHỞI NGHIỆP",
        lockImage: Lock4,
        unLockImage: Unlock4,
        description: "Tổ chức giáo dục đại học có thể giúp hs, sv tốt nghiệp và nhân lực cân nhắc việc khởi nghiệp ",
        used: false,
    },
    {
        id: "5",
        name: "CHUYỂN ĐỔI NĂNG LỰC SỐ",
        lockImage: Lock5,
        unLockImage: Unlock5,
        description: "Các trường đại học đang sử dụng công nghệ số, tuy nhiên việc kết nối còn gặp nhiều khó khăn",
        used: false,
    },
    {
        id: "6",
        name: "TRAO ĐỔI TRI THỨC",
        lockImage: Lock6,
        unLockImage: Unlock6,
        description: "Chất xúc tác quan trọng cho sự đổi mới tổ chức trong nghiên cứu, và sự phát triển của địa phương",
        used: false,
    },
    {
        id: "7",
        name: "QUỐC TẾ HÓA",
        lockImage: Lock7,
        unLockImage: Unlock7,
        description: "Quá trình tích hợp một khía cạnh hoặc toàn cầu vào việc thiết kế, nghiên cứu và trao đổi kiến thức",
        used: false,
    },
    {
        id: "8",
        name: "ĐO LƯỜNG TÁC ĐỘNG",
        lockImage: Lock8,
        unLockImage: Unlock8,
        description: "Các trường đại học khởi nghiệp/sáng tạo cần nắm  những thay đổi mà họ mang lại cho tổ chức",
        used: false,
    },
]

const hoverVariants = {
    hover: {
        scale: 1.1,
        opacity: 0.8,
        borderRadius: '30px'
    },
    tap: {
        scale: 0.8
    },
};
const JudgementCriteriaOptions = (props: MyProps) => {
    // const [newOptionsLst, setNewOptionLst] = useState<ICriteria[]>();

    // useEffect(() => {// Mapping du lieu nhan ve tu API sang class duoc khai bao o frontend
    //     let newLst: ICriteria[] = [];
    //     props.criteriaLst.map((item, index) => {
    //         newLst.push(
    //             {
    //                 description: item.description,
    //                 id: item.id,
    //                 name: item.name,
    //                 ...TemporaryCriteriaLst[index]
    //             }
    //         )
    //     }
    //     )
    //     setNewOptionLst(newLst)
    // }, [])

    // console.log(props.criteriaLst)

    return (
        <div className='criteria-lst'>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <a onClick={() => props.revertToIntro()}>Đánh giá</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item className='present-link'>
                    Bắt đầu đánh giá
                </Breadcrumb.Item>
                {/* <Breadcrumb.Item>
                <a href="">Application List</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item> */}
            </Breadcrumb>
            {/* <List
                itemLayout="horizontal"
                dataSource={TemporaryCriteriaLst}
                renderItem={(item) => (
                    <List.Item
                        // onClick={() => props.tranferFromCriteriaToTest(item)}
                        style={{ cursor: "pointer" }}
                    >
                        <motion.div
                            whileHover="hover"
                            whileTap="tap"
                            variants={hoverVariants}
                        >

                            <List.Item.Meta
                                avatar={<img className='criteria-image' src={item.urlImage} />}
                                title={<a className='criteria-title'>{item.name}</a>}
                                description={<div>
                                    <div className='criteria-text'>{item.description}</div>
                                    <Button className='criteria-btn'>Đánh giá</Button>
                                </div>}
                                className="lst-item"
                            />
                        </motion.div>
                    </List.Item>
                )}
            /> */}
            <List
                grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4, }}
                dataSource={TemporaryCriteriaLst}
                renderItem={(item) => (
                    <List.Item>
                        <Card bordered={false} className={item.used ? 'unLock' : ''}>
                            <img src={!item.used ? item.lockImage : item.unLockImage} alt="" className="card-img-option" />
                            <div className="card-title-option">{item.name}</div>
                            <div className='card-number-of-question-complete'>0/22 câu hỏi</div>
                            <Progress className='card-progress-option' percent={30} />
                            <div className="card-description-option">{item.description}</div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}>
                                <Button className={item.used ? 'card-btn-option unlock' : 'card-btn-option'}>Bắt đầu đánh giá</Button>
                            </motion.div>
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default JudgementCriteriaOptions