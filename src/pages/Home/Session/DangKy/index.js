import classNames from "classnames/bind";
import Title from "../components/Title";
import styles from "./DangKy.module.scss";

const cx = classNames.bind(styles);
function DangKy() {
    return ( <div className={cx("wrapper")}>
        <Title>Đăng ký để nhận báo giá, chính sách ưu đãi</Title>
        <div className={cx("container")}>
            <div className={cx("content")}>
                <div>Liên hệ trực tiếp để được tư vấn:</div>
                <p className={cx("phone")}>0123456789</p>
                <div>Hoặc để lại thông tin bên dưới:</div>
            <input
                  type="text"
                  name="name"
                  placeholder="Họ và tên"
                  className={cx("input")}
                />
                <input
                  type="email"
                  name="name"
                  placeholder="Email"
                  className={cx("input")}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Số điện thoại"
                  className={cx("input")}
                />
                <textarea
                  name="description"
                  placeholder="Để lại lời nhắn cho chúng tôi"
                  className={cx("textarea")}
                />
                <button type="submit" className={cx("button")}>
                  Tu van dat cho
                </button>
            </div>
            <div className={cx("image")}>
                <img src="https://w.ladicdn.com/s1250x900/62957c1637739a005da4499d/an-phu-eco-city-can-tho-20220531070549.jpg" alt="" />
            </div>
        </div>
    </div> );
}

export default DangKy;