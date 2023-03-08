/* eslint-disable jsx-a11y/iframe-has-title */
import { Button, notification } from 'antd';
import { Variants, motion, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageOfIntro from '../../images/home_image_1.png';
import HowToUse from '../../images/HowToUse.png';
import HowToUse1 from '../../images/how-to-use1.png';
import HowToUse2 from '../../images/how-to-use2.png';
import HowToUse3 from '../../images/how-to-use3.png';
import HowToUse4 from '../../images/how-to-use4.png';
import FirstTutorial from '../../images/fisrt-tutorial.png';
import SecondTutorial from '../../images/second-tutorial.png';
import Tutorial1 from '../../images/tutorial-1.png';
import Tutorial2 from '../../images/tutorial-2.png';
import Tutorial3 from '../../images/tutorial-3.png';
import Tutorial4 from '../../images/tutorial-4.png';
import Tutorial5 from '../../images/tutorial-5.png';
import Tutorial6 from '../../images/tutorial-6.png';

import { useSelectorRoot } from '../../redux/store';
import './styles.home.scss';

// Phần trang chủ của trang web
const Home = () => {
    const { user } = useSelectorRoot((state) => state.login);
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const navigate = useNavigate();
    const mapRef = useRef<any>(null);

    const imageVariants: Variants = {
        offscreen: {
            y: 200,
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
    const imageVariants2: Variants = {
        offscreen: {
            x: 200,
            opacity: 0
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2
            }
        }
    };

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

    useEffect(() => {
        let checkLogin = localStorage.getItem('token') ? localStorage.getItem('token') : ''
        if (checkLogin) {
            setIsLogin(true);
        }
    });

    useEffect(() => {
        if (mapRef.current) {
            const mapDoc = mapRef.current.contentWindow?.document;
            if (mapDoc) {
                const placeCard = mapDoc.querySelector('.place-card');
                if (placeCard) {
                    placeCard.style.backgroundColor = 'red';
                }
            }
        }
    }, [mapRef]);

    const handleOnClick = () => {
        if (!isLogin) {
            notification['warning']({
                message: 'Vui lòng đăng nhập tài khoản trước',
                duration: 1,
                style: {
                    width: '100%'
                }
            });
        }
        else {
            navigate('/test')
        }
    }
    return (
        <motion.div
            className='main-home'
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
            <div className='intro-part'>
                <div className='text-of-intro'>
                    <div className='title' >Tổ chức Giáo dục Đại học của bạn đã chuẩn bị sẵn sàng cho những thách thức trong tương lai chưa? </div>
                    <div className='detail'>Viện Nghiên cứu Đổi mới và Phát triển (IID), được thành lập năm từ năm 2017, là một viện nghiên cứu dựa trên nền tảng công nghệ, dữ liệu và mạng lưới kết nối toàn cầu để theo đuổi sứ mệnh trở thành một là một tổ chức trung gian, xây dựng hệ sinh thái góp phần tạo ra sân chơi cho những học giả và ươm tạo nhân tài trẻ góp phần thúc đẩy khu vực sáng tạo và kinh doanh tạo tác động xã hội Việt Nam.</div>
                    <motion.div className='home-button'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                        <Button onClick={handleOnClick}>Đến trang đánh giá</Button>
                    </motion.div>
                </div>
                <motion.div className='image-of-intro'
                    variants={imageVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 'all' }}>
                    <img src={ImageOfIntro} alt=''
                    />
                </motion.div>
            </div>
            <div className='tool-of-web'>
                <div className="title">Công cụ đánh giá của V.innovate</div>
                <div className="subtitle">Đây là một nền tảng chuyên về đánh giá, xếp hạng các trường đại học, cao đẳng; tỉnh thành phố về đổi mới sáng tạo, khởi nghiệp và tạo tác động </div>
                <div className="lst-tool">
                    <motion.div
                        className="tool"
                        whileHover="hover"
                        whileTap="tap"
                        variants={hoverVariants}
                        onClick={handleOnClick}>
                        <div className="tool-title">U.INNOVATE</div>
                        <div className="tool-subtitle">Bộ tiêu chí đánh giá trường đại học khởi nghiệp</div>
                        <Button className="btn-tool">BẮT ĐẦU ĐÁNH GIÁ</Button>
                    </motion.div>
                    <motion.div
                        className="tool"
                        whileHover="hover"
                        whileTap="tap"
                        variants={hoverVariants}
                        onClick={handleOnClick}>
                        <div className="tool-title">U.IMPACT</div>
                        <div className="tool-subtitle">Bộ tiêu chí đánh giá trường đại học tạo tác động xã hội</div>
                        <Button className="btn-tool">BẮT ĐẦU ĐÁNH GIÁ</Button>
                    </motion.div>
                    <motion.div
                        className="tool"
                        whileHover="hover"
                        whileTap="tap"
                        variants={hoverVariants}
                        onClick={handleOnClick}>
                        <div className="tool-title">P.INNOVATE</div>
                        <div className="tool-subtitle">Bộ tiêu chí đánh giá khởi nghiệp tại địa phương</div>
                        <Button className="btn-tool">BẮT ĐẦU ĐÁNH GIÁ</Button>
                    </motion.div>

                </div>
            </div>
            <div className='how-to-use'>
                <div className='tutorial-image'>
                    <motion.img src={HowToUse} alt=''
                        variants={imageVariants2}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 'all' }}
                    />
                </div>
                <div className='content'>
                    <div className='title'>Bạn nhận được gì từ V.innovate</div>
                    <div className='subtitle'>Lorem ipsum dolor sit amet consectetur. Maecenas aenean neque at id erat. Lacus vel est luctus arcu risus ultricies pharetra bibendum.</div>
                    <div className='step-lst'>
                        <div className="row-item">
                            <motion.div className="item-lst"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="item-title">TỰ ĐÁNH GIÁ</div>
                                <div className="item-sub-title">Mức độ phát triển của hệ sinh thái của tổ chức, địa phương theo tiêu chuẩn quốc tế với cách thức dễ triển khai</div>
                                <img className='item-img' src={HowToUse1} alt="" />
                            </motion.div>
                            <motion.div className="item-lst"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}>
                                <div className="item-title">QUAN SÁT</div>
                                <div className="item-sub-title">Quan sát được vị trí của hệ sinh thái tổ chức, địa phương mình trong đánh giá của nhiều bên liên quan</div>
                                <img className='item-img' src={HowToUse2} alt="" />
                            </motion.div>
                        </div>
                        <div className="row-item">
                            <motion.div className="item-lst"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}>
                                <div className="item-title">XÁC ĐỊNH</div>
                                <div className="item-sub-title">Xác định được phương diện nổi trội và cần cải thiện để xây dựng chiến lược phát triển hệ sinh thái</div>
                                <img className='item-img' src={HowToUse3} alt="" />
                            </motion.div>
                            <motion.div className="item-lst"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}>
                                <div className="item-title">NHẬN BÁO CÁO </div>
                                <div className="item-sub-title">Báo cáo tóm tắt so sánh và quan sát theo thời gian của hệ sinh thái</div>
                                <img className='item-img' src={HowToUse4} alt="" />
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='tutorial'>
                <div className="tutorial-title">Hướng dẫn sử dụng V.innovate</div>
                <div className="tutorial-sub-title">Lorem ipsum dolor sit amet consectetur. Maecenas aenean neque at id erat. Lacus vel est luctus arcu risus ultricies pharetra bibendum.</div>
                <div className="first-tutorial">
                    <div className="f-t-left">
                        <motion.div className="f-t-l-item"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                            <img className='f-t-l-t-icon' src={Tutorial1} alt='' />
                            <div className="f-t-l-t-content">Bạn cần tạo tài khoản của mình trên V.innovate</div>
                        </motion.div>
                        <motion.div className="f-t-l-item" whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                            <img className='f-t-l-t-icon' src={Tutorial2} alt='' />
                            <div className="f-t-l-t-content">Bạn có thể có cái nhìn tổng quan về các tiêu chí và phương pháp của V.innovate</div>
                        </motion.div>
                        <motion.div className="f-t-l-item" whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                            <img className='f-t-l-t-icon' src={Tutorial3} alt='' />
                            <div className="f-t-l-t-content">Bạn tiến hành tự đánh giá thông qua các bước trên nền tảng V.innovate</div>
                        </motion.div>
                        <motion.div className="f-t-l-item" whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                            <img className='f-t-l-t-icon' src={Tutorial4} alt='' />
                            <div className="f-t-l-t-content">Bạn có thể đọc báo cáo về cơ sở giáo dục của mình trên V.innovate hoặc download báo cáo về máy, hoặc gửi email báo cáo.</div>
                        </motion.div>
                    </div>
                    <div className="f-t-right">
                        <motion.img src={FirstTutorial} alt=''
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }} />
                    </div>
                </div>
                <div className="first-tutorial second-tutorial">
                    <div className="f-t-right" style={{ marginTop: '-200px' }}>
                        <motion.img src={SecondTutorial} alt=''
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }} />
                    </div>
                    <div className="f-t-left">
                        <motion.div className="f-t-l-item"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                            <img className='f-t-l-t-icon' src={Tutorial5} alt='' />
                            <div className="f-t-l-t-content">Bạn có thể quay lại để tham khảo sự thay đổi kết quả tự đánh giá, và kết quả so sánh sau một thời gian.</div>
                        </motion.div>
                        <motion.div className="f-t-l-item long-item" whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                            <img className='f-t-l-t-icon' src={Tutorial6} alt='' />
                            <div className="f-t-l-t-content">Ngoài đưa ra các đánh giá và sự quan tâm của các doanh nghiệp khởi nghiệp qua U.innovate, V.innovate còn giúp nhận định sự tác động của khởi nghiệp đối với các mục tiêu SDG Phát triển bền vững thông qua U.impact và P.innovate với nhiệm vụ đưa ra các đánh giá, nhận định, độ phủ quan tâm về lĩnh vực Khởi nghiệp tại các tỉnh, thành phố thông qua bản đồ các doanh nghiệp khởi nghiệp</div>
                        </motion.div>

                    </div>

                </div>
            </div>
            <div className='map-user'>
                <div className="map-title">Bản đồ người sử dụng V.innovate</div>
                <div className="map-sub-title">Lorem ipsum dolor sit amet consectetur. Maecenas aenean neque at id erat. Lacus vel est luctus arcu risus ultricies pharetra bibendum.</div>
                <iframe
                    className="gmap_iframe"
                    id='gmap'
                    ref={mapRef}
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=176 P. Thái Hà, Trung Liệt, Đống Đa, Hà Nội&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen
                />
            </div>
            {/* <iframe
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=5th Floor, Vietnam Academy of Social Sciences Building, 176 Thai Ha, Dong Da, Hanoi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe> */}

            <div className='our-partner'>
                <div className='title'>Đối tác của chúng tôi V.innovate</div>
                <div className="sub-title">Lorem ipsum dolor sit amet consectetur. Maecenas aenean neque at id erat. Lacus vel est luctus arcu risus ultricies pharetra bibendum.</div>
                {/* <div className='partner-lst'>
                    <div className='item'>1</div>
                    <div className='item'>2</div>
                    <div className='item'>3</div>
                    <div className='item'>4</div>
                    <div className='item'>5</div>
                    <div className='item'>6</div>
                </div> */}
            </div>
        </motion.div>
    )
}

export default Home