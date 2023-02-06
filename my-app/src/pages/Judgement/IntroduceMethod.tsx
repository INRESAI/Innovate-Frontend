import { Button, notification } from 'antd';
import "../../App.scss";
import IntroduceMethodImg from '../../images/introduce_method.png';
import './styles.judgement.scss';
import { useSelectorRoot } from '../../redux/store';

interface MyProps {
    tranferFromIntroToCriteria: () => void
}

const IntroduceMethod = (props: MyProps) => {
    const { tokenLogin, user } = useSelectorRoot((state) => state.login);

    const handleOnClick = () => {
        if (tokenLogin)
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
                <div className='title'>Giới thiệu, phương pháp được sử dụng trong bảng khảo sát</div>
                <div className='detail'>
                    Tại đây, bạn có thể đọc về các yếu tố đánh giá của U.innovate và tải xuống ghi chú Khái niệm, cung cấp thông tin cơ bản về U.innovate và khái niệm về các trường đại học khởi nghiệp.
                </div>
                <div className='detail'>
                    Để bắt đầu tự đánh giá, hãy chọn một trong 8 tiêu chí. Bằng cách nhấp vào sơ đồ, bạn sẽ được đưa đến tiêu chí đã chọn của U.innovate. Trong mỗi khía cạnh, các câu lệnh đã được thiết kế để bạn có thể đánh giá chúng theo 3 mức độ (không quan sát được, quan sát được một phần, quan sát toàn phần). Vui lòng sử dụng thanh trượt bên dưới các câu để ghi điểm.
                </div>
                <div >
                    <Button className='button-start' onClick={handleOnClick}>BẮT ĐẦU TỰ ĐÁNH GIÁ</Button>
                </div>
            </div>
            <div className='image-of-intro'><img src={IntroduceMethodImg} alt='' /></div>
        </div>
    )
}

export default IntroduceMethod