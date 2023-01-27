import "../../App.scss";
import "./styles.footer.scss";

// Phần footer của trang web
export default function CFooter() {
    return (
        <div className='footer-main' id='footer-main'>
            <div className='separation-line'></div>
            <div className='content'>
                <div className='content-left'>
                    The U.innovate for design, creativity and innovation on the Internet
                </div>
            </div>
            <div className='content'>
                <div className='content-left'>
                    <a className='link-to-page' href='/'>Trang chủ</a>
                    <a className='link-to-page' href='/evaluate'>Đánh giá</a>
                    <a className='link-to-page' href='/news'>Tin tức</a>
                    <a className='link-to-page' href='/about_us'>Về chúng tôi</a>
                    <a className='link-to-page' href='/about_us'>Legal Notice</a>
                </div>
            </div>
            <div className='content'>
                <div className='content-left'>
                    <div className='text-bold'>Follow us</div>
                    <a className='link-to-social' href="mailto:hello@iid.org.vn">Emali: hello@iid.org.vn</a>
                    <a className='link-to-social' href="tel:+8424888651212">Điện thoại: +8424888651212</a>
                    <a className='link-to-social' href='https://www.facebook.com/iidvietnam' target="_blank">Social media: https://www.facebook.com/iidvietnam</a>
                </div>
            </div>
        </div>
    );
}