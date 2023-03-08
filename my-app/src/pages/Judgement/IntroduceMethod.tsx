import { Button, notification } from 'antd';
import IntroduceMethodImg from '../../images/introduce_method.png';
import './styles.judgement.scss';
import { useSelectorRoot } from '../../redux/store';
import { Variants, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MyProps {
    tranferFromIntroToCriteria: () => void
}
const imageVariants: Variants = {
    offscreen: {
        y: 100,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 2
        }
    }
};
const IntroduceMethod = (props: MyProps) => {
    const { tokenLogin, user } = useSelectorRoot((state) => state.login);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [userType, setUserType] = useState<string>('')

    useEffect(() => {
        let checkLogin = localStorage.getItem('token') ? localStorage.getItem('token') : ''
        let type = localStorage.getItem('userType') ? localStorage.getItem('userType') : '';
        if (checkLogin) setIsLogin(true);
        if (type) {
            type = type.slice(1);
            type = type.slice(0, type.length - 1);
            setUserType(type);
        }
    });

    const handleOnClick = () => {
        if (isLogin)
            props.tranferFromIntroToCriteria();
        else
            notification['warning']({
                message: 'Vui lòng đăng nhập tài khoản trước',
                style: {
                    width: '100%'
                }
            });
    }
    return (

        <div className='intro-part'>
            <div className='text-of-intro'>
                {userType === "" &&
                    <>
                        <div className='title'>Giới thiệu phương pháp được sử dụng trong bảng khảo sát</div>
                        <div className='detail'>V.innovate là một nền tảng gồm 3 công cụ (U.innovate; U.impact; P.innovate) tự đánh giá miễn phí dành cho tất cả các loại hình tổ chức giáo dục đại học; các doanh nghiệp khởi nghiệp; các tỉnh/thành phố. Các công cụ cho phép bạn đánh giá tổ chức của mình bằng cách sử dụng một số tuyên bố liên quan đến các hoạt động kinh doanh của tổ chức, bao gồm lãnh đạo, nhân sự và liên kết với doanh nghiệp. Các tài liệu hỗ trợ và đào tạo phong phú, bao gồm các nghiên cứu điển hình thực tế, luôn sẵn sàng để hỗ trợ các hội thảo và phát triển hơn nữa trong tổ chức của bạn.</div>
                    </>
                }
                {userType === "UINNOVATE" &&
                    <>
                        <div className='title'>Giới thiệu bộ tiêu chí đánh giá trường đại học khởi nghiệp</div>
                        <div className='detail'>U.innovate là công cụ tự đánh giá, được truyền cảm hứng từ mô hình đại học khởi nghiệp của OECD. Các trường đại học thông qua U.innovate có thể quan sát được các điểm mạnh, điểm yếu trong hệ sinh thái đổi mới sáng tạo và khởi nghiệp của trường mình. Đồng thời có thể so sánh và đối chiếu về sự phát triển của nhà trường cùng với thời gian, cũng như so sánh với trung bình những trường khác tại Việt Nam.</div>
                    </>
                }
                {userType === "UIMPACT" &&
                    <>
                        <div className='title'>Giới thiệu phương pháp được sử dụng trong bảng khảo sát</div>
                        <div className='detail'>U.impact là công cụ tự đánh giá mức độ tác động xã hội của trường đại học thông qua 17 mục tiêu phát triển bền vững thuộc Liên Hợp Quốc. Các trường đại học thông qua U.impact có thể quan sát được các tác động của mình cho cộng đồng, xã hội.</div>
                    </>
                }
                {userType === "PINNOVATE" &&
                    <>
                        <div className='title'>Giới thiệu phương pháp được sử dụng trong bảng khảo sát</div>
                        <div className='detail'>P.innovate là công cụ tự đánh giá cho các cộng đồng khởi nghiệp tại từng tỉnh/thành phố có thể quan sát được các chính sách, nguồn lực, văn hoá tác động tới hệ sinh thái khởi nghiệp của mình. Đồng thời có thể so sánh và đối chiếu về sự phát triển của hệ sinh thái tại địa phương mình cùng với thời gian, cũng như so sánh với trung bình những tỉnh thành khác tại Việt Nam.</div>
                    </>
                }
                <motion.div

                    className='button-start btn-intro-part'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button id='btn-intro-part' onClick={handleOnClick} >BẮT ĐẦU TỰ ĐÁNH GIÁ</Button>
                </motion.div>
            </div>
            <div className='image-of-intro'><motion.img src={IntroduceMethodImg} alt=''
                variants={imageVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 'all' }} /></div>
        </div>
    )
}

export default IntroduceMethod