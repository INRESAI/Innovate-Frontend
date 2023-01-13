import { Button } from 'antd'
import React from 'react'
import IntroduceMethodImg from '../../images/introduce_method.png'

interface MyProps{
    tranferFromIntroToCriteria: () => void
}

const IntroduceMethod = (props: MyProps) => {
  return (
        <div className='introduce-method'>
            <div className='detail-intro'>
                <div className='title'>Giới thiệu, phương pháp được sử dụng trong bảng khảo sát</div>
                <div className='content'>
                    Tại đây, bạn có thể đọc về các yếu tố đánh giá của U.innovate và tải xuống ghi chú Khái niệm, cung cấp thông tin cơ bản về U.innovate và khái niệm về các trường đại học khởi nghiệp.
                </div>
                <div className='content'>
                    Để bắt đầu tự đánh giá, hãy chọn một trong 8 tiêu chí. Bằng cách nhấp vào sơ đồ, bạn sẽ được đưa đến tiêu chí đã chọn của U.innovate. Trong mỗi khía cạnh, các câu lệnh đã được thiết kế để bạn có thể đánh giá chúng theo 3 mức độ (không quan sát được, quan sát được một phần, quan sát toàn phần). Vui lòng sử dụng thanh trượt bên dưới các câu để ghi điểm.
                </div>
                <div className='btn-start-test'>
                    <Button className='button-start' onClick={() => props.tranferFromIntroToCriteria()}>
                        BẮT ĐẦU TỰ ĐÁNH GIÁ
                    </Button>
                    <img className='icon'/>
                </div>
            </div>
            <div className='image-of-intro'>
                <img src={IntroduceMethodImg}/>
            </div>
        </div>
  )
}

export default IntroduceMethod