import classNames from "classnames/bind";
import Title from "../components/Title";
import styles from "./TienDoDuAn.module.scss";

const cx = classNames.bind(styles);
function TienDoDuAn() {
  return (
    <div className={cx("wrapper")}>
      <Title>Tiến độ dự án An Phú Eco City</Title>
      <div className={cx("container")}>
        <div className={cx("content")}>
          Tiến độ dự án An Phú Eco City Dự án An Phú Ecocity đang trong quá
          trình triển khai làm hệ thống cống thoát nước, điện ngầm, san lấp mặt
          bằng, rải base làm đường asphalt.
          <br />
          Chủ đầu tư đang xây nhà hàng, cafe trước tiên để khách hàng đến thăm
          quan dự án có thể ghé thăm, ngồi nghe nhân viên bán hàng tư vấn.{" "}
          <br />
          Đây là đợt đầu mở bán của An Phú 2 (tức Ecocity), giá bán đợt đầu rất
          tốt cả nhà + xây dựng chỉ từ 2 TỶ/căn 1 trệt 2 lầu. <br />
          Tính ra chỉ hơn 10 triệu/m2 đất quận Cái Răng, vị trí đi lại thuận
          tiện, môi trường sống trong lành.
        </div>
        <div className={cx("slider")}>
          <div className={cx("img-main")}>
            <img
              src="https://w.ladicdn.com/s1550x1050/62957c1637739a005da4499d/z3481551725975_b4170a29973eb7fcb6754720d2f1ac16-20220614020638.jpg"
              alt=""
            />
          </div>
          <div className={cx("img-sub")}>
            <div className={cx("images")}>
              <img
                src="https://w.ladicdn.com/s1550x1050/62957c1637739a005da4499d/z3481551725975_b4170a29973eb7fcb6754720d2f1ac16-20220614020638.jpg"
                alt=""
              />
            </div>
            <div className={cx("images")}>
              <img
                src="https://w.ladicdn.com/s1550x1050/62957c1637739a005da4499d/z3481551725975_b4170a29973eb7fcb6754720d2f1ac16-20220614020638.jpg"
                alt=""
              />
            </div>
            <div className={cx("images")}>
              <img
                src="https://w.ladicdn.com/s1550x1050/62957c1637739a005da4499d/z3481551725975_b4170a29973eb7fcb6754720d2f1ac16-20220614020638.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TienDoDuAn;
