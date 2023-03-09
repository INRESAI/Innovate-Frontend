import { Breadcrumb, Button, Card, List, Progress } from 'antd';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ICriteria } from '../../common/u-innovate/define-criteria';

import UinnovateBgLockCard from '../../images/bg-lock-card.png';
import UinnovateBgUnLockCard from '../../images/bg-unlock-card.png';
import PinnovateBgLockCard from '../../images/pinnovate-bg-lock-card.png';
import PinnovateBgUnLockCard from '../../images/pinnovate-bg-unlock-card.png';

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
import Lock13 from '../../images/Lock/13.png';
import Lock14 from '../../images/Lock/14.png';
import Lock15 from '../../images/Lock/15.png';
import Lock16 from '../../images/Lock/16.png';
import Lock17 from '../../images/Lock/17.png';
import Lock18 from '../../images/Lock/18.png';
import Lock19 from '../../images/Lock/19.png';
import Lock20 from '../../images/Lock/20.png';
import Lock21 from '../../images/Lock/21.png';
import Lock22 from '../../images/Lock/22.png';
import Lock23 from '../../images/Lock/23.png';
import Lock24 from '../../images/Lock/24.png';
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
import Unlock11 from '../../images/Unlock/11.png';
import Unlock12 from '../../images/Unlock/12.png';
import Unlock13 from '../../images/Unlock/13.png';
import Unlock14 from '../../images/Unlock/14.png';
import Unlock15 from '../../images/Unlock/15.png';
import Unlock16 from '../../images/Unlock/16.png';
import Unlock17 from '../../images/Unlock/17.png';
import Unlock18 from '../../images/Unlock/18.png';
import Unlock19 from '../../images/Unlock/19.png';
import Unlock20 from '../../images/Unlock/20.png';
import Unlock21 from '../../images/Unlock/21.png';
import Unlock22 from '../../images/Unlock/22.png';
import Unlock23 from '../../images/Unlock/23.png';
import Unlock24 from '../../images/Unlock/24.png';
import Unlock25 from '../../images/Unlock/25.png';

import UIMPACTLOCK2 from '../../images/Uimpact_lock/1.png';
import UIMPACTLOCK3 from '../../images/Uimpact_lock/2.png';
import UIMPACTLOCK4 from '../../images/Uimpact_lock/3.png';
import UIMPACTLOCK5 from '../../images/Uimpact_lock/4.png';
import UIMPACTLOCK6 from '../../images/Uimpact_lock/5.png';
import UIMPACTLOCK7 from '../../images/Uimpact_lock/6.png';
import UIMPACTLOCK8 from '../../images/Uimpact_lock/7.png';
import UIMPACTLOCK9 from '../../images/Uimpact_lock/8.png';
import UIMPACTLOCK10 from '../../images/Uimpact_lock/9.png';
import UIMPACTLOCK11 from '../../images/Uimpact_lock/10.png';
import UIMPACTLOCK12 from '../../images/Uimpact_lock/11.png';
import UIMPACTLOCK13 from '../../images/Uimpact_lock/12.png';
import UIMPACTLOCK14 from '../../images/Uimpact_lock/13.png';
import UIMPACTLOCK15 from '../../images/Uimpact_lock/14.png';
import UIMPACTLOCK16 from '../../images/Uimpact_lock/15.png';
import UIMPACTLOCK17 from '../../images/Uimpact_lock/16.png';

