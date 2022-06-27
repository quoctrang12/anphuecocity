import classNames from "classnames/bind";
import Title from "../components/Title";
import styles from "./ViTri.module.scss";

const cx = classNames.bind(styles);
function ViTri() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Title>VỊ TRÍ DỰ ÁN</Title>
        <div className={cx("info-images")}>
          <img
            src="https://w.ladicdn.com/s1300x1000/62957c1637739a005da4499d/vi-tri-1024x580-20220531074652.jpg"
            alt=""
          />
        </div>
        <div className={cx("content")}>
          An Phú Eco City là khu đô thị hiện đại, đáng sống nhất tại Cái Răng,
          nằm trên đường Trương Vĩnh Nguyên yên tĩnh, kết nối ngay tuyến đường
          huyết mạch Phạm Hùng, QL1A, quốc lộ 61C…
          <br /> Với vị trí là giao điểm của hai trục kinh tế – đô thị năng động
          nhất của vùng ÐBSCL là trục hành lang TP Hồ Chí Minh – TP Cần Thơ và
          trục sông Hậu (An Giang – Cần Thơ – Sóc Trăng), TP Cần Thơ là đầu mối
          giao thông quan trọng về đường bộ, đường thủy, đường sắt, đường hàng
          không và là địa bàn trọng yếu chiến lược về quốc phòng – an ninh của
          vùng. TP Cần Thơ có tài nguyên thiên nhiên phong phú, nhất là tài
          nguyên đất và nước, với hậu phương rộng lớn là cả vùng ÐBSCL với nhiều
          tiềm năng, thuận lợi để phát triển về nông nghiệp, công nghiệp, du
          lịch, kết nối giao thương và hợp tác quốc tế
        </div>
      </div>
    </div>
  );
}

export default ViTri;
