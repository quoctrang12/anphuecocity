import classNames from "classnames/bind";
import Title from "../components/Title";
import styles from "./TienIch.module.scss";

const cx = classNames.bind(styles);
function TienIch() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Title>TIỆN ÍCH AN PHÚ ECO CITY</Title>

        <div className={cx("content")}>
          Định hướng trở thành một khu đô thị khép kín đẳng cấp An Phú Eco City
          sở hữu vô vàn tiện ích nội khu đa dạng, chất lượng và đầy đủ nhất cho
          mọi cư dân. Ngoài ra sở hữu vị trí trung tâm quận Cái Răng, cơ dân tại
          An Phú Eco City chỉ mất chưa tới 5 phút để di chuyển vào trung tâm
          Thành Phố Cần Thơ và kết nối với hàng trăm tiện ích khác
        </div>
        <div className={cx("info-images")}>
          <img
            src="https://w.ladicdn.com/s1300x900/62957c1637739a005da4499d/screenshot-24-20220531075841.png"
            alt=""
          />
        </div>
        <div className={cx("info-images")}>
          <img
            src="https://w.ladicdn.com/s1300x950/62957c1637739a005da4499d/screenshot-25-20220531075841.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default TienIch;