import UIMPACTUNLOCK1 from '../../images/Uimpact_unLock/1.png';
import UIMPACTUNLOCK2 from '../../images/Uimpact_unLock/2.png';
import UIMPACTUNLOCK3 from '../../images/Uimpact_unLock/3.png';
import UIMPACTUNLOCK4 from '../../images/Uimpact_unLock/4.png';
import UIMPACTUNLOCK5 from '../../images/Uimpact_unLock/5.png';
import UIMPACTUNLOCK6 from '../../images/Uimpact_unLock/6.png';
import UIMPACTUNLOCK7 from '../../images/Uimpact_unLock/7.png';
import UIMPACTUNLOCK8 from '../../images/Uimpact_unLock/8.png';
import UIMPACTUNLOCK9 from '../../images/Uimpact_unLock/9.png';
import UIMPACTUNLOCK10 from '../../images/Uimpact_unLock/10.png';
import UIMPACTUNLOCK11 from '../../images/Uimpact_unLock/11.png';
import UIMPACTUNLOCK12 from '../../images/Uimpact_unLock/12.png';
import UIMPACTUNLOCK13 from '../../images/Uimpact_unLock/13.png';
import UIMPACTUNLOCK14 from '../../images/Uimpact_unLock/14.png';
import UIMPACTUNLOCK15 from '../../images/Uimpact_unLock/15.png';
import UIMPACTUNLOCK16 from '../../images/Uimpact_unLock/16.png';
import UIMPACTUNLOCK17 from '../../images/Uimpact_unLock/17.png';


import { getAllQuestionsByCriteriaIdRequest } from '../../redux/controller';
import { useDispatchRoot } from '../../redux/store';


interface MyProps {
    tranferFromCriteriaToTest: (criteria: ICriteria) => void;
    revertToIntro: () => void;
    criteriaLst: ICriteria[];
}

const TemporaryCriteriaUINNOVATELst = [
    {
        // id: "1",
        // name: 'LÃNH ĐẠO QUẢN TRỊ',
        // description: "Yếu tố quan trọng để phát triển khởi nghiệp và đổi mới văn hoá trong lĩnh vực đại học",
        lockImage: Lock1,
        unLockImage: Unlock1,
        used: true,
    },
    {
        // id: "2",
        // name: "NĂNG LỰC TỔ CHỨC",
        // description: "Năng lực tổ chức của một cơ sở giáo dục đại học thúc đẩy khả năng thực hiện chiến lược ",
        lockImage: Lock2,
        unLockImage: Unlock2,
        used: false,
    },
    {
        // id: "3",
        // name: "DẠY HỌC VÀ KHỞI NGHIỆP",
        // description: "Khám phá các phương pháp giảng dạy sáng tạo và tìm cách kích thích tư duy khởi nghiệp",
        lockImage: Lock3,
        unLockImage: Unlock3,
        used: false,
    },
    {
        // id: "4",
        // name: "ƯƠM TẠO KHỞI NGHIỆP",
        // description: "Tổ chức giáo dục đại học có thể giúp hs, sv tốt nghiệp và nhân lực cân nhắc việc khởi nghiệp ",
        lockImage: Lock4,
        unLockImage: Unlock4,
        used: false,
    },
    {
        // id: "5",
        // name: "CHUYỂN ĐỔI NĂNG LỰC SỐ",
        // description: "Các trường đại học đang sử dụng công nghệ số, tuy nhiên việc kết nối còn gặp nhiều khó khăn",
        lockImage: Lock5,
        unLockImage: Unlock5,
        used: false,
    },
    {
        // id: "6",
        // name: "TRAO ĐỔI TRI THỨC",
        // description: "Chất xúc tác quan trọng cho sự đổi mới tổ chức trong nghiên cứu, và sự phát triển của địa phương",
        lockImage: Lock6,
        unLockImage: Unlock6,
        used: false,
    },
    {
        // id: "7",
        // name: "QUỐC TẾ HÓA",
        // description: "Quá trình tích hợp một khía cạnh hoặc toàn cầu vào việc thiết kế, nghiên cứu và trao đổi kiến thức",
        lockImage: Lock7,
        unLockImage: Unlock7,
        used: false,
    },
    {
        // id: "8",
        // name: "ĐO LƯỜNG TÁC ĐỘNG",
        // description: "Các trường đại học khởi nghiệp/sáng tạo cần nắm  những thay đổi mà họ mang lại cho tổ chức",
        lockImage: Lock8,
        unLockImage: Unlock8,
        used: false,
    },
]
const TemporaryCriteriaPINNOVATELst = [
    {
        // id: "1",
        // name: 'LÃNH ĐẠO QUẢN TRỊ',
        // description: "Yếu tố quan trọng để phát triển khởi nghiệp và đổi mới văn hoá trong lĩnh vực đại học",
        lockImage: Lock1,
        unLockImage: Unlock1,
        used: true,
    },
    {
        // id: "2",
        // name: "NĂNG LỰC TỔ CHỨC",
        // description: "Năng lực tổ chức của một cơ sở giáo dục đại học thúc đẩy khả năng thực hiện chiến lược ",
        lockImage: Lock2,
        unLockImage: Unlock2,
        used: false,
    },
    {
        // id: "3",
        // name: "DẠY HỌC VÀ KHỞI NGHIỆP",
        // description: "Khám phá các phương pháp giảng dạy sáng tạo và tìm cách kích thích tư duy khởi nghiệp",
        lockImage: Lock3,
        unLockImage: Unlock3,
        used: false,
    },

]
const TemporaryCriteriaUIMPACTLst = [
    {
        lockImage: Lock1,
        unLockImage: Unlock1,
        lockUIMPACTImage: UIMPACTLOCK2,
        unlockUIMPACTImage: UIMPACTUNLOCK1,
        used: true,
    },
    {
        lockImage: Lock2,
        unLockImage: Unlock2,
        lockUIMPACTImage: UIMPACTLOCK2,
        unlockUIMPACTImage: UIMPACTUNLOCK2,
        used: false,
    },
    {
        lockImage: Lock3,
        unLockImage: Unlock3,
        lockUIMPACTImage: UIMPACTLOCK3,
        unlockUIMPACTImage: UIMPACTUNLOCK3,
        used: false,
    },
    {
        lockImage: Lock4,
        unLockImage: Unlock4,
        lockUIMPACTImage: UIMPACTLOCK4,
        unlockUIMPACTImage: UIMPACTUNLOCK4,
        used: false,
    },
    {
        lockImage: Lock5,
        unLockImage: Unlock5,
        lockUIMPACTImage: UIMPACTLOCK5,
        unlockUIMPACTImage: UIMPACTUNLOCK5,
        used: false,
    },
    {
        lockImage: Lock6,
        unLockImage: Unlock6,
        lockUIMPACTImage: UIMPACTLOCK6,
        unlockUIMPACTImage: UIMPACTUNLOCK6,
        used: false,
    },
    {
        lockImage: Lock7,
        unLockImage: Unlock7,
        lockUIMPACTImage: UIMPACTLOCK7,
        unlockUIMPACTImage: UIMPACTUNLOCK7,
        used: false,
    },
    {
        lockImage: Lock8,
        unLockImage: Unlock8,
        lockUIMPACTImage: UIMPACTLOCK8,
        unlockUIMPACTImage: UIMPACTUNLOCK8,
        used: false,
    },
    {
        lockImage: Lock9,
        unLockImage: Unlock9,
        lockUIMPACTImage: UIMPACTLOCK9,
        unlockUIMPACTImage: UIMPACTUNLOCK9,
        used: false,
    },
    {
        lockImage: Lock10,
        unLockImage: Unlock10,
        lockUIMPACTImage: UIMPACTLOCK10,
        unlockUIMPACTImage: UIMPACTUNLOCK10,
        used: false,
    },
    {
        lockImage: Lock11,
        unLockImage: Unlock11,
        lockUIMPACTImage: UIMPACTLOCK11,
        unlockUIMPACTImage: UIMPACTUNLOCK11,
        used: false,
    },
    {
        lockImage: Lock12,
        unLockImage: Unlock12,
        lockUIMPACTImage: UIMPACTLOCK12,
        unlockUIMPACTImage: UIMPACTUNLOCK12,
        used: false,
    },
    {
        lockImage: Lock13,
        unLockImage: Unlock13,
        lockUIMPACTImage: UIMPACTLOCK13,
        unlockUIMPACTImage: UIMPACTUNLOCK13,
        used: false,
    },
    {
        lockImage: Lock14,
        unLockImage: Unlock14,
        lockUIMPACTImage: UIMPACTLOCK14,
        unlockUIMPACTImage: UIMPACTUNLOCK14,
        used: false,
    },
    {
        lockImage: Lock15,
        unLockImage: Unlock15,
        lockUIMPACTImage: UIMPACTLOCK15,
        unlockUIMPACTImage: UIMPACTUNLOCK15,
        used: false,
    },
    {
        lockImage: Lock16,
        unLockImage: Unlock16,
        lockUIMPACTImage: UIMPACTLOCK16,
        unlockUIMPACTImage: UIMPACTUNLOCK16,
        used: false,
    },
    {
        lockImage: Lock17,
        unLockImage: Unlock17,
        lockUIMPACTImage: UIMPACTLOCK17,
        unlockUIMPACTImage: UIMPACTUNLOCK17,
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
    const [newCriteriaLst, setNewCriteriaLst] = useState<any[]>();
    const [userToken, setUserToken] = useState<string>('');
    const [userType, setUserType] = useState<string>('');
    const dispatch = useDispatchRoot()

    useEffect(() => {// Mapping du lieu nhan ve tu API sang class duoc khai bao o frontend
        let newLst: any[] = [];
        let type = localStorage.getItem('userType') ? localStorage.getItem('userType') : '';
        if (type) {
            type = type.slice(1);
            type = type.slice(0, type.length - 1);
            setUserType(type);
        }

        if (type === 'UINNOVATE') {
            props.criteriaLst.map((item, index) => {

                newLst.push(
                    {
                        criteriaId: item.criteriaId,
                        name: item.name,
                        description: item.description,
                        type: item.type,
                        isAnswered: item.isAnswered,
                        numberOfQuestion: item.numberOfQuestion,
                        numberOfAnswered: item.numberOfAnswered,
                        ...TemporaryCriteriaUINNOVATELst[index]
                    }
                )
            }
            )
        }
        if (type === 'UIMPACT') {
            props.criteriaLst.map((item, index) => {

                newLst.push(
                    {
                        criteriaId: item.criteriaId,
                        name: item.name,
                        description: item.description,
                        type: item.type,
                        isAnswered: item.isAnswered,
                        numberOfQuestion: item.numberOfQuestion,
                        numberOfAnswered: item.numberOfAnswered,
                        ...TemporaryCriteriaUIMPACTLst[index]
                    }
                )
            }
            )
        }
        if (type === 'PINNOVATE') {
            props.criteriaLst.map((item, index) => {

                newLst.push(
                    {
                        criteriaId: item.criteriaId,
                        name: item.name,
                        description: item.description,
                        type: item.type,
                        isAnswered: item.isAnswered,
                        numberOfQuestion: item.numberOfQuestion,
                        numberOfAnswered: item.numberOfAnswered,
                        ...TemporaryCriteriaPINNOVATELst[index]
                    }
                )
            }
            )
        }
        for (let i = 0; i < newLst?.length; i++) {
            if (newLst[i].numberOfAnswered === newLst[i].numberOfQuestion) {
                newLst[i].isAnswered = true;
                newLst[i + 1].used = true;
                break;
            }
        }
        setNewCriteriaLst(newLst)
    }, [])

    const handleOnClick = (item: any) => {
        dispatch(getAllQuestionsByCriteriaIdRequest(item.criteriaId))
        props.tranferFromCriteriaToTest(item);
    }
    // useEffect(() => {
    //     if (newCriteriaLst) {
    //         console.log(newCriteriaLst);
    //         for (let i = 0; i < newCriteriaLst?.length; i++) {
    //             if (newCriteriaLst[i].numberOfAnswered === newCriteriaLst[i].numberOfQuestion) {
    //                 newCriteriaLst[i].isAnswered = true;
    //                 newCriteriaLst[i + 1].used = true;
    //                 break;
    //             }
    //         }
    //     }
    // }, [newCriteriaLst])

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
            </Breadcrumb>
            <List
                grid={{ gutter: 32, xs: 1, sm: 2, md: 2, lg: 4, xl: 4, xxl: 4, }}
                dataSource={newCriteriaLst}
                renderItem={(item) => (
                    <List.Item>
                        {userType === 'UINNOVATE' &&
                            <Card style={{ backgroundImage: `url(${item.used ? UinnovateBgUnLockCard : UinnovateBgLockCard})` }} bordered={false} className={item.used ? 'unLock' : ''}>
                                <img src={!item.used ? item.lockImage : item.unLockImage} alt="" className="card-img-option" />
                                <div className="card-title-option">{item.name}</div>
                                <div className='card-number-of-question-complete'>{item.numberOfAnswered}/{item.numberOfQuestion} câu hỏi</div>
                                <Progress className='card-progress-option' percent={item.numberOfAnswered / item.numberOfQuestion * 100} />
                                <div className="card-description-option">{item.description}</div>
                                <motion.div
                                    className='button-container'
                                    style={{ width: '100%' }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}>
                                    {(!item.used && !item.isAnswered) && <Button className={'card-btn-option'} disabled>Chưa mở khóa</Button>}
                                    {(item.used && !item.isAnswered) && <Button className={'card-btn-option unlock'} onClick={() => handleOnClick(item)}>Bắt đầu đánh giá</Button>}
                                    {(item.used && item.isAnswered) && <Button className={'card-btn-option unlock'} disabled>Đã hoàn thành</Button>}
                                </motion.div>
                            </Card>
                        }
                        {userType === 'UIMPACT' &&
                            <Card style={{ backgroundImage: `url(${item.used ? item.unlockUIMPACTImage : item.lockUIMPACTImage})` }} bordered={false} className={item.used ? 'unLock' : ''}>
                                <img src={!item.used ? item.lockImage : item.unLockImage} alt="" className="card-img-option" />
                                <div className="card-title-option">{item.name}</div>
                                <div style={{ marginTop: 170 }} className='card-number-of-question-complete'>{item.numberOfAnswered}/{item.numberOfQuestion} câu hỏi</div>
                                <Progress className='card-progress-option' percent={item.numberOfAnswered / item.numberOfQuestion * 100} />
                                {/* <div className="card-description-option">{item.description}</div> */}
                                <motion.div
                                    className='button-container'
                                    style={{ width: '100%' }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}>
                                    {(!item.used && !item.isAnswered) && <Button className={'card-btn-option'} disabled>Chưa mở khóa</Button>}
                                    {(item.used && !item.isAnswered) && <Button className={'card-btn-option unlock'} onClick={() => handleOnClick(item)}>Bắt đầu đánh giá</Button>}
                                    {(item.used && item.isAnswered) && <Button className={'card-btn-option unlock'} disabled>Đã hoàn thành</Button>}
                                </motion.div>
                            </Card>
                        }
                        {userType === 'PINNOVATE' &&
                            <Card style={{ backgroundImage: `url(${item.used ? PinnovateBgLockCard : PinnovateBgUnLockCard})` }} bordered={false} className={item.used ? 'unLock' : ''}>
                                <img src={!item.used ? item.lockImage : item.unLockImage} alt="" className="card-img-option" />
                                <div className="card-title-option">{item.name}</div>
                                <div style={{ marginTop: 170 }} className='card-number-of-question-complete'>{item.numberOfAnswered}/{item.numberOfQuestion} câu hỏi</div>
                                <Progress className='card-progress-option' percent={item.numberOfAnswered / item.numberOfQuestion * 100} />
                                {/* <div className="card-description-option">{item.description}</div> */}
                                <motion.div
                                    className='button-container'
                                    style={{ width: '100%' }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}>
                                    {(!item.used && !item.isAnswered) && <Button className={'card-btn-option'} disabled>Chưa mở khóa</Button>}
                                    {(item.used && !item.isAnswered) && <Button className={'card-btn-option unlock'} onClick={() => handleOnClick(item)}>Bắt đầu đánh giá</Button>}
                                    {(item.used && item.isAnswered) && <Button className={'card-btn-option unlock'} disabled>Đã hoàn thành</Button>}
                                </motion.div>
                            </Card>
                        }
                    </List.Item>
                )
                }
            />
            <div className='content-btn-show'>
                <Button className="bnt-show-result" disabled>Xem kết quả</Button>
            </div>
        </div >
    )
}

export default JudgementCriteriaOptions