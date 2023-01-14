import React from 'react'
import ImageOfIntro from '../../images/intro_image.png'
import AboutImage1 from '../../images/about_image_1.png'
import HowToUse from '../../images/how_to_use.png'
import HowToUse1 from '../../images/how_to_use1.png'
import HowToUse2 from '../../images/how_to_use2.png'
import HowToUse3 from '../../images/how_to_use3.png'
import HowToUse4 from '../../images/how_to_use4.png'
import HowToUse5 from '../../images/how_to_use5.png'
import MailImage from '../../images/mail_image.png'
import PhoneImage from '../../images/phone_image.png'
import WebImage from '../../images/web_image.png'
import FirewallImage from '../../images/Firewall_image.png'
import LayeredSecurityImage from '../../images/Layered_security_image.png'

import IntroMap from '../../images/intro-map.png'
import { Button } from 'antd'
import "../../App.scss";
import '../AboutUs/styles.aboutus.scss'
const AboutUs = () => {
    return (
        <div className='about-main'>
            <div className='intro-part'>
                <div className='text-of-intro'>
                    <div className='title' >Giới thiệu chung</div>
                    <div className='heading-2'>1. Về Bộ tiêu chí đánh giá Đại Học Đổi Mới Sáng Tạo Và Khởi Nghiệp (U.innovate):</div>
                    <div className='detail'>
                        Đây là một sáng kiến của Viện nghiên cứu Đổi mới và Phát triển (IID), được truyền cảm hứng và phát triển dựa trên mô hình đại học khởi nghiệp của OECD.<br />
                        Bộ tiêu chí U.innovate là một công cụ tự đánh giá miễn phí dành cho tất cả các loại hình tổ chức giáo dục đại học. Bộ tiêu chí này cho phép bạn đánh giá tổ chức của mình bằng cách sử dụng một số tuyên bố liên quan đến các hoạt động kinh doanh của tổ chức, bao gồm lãnh đạo, nhân sự và liên kết với doanh nghiệp. Các tài liệu hỗ trợ và đào tạo phong phú, bao gồm các nghiên cứu điển hình thực tế, luôn sẵn sàng để hỗ trợ các hội thảo và phát triển hơn nữa trong tổ chức của bạn.<br />
                        U.innovate dành cho các tổ chức giáo dục đại học (trường đại học, trường cao đẳng), những người quan tâm đến việc đánh giá bản thân dựa trên một số tuyên bố liên quan đến bản chất kinh doanh và đổi mới của môi trường giáo dục đại học của họ.<br />
                        Trong mỗi lĩnh vực trong số tám lĩnh vực, các tuyên bố đã được thiết kế để các cá nhân có thể đánh giá chúng theo thang điểm với 3 mức độ:<br />
                        <ul>
                            <li>Không quan sát được (no observation) (1 điểm)</li>
                            <li>Quan sát được một phần (partially observed) (3 điểm)</li>
                            <li>Quan sát được toàn phần (fully observed) (5 điểm)</li>
                        </ul>
                    </div>
                    <div className='heading-2'>2. Về Viện nghiên cứu Đổi mới và Phát triển (IID):</div>
                    <div className='detail'>
                        Ngày 10 tháng 7 năm 2018, Viện IID nhận giấy phép là tổ chức khoa học và công nghệ số A-1946 của Bộ Khoa học và Công nghệ, được hoạt động trong lĩnh vực nghiên cứu, cung cấp dịch vụ khoa học công nghệ và hợp tác trong nước và quốc tế liên quan đến đổi mới và phát triển.<br />
                        Viện Nghiên cứu Đổi mới và Phát triển trong giai đoạn đầu thành lập tập trung vào mảng nghiên cứu đổi mới và phát triển kinh tế. Từ năm 2021 đến nay, với bộ máy nhân sự mới, Viện IID đã có định hướng mới cho sự phát triển của mình, tập trung vào mảng đổi mới sáng tạo và phát triển bền vững, với phạm vi rộng hơn là đổi mới và phát triển kinh tế như trước.
                    </div>
                </div>
                <div className='image-of-intro'>
                    <img className='about-image-1' src={AboutImage1} alt='' />
                </div>
            </div>
            <div className='right-of-user'>
                <div className='title'>
                    Liên hệ IID
                </div>
                <div className='right-lst'>
                    <div className='menu-lst'>
                        <div className='lst-item'>
                            <img className='item-icon' src={MailImage} alt='' />
                            <a className='item-text' href="mailto:hello@iid.org.vn">hello@iid.org.vn</a>
                        </div>
                        <div className='lst-item'>
                            <img className='item-icon' src={PhoneImage} alt='' />
                            <a className='item-text' href="tel:+8424888651212">+8424888651212</a>
                        </div>
                        <div className='lst-item'>
                            <img className='item-icon' src={WebImage} alt='' />
                            <a className='item-text' href='https://www.facebook.com/iidvietnam' target="_blank">https://www.facebook.com/iidvietnam</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='privacy-legal'>
                <div className='content'>
                    <div className='content-box'>
                        <div className='title'>Privacy Policy</div>
                        <Button className='button'>Xem chi tiết</Button>
                        <img className='image' src={FirewallImage} alt='' />
                    </div>
                    <div className='content-box'>
                        <div className='title'>Legal notice</div>
                        <Button className='button'>Xem chi tiết</Button>
                        <img className='image' src={LayeredSecurityImage} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs