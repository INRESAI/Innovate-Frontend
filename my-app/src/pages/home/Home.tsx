import { Button } from 'antd';
import "../../App.scss";
import ImageOfIntro from '../../images/home_image_1.png';
import HowToUse from '../../images/home_image_2.png';
import HowToUse1 from '../../images/how_to_use1.png';
import HowToUse2 from '../../images/how_to_use2.png';
import HowToUse3 from '../../images/how_to_use3.png';
import HowToUse4 from '../../images/how_to_use4.png';
import HowToUse5 from '../../images/how_to_use5.png';
import RightOfUseImage1 from '../../images/right_of_use_image_1.png';
import RightOfUseImage2 from '../../images/right_of_use_image_2.png';
import RightOfUseImage3 from '../../images/right_of_use_image_3.png';
import RightOfUseImage4 from '../../images/right_of_use_image_4.png';
import RightOfUseImage5 from '../../images/right_of_use_image_5.png';
import './styles.home.scss';
import { motion } from 'framer-motion';
const Home = () => {
    return (
        <motion.div
            className='main-home'
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: window.innerWidth, transition: {duration: 0.5}}}
        >
            <div className='intro-part'>
                <div className='text-of-intro'>
                    <div className='title' >Tổ chức Giáo dục Đại học của bạn đã chuẩn bị sẵn sàng cho những thách thức trong tương lai chưa?</div>
                    <div className='detail'>Quốc gia khởi nghiệp là một trong những ưu tiên phát triển của Việt Nam từ năm 2016 đến nay. Nhiều chương trình quốc gia đã được phê duyệt và triển khai sâu rộng trên toàn quốc như đề án 844, 1665, 939. Trường đại học, cao đẳng cần là cốt lõi cho hệ sinh thái khởi nghiệp, đổi mới sáng tạo quốc gia, vì ở đó là nơi tạo ra tri thức, chia sẻ tri thức, cũng như phát triển nhân tài cho đổi mới sáng tạo và khởi nghiệp.</div>
                    <div>
                        <Button className='button-start'>Bắt đầu tự đánh giá</Button>
                    </div>
                </div>
                <div className='image-of-intro'>
                    <img src={ImageOfIntro} alt='' />
                </div>
            </div>
            <div className='right-of-user'>
                <div className='title'>
                    Quyền lợi khi sử dụng U.innovate
                </div>
                <div className='right-lst'>
                    <div className='lst-item'>
                        <img className='lst-item-image' src={RightOfUseImage1} alt='' />
                        <div className='lst-item-title'>ĐÁNH GIÁ</div>
                        <div className='lst-item-content'>Tiềm năng khởi nghiệp trong quy mô trường học</div>
                    </div>
                    <div className='lst-item'>
                        <img className='lst-item-image' src={RightOfUseImage2} alt='' />

                        <div className='lst-item-title'>THEO DÕI</div>
                        <div className='lst-item-content'>Hoạt động khởi nghiệp trong tổ chức của mình</div>
                    </div>
                    <div className='lst-item'>
                        <img className='lst-item-image' src={RightOfUseImage3} alt='' />
                        <div className='lst-item-title'>XẾP HẠNG</div>
                        <div className='lst-item-content'>Năng lực khởi nghiệp dựa trên tiêu chuẩn của bộ giáo dục và đào tạo</div>
                    </div>
                    <div className='lst-item'>
                        <img className='lst-item-image' src={RightOfUseImage4} alt='' />
                        <div className='lst-item-title'>CUNG CẤP</div>
                        <div className='lst-item-content'>Những thông tin, kiến thức về đánh giá năng lực khởi nghiệp hoàn toàn miễn phí</div>
                    </div>
                    <div className='lst-item'>
                        <img className='lst-item-image' src={RightOfUseImage5} alt='' />
                        <div className='lst-item-title'>CƠ HỘI</div>
                        <div className='lst-item-content'>Trao đổi, nhận tư vấn từ các chuyên gia đầu ngành về lĩnh vực khởi nghiệp tạo tác động</div>
                    </div>

                </div>
            </div>
            <div className='how-to-use'>
                <div className='tutorial-image'>
                    <img src={HowToUse} alt='' />
                </div>
                <div className='content'>
                    <div className='title'>Làm thế nào để sử dụng U.innovate?</div>
                    <div className='subtitle'>Các bước dưới đây hướng dẫn bạn về các tính năng và nội dung của U.innovate.</div>
                    <div className='step-lst'>
                        <div className='lst-item'>
                            <img className='img-item' src={HowToUse1} alt='' style={{ height: 30, width: 30 }} />
                            <div className='text-item'>Bạn cần tạo tài khoản của mình trên U.innovate</div>
                        </div>
                        <div className='lst-item'>
                            <img className='img-item' src={HowToUse2} alt='' style={{ height: 24, width: 30 }} />
                            <div className='text-item'>Bạn có thể có cái nhìn tổng quan về các tiêu chí và phương pháp của U.innovate</div>
                        </div>
                        <div className='lst-item'>
                            <img className='img-item' src={HowToUse3} alt='' style={{ height: 28, width: 30 }} />
                            <div className='text-item'>Bạn tiến hành tự động đánh giá thông qua các bước trên nền tảng U.innovate</div>
                        </div>
                        <div className='lst-item'>
                            <img className='img-item' src={HowToUse4} alt='' style={{ height: 30, width: 25 }} />
                            <div className='text-item'>Bạn có thể đọc báo cáo về cơ sở giáo dục của mình trên U.innovate hoặc download báo cáo về máy, hoặc gửi email báo cáo</div>
                        </div>
                        <div className='lst-item'>
                            <img className='img-item' src={HowToUse5} alt='' style={{ height: 27, width: 30 }} />
                            <div className='text-item'>Bạn có thể quay lại để tham khảo sự thay đổi của kết quả tự đánh giá và kết quả so sánh sau một thời gian</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='map-of-all-user'>

            </div>

            <div className='our-partner'>
                <div className='title'>Đối tác của chúng tôi</div>
                <div className='partner-lst'>
                    <div className='item'>1</div>
                    <div className='item'>2</div>
                    <div className='item'>3</div>
                    <div className='item'>4</div>
                    <div className='item'>5</div>
                    <div className='item'>6</div>
                </div>
            </div>
        </motion.div>
    )
}

export default Home