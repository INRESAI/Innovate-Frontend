import { Button } from 'antd'
import { Variants, motion } from 'framer-motion'
import FirewallImage from '../../images/Firewall_image.png'
import LayeredSecurityImage from '../../images/Layered_security_image.png'
import AboutImage1 from '../../images/about_image_1.png'
import MailImage from '../../images/mail_image.png'
import PhoneImage from '../../images/phone_image.png'
import WebImage from '../../images/web_image.png'
import '../AboutUs/styles.aboutus.scss'
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
const hoverVariants = {
    hover: {
        scale: 1.1,
        borderRadius: '30px'
    },
    tap: {
        scale: 0.8
    },
};
// Phần giới thiệu về chúng tôi ở trang web
const AboutUs = () => {
    return (
        <motion.div className='about-main'
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
            <div className='intro-part'>
                <div className='text-of-intro'>
                    <div className='title' >Giới thiệu chung</div>
                    <div className='heading-2'>1. Về nền tảng đánh giá, xếp hạng các trường đại học, cao đẳng; tỉnh thành phố về đổi mới sáng tạo, khởi nghiệp và tạo tác động (V.innovate):</div>
                    <div className='detail'>
                        Đây là một sáng kiến của Viện nghiên cứu Đổi mới và Phát triển (IID), được truyền cảm hứng và phát triển dựa trên nền tảng HEInnovate, mô hình đại học khởi nghiệp của OECD.<br />
                        V.innovate là một nền tảng gồm 3 công cụ (U.innovate; U.impact; P.innovate) tự đánh giá miễn phí dành cho tất cả các loại hình tổ chức giáo dục đại học; các doanh nghiệp khởi nghiệp; các tỉnh/thành phố.<br />
                        Các công cụ cho phép bạn đánh giá tổ chức của mình bằng cách sử dụng một số tuyên bố liên quan đến các hoạt động kinh doanh của tổ chức, bao gồm lãnh đạo, nhân sự và liên kết với doanh nghiệp. Các tài liệu hỗ trợ và đào tạo phong phú, bao gồm các nghiên cứu điển hình thực tế, luôn sẵn sàng để hỗ trợ các hội thảo và phát triển hơn nữa trong tổ chức của bạn.<br />
                        <ul>
                            <li><strong>U.innovate:</strong> dành cho các tổ chức giáo dục đại học (trường đại học, trường cao đẳng), những người quan tâm đến việc đánh giá bản thân dựa trên một số tuyên bố liên quan đến bản chất kinh doanh và đổi mới của môi trường giáo dục đại học của họ.</li>
                            <li><strong>U.impact:</strong> dành cho các tổ chức giáo dục đại học (trường đại học, trường cao đẳng), những người quan tâm đến việc đánh giá bản thân dựa trên một số tuyên bố liên quan đến bản chất kinh doanh và đổi mới của môi trường giáo dục đại học của họ thông qua 17 mục tiêu phát triển bền vững thuộc Liên Hợp Quốc.</li>
                            <li><strong>P.innovate:</strong>  dành cho các cộng đồng khởi nghiệp tại từng tỉnh/thành phố</li>
                        </ul>
                    </div>
                    <div className='heading-2'>2. Về Viện nghiên cứu Đổi mới và Phát triển (IID):</div>
                    <div className='detail'>
                        Ngày 10 tháng 7 năm 2018, Viện IID nhận giấy phép là tổ chức khoa học và công nghệ số A-1946 của Bộ Khoa học và Công nghệ, được hoạt động trong lĩnh vực nghiên cứu, cung cấp dịch vụ khoa học công nghệ và hợp tác trong nước và quốc tế liên quan đến đổi mới và phát triển.<br />
                        Viện Nghiên cứu Đổi mới và Phát triển trong giai đoạn đầu thành lập tập trung vào mảng nghiên cứu đổi mới và phát triển kinh tế. Từ năm 2021 đến nay, với bộ  máy nhân sự mới, Viện IID đã có định hướng mới cho sự phát triển của mình, tập trung vào mảng đổi mới sáng tạo và phát triển bền vững, với phạm vi rộng hơn là đổi mới và phát triển kinh tế như trước.
                    </div>
                </div>
                <div className='image-of-intro'>
                    <motion.img className='about-image-1' src={AboutImage1} alt=''
                        variants={imageVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 'all' }} />
                </div>
            </div>

            <div id="about-2">
                <div className="content-box-lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="about-item text-center">
                                    <i className="fa fa-book"></i>
                                    <h3>TẦM NHÌN</h3>
                                    <hr />
                                    <p> Viện IID định vị mình là trung tâm tri thức, là tổ chức xây dựng hệ sinh thái hàng đầu cho đổi mới, sáng tạo vì phát triển bền vững tại Việt Nam. Viện IID cung cấp các nghiên cứu, các nền tảng thông tin, tri thức liên quan đến đổi mới sáng tạo, đồng thời là nơi kết nối các nguồn lực trong nước và quốc tế, nguồn lực công, tư và cộng đồng giúp xây dựng một hệ sinh thái mạnh cho đổi mới, sáng tạo và khởi nghiệp vì xã hội tại Việt Nam.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="about-item text-center">
                                    <i className="fa fa-globe"></i>
                                    <h3>SỨ MỆNH</h3>
                                    <hr />
                                    <p> Viện IID ra đời với sứ mệnh thúc đẩy các nguồn lực đặc biệt là nguồn nhân lực trẻ giúp Việt Nam trở thành một quốc gia đổi mới, sáng tạo, có tính thần khởi nghiệp và phát triển bền vững.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="about-item text-center">
                                    <i className="fa fa-pencil"></i>
                                    <h3>GIÁ TRỊ CỐT LÕI</h3>
                                    <hr />
                                    <p> Thúc đẩy các chính sách khuyến khích đổi mới để phát triển kinh tế, nâng cao nhận thức xã hội và môi trường Việt Nam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-of-user'>
                <div className='title'>
                    Liên hệ IID
                </div>
                <div className='right-lst'>
                    <div className='menu-lst'>
                        <motion.div className='lst-item'
                            whileHover="hover"
                            whileTap="tap"
                            variants={hoverVariants}>
                            <img className='item-icon' src={MailImage} alt='' />
                            <a className='item-text' href="mailto:hello@iid.org.vn">hello@iid.org.vn</a>
                        </motion.div>
                        <motion.div className='lst-item'
                            whileHover="hover"
                            whileTap="tap"
                            variants={hoverVariants}>
                            <img className='item-icon' src={PhoneImage} alt='' />
                            <a className='item-text' href="tel:+8424888651212">0329109899</a>
                        </motion.div>
                        <motion.div className='lst-item'
                            whileHover="hover"
                            whileTap="tap"
                            variants={hoverVariants}>
                            <img className='item-icon' src={WebImage} alt='' />
                            <a className='item-text' href='https://www.facebook.com/iidvietnam' target="_blank">https://www.facebook.com/iidvietnam</a>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className='privacy-legal'>
                <div className='content'>
                    <motion.div className='content-box' whileHover="hover"
                        whileTap="tap"
                        variants={hoverVariants}>
                        <div className='title'>Privacy Policy</div>
                        <motion.div
                            style={{ width: '100px' }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                            <Button className='button'>Xem chi tiết</Button>
                        </motion.div>
                        <img className='image' src={FirewallImage} alt='' />
                    </motion.div>
                    <motion.div className='content-box' whileHover="hover"
                        whileTap="tap"
                        variants={hoverVariants}>
                        <div className='title'>Legal notice</div>
                        <motion.div
                            style={{ width: '100px' }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                            <Button className='button'>Xem chi tiết</Button>
                        </motion.div>
                        <img className='image' src={LayeredSecurityImage} alt='' />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutUs