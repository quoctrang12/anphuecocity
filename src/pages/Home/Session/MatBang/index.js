import classNames from "classnames/bind";
import Title from "../components/Title";
import styles from "./MatBang.module.scss";

const cx = classNames.bind(styles);
function MatBang() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Title>MẶT BẰNG DỰ ÁN AN PHÚ ECO CITY</Title>
        <div className={cx("info-images")}>
          <img
            src="https://w.ladicdn.com/s1300x1000/62957c1637739a005da4499d/an-phu-eco-city-11-20220531080432.png"
            alt=""
          />
        </div>
        <div className={cx("content")}>
          – Đất công viên cây xanh – TDTT, mặt
          nước có diện tích khoảng 9.174m2, Nhà đầu tư sẽ trồng cây xanh, tạo
          cảnh quan mặt nước cho dự án theo quy hoạch được phê duyệt <br/>– Đất giao
          thông và hạ tầng kỹ thuật chiếm diện tích khoảng 22.972m2: Nhà đầu tư
          xây dựng các hạng mục hạ tầng ký thuật đồng bộ như: giao thông, cấp
          điện, cấp nước, thoát nước. Nhà đầu tư sẽ bàn giao cho địa phương quản
          lý bằng hình thức khấu trừ tiền sử dụng đất <br/>– Đất công trình phụ trợ
          bao gồm: Thương mại dịch vụ, nhà hàng, bãi đậu xe và bể bơi có diện
          tích khoảng 15.018m2. <br/>– Đất xây dựng nhà ở xã hội có diện tích khoảng
          9.840m2, Nhà đầu tư sẽ đầu tư xây dựng chung cư nhà ở xã hội cao tầng
          (dự kiến khoảng 05 tầng), với khoảng 150 căn hộ nhà ở xã hội và Nhà ở
          xã hội liền kề thấp tầng dự kiến khoảng 99 căn nhà để giải quyết nhu
          cầu về nhà ở cho đối tượng cán bộ, giáo viên, người thu nhập thấp, …
          trên địa bàn thành phố
        </div>
      </div>
    </div>
  );
}

export default MatBang;
