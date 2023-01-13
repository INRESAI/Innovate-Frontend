import { Button } from 'antd'
import React from 'react'
import './styles.home.scss'
import "../../App.scss";
import ImageOfIntro from '../../images/intro_image.png'
import HowToUse from '../../images/how_to_use.png'
import HowToUse1 from '../../images/how_to_use1.png'
import HowToUse2 from '../../images/how_to_use2.png'
import HowToUse3 from '../../images/how_to_use3.png'
import HowToUse4 from '../../images/how_to_use4.png'
import HowToUse5 from '../../images/how_to_use5.png'
import IntroMap from '../../images/intro-map.png'


const Home = () => {
    return (
        <div className='main-home'>
            <div className='intro-part'>
                <div className='text-of-intro'>
                    <div className='title' >Tổ chức Giáo dục Đại học của bạn đã chuẩn bị sẵn sàng cho những thách thức trong tương lai chưa?</div>
                    <div className='detail'>Quốc gia khởi nghiệp là một trong những ưu tiên phát triển của Việt Nam từ năm 2016 đến nay. Nhiều chương trình quốc gia đã được phê duyệt và triển khai sâu rộng trên toàn quốc như đề án 844, 1665, 939. Trường đại học, cao đẳng cần là cốt lõi cho hệ sinh thái khởi nghiệp, đổi mới sáng tạo quốc gia, vì ở đó là nơi tạo ra tri thức, chia sẻ tri thức, cũng như phát triển nhân tài cho đổi mới sáng tạo và khởi nghiệp.</div>
                    <div>
                        <Button className='button-start'>Bắt đầu tự đánh giá</Button>
                        <img src='' />
                    </div>
                </div>
                <div className='image-of-intro'>
                    <img src={ImageOfIntro} />
                </div>
            </div>
            <div className='right-of-user'>
                <div style={{ height: "225px" }}></div>
                <div className='title'>
                    Quyền lợi khi sử dụng U.innovate
                </div>
                <div className='right-lst'>
                    <div className='lst-item'>
                        <div>ĐÁNH GIÁ</div>
                        <div>Tiềm năng khởi nghiệp trong quy mô trường học</div>
                    </div>
                    <div className='lst-item'>
                        <div>THEO DÕI</div>
                        <div>Hoạt động khởi nghiệp trong tổ chức của mình</div>
                    </div>
                    <div className='lst-item'>
                        <div>XẾP HẠNG</div>
                        <div>Năng lực khởi nghiệp dựa trên tiêu chuẩn của bộ giáo dục và đào tạo</div>
                    </div>
                    <div className='lst-item'>
                        <div>CUNG CẤP</div>
                        <div>Những thông tin, kiến thức về đánh giá năng lực khởi nghiệp hoàn toàn miễn phí</div>
                    </div>
                    <div className='lst-item'>
                        <div>CƠ HỘI</div>
                        <div>Trao đổi, nhận tư vấn từ các chuyên gia đầu ngành về lĩnh vực khởi nghiệp tạo tác động</div>
                    </div>

                </div>
            </div>
            <div className='how-to-use'>
                <div className='tutorial-image'>
                    <img src={HowToUse} />
                </div>
                <div className='content'>
                    <div className='title'>Làm thế nào để sử dụng U.innovate?</div>
                    <div className='subtitle'>Các bước dưới đây hướng dẫn bạn về các tính năng và nội dung của U.innovate.</div>
                    <div className='step-lst'>
                        <div className='lst-item'>
                            <img className='img-item' src={HowToUse1} />
                            <div>Bạn cần tạo tài khoản của mình trên U.innovate</div>
                        </div>
                        <div className='lst-item'>
                            <img className='img-item' src={HowToUse2} />
                            <div>Bạn có thể có cái nhìn tổng quan về các tiêu chí và phương pháp của U.innovate</div>
                        </div>
                        <div className='lst-item'>
                            <img className='img-item' src={HowToUse3} />
                            <div>Bạn tiến hành tự động đánh giá thông qua các bước trên nền tảng U.innovate</div>
                        </div>
                        <div className='lst-item'>
                            <img className='img-item' src={HowToUse4} />
                            <div>Bạn có thể đọc báo cáo về cơ sở giáo dục của mình trên U.innovate hoặc download báo cáo về máy, hoặc gửi email báo cáo</div>
                        </div>
                        <div className='lst-item'>
                            <img className='img-item' src={HowToUse5} />
                            <div>Bạn có thể quay lại để tham khảo sự thay đổi của kết quả tự đánh giá và kết quả so sánh sau một thời gian</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='map-of-all-user'>
                <img src={IntroMap}></img>
            </div>
            <div className='our-partner'>
                <div style={{ height: "43px" }}></div>
                <div className='title'>Đối tác của chúng tôi</div>
                <div className='partner-lst'>

                </div>
                <div className='partner-lst'>

                </div>
            </div>
        </div>
    )
}

export default Home