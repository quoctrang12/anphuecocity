import classNames from "classnames/bind";
import Title from "../components/Title";
import styles from "./PhanKhu.module.scss";

const cx = classNames.bind(styles);
function PhanKhu() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Title>CÁC PHÂN KHU CỦA AN PHÚ ECO CITY</Title>
        <div className={cx("")}>
          <div className={cx("row")}>
            <div className={cx("content")} style={{ width: "40%" }}>
              <div className={cx("title")}>KHU DIAMOND</div>
              <div className={cx("sub")}>
                Khu dành cho cư dân cao cấp được thiết kế theo phong cách địa
                trung hải dòng cao cấp với diện tích lớn. Thiết kế đa năng vừa
                kinh doanh tại tầng trệt mà gia đình vẫn sinh hoạt từ tầng 2 trở
                lên. Với phong cách Địa Trung Hải, quý vị có thể thấy thiết kế
                mở rất thông thoáng,cửa sổ bao quanh, những mái vòm mềm mại và
                ban công rộng. Từ ban công bạn có thể ngắm nhìn các tiện ích
                xung quanh cũng rất thú vị. – Khu Diamond ôm 3 mặt sông, dân cư
                thưa, sát bến du thuyền và trung tâm thương mại
              </div>
            </div>
            <div className={cx("image")}>
              <div className={cx("info-images")}>
                <img
                  src="https://w.ladicdn.com/s1300x1000/62957c1637739a005da4499d/vi-tri-1024x580-20220531074652.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={cx("row")}>
            <div className={cx("image")}>
              <div className={cx("info-images")}>
                <img
                  src="https://w.ladicdn.com/s1300x1000/62957c1637739a005da4499d/vi-tri-1024x580-20220531074652.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className={cx("content")} style={{ width: "45%" }}>
              <div className={cx("title")}>KHU SAPPHIRE</div>
              <div className={cx("sub")}>
                Khu Sapphire – Là khu cao cấp nhất tại An Phú EcoCity. Duy nhất
                trong Dự án có bán đảo biệt thự riêng: toàn bộ các căn hộ là
                tiền lộ hậu giang và tiền lộ hậu công viên . Khu Sapphire được
                bao quanh bởi bể bơi ngoài trời, sân bóng, bến du thuyền và dòng
                sông tự nhiên.
              </div>
            </div>
          </div>
          <div className={cx("row")}>
            <div className={cx("content")} style={{ width: "35%" }}>
              <div className={cx("title")}>KHU RUBY</div>
              <div className={cx("sub")}>
                Khu Ruby, bao gồm các căn hộ liền kề có diện tích trung bình.
                Theo tuyến đường đã được quy hoạch của thành phố Cần Thơ, cư dân
                di chuyển từ khu Ruby đến Quốc lộ 1 là gần nhất, giao thông rất
                thuận tiện và dễ dàng.– Khu Diamond ôm 3 mặt sông, dân cư thưa,
                sát bến du thuyền và trung tâm thương mại.
              </div>
            </div>
            <div className={cx("image")} style={{ marginRight: "100px" }}>
              <div className={cx("info-images")}>
                <img
                  src="https://w.ladicdn.com/s1300x1000/62957c1637739a005da4499d/vi-tri-1024x580-20220531074652.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={cx("row")}>
            <div className={cx("image")}>
              <div className={cx("info-images")}>
                <img
                  src="https://w.ladicdn.com/s1300x1000/62957c1637739a005da4499d/vi-tri-1024x580-20220531074652.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className={cx("content")} style={{ width: "45%" }}>
              <div className={cx("title")}>KHU SMART HOMES</div>
              <div className={cx("sub")}>
                Khu Smart Homes sở hữu diện tích rộng nhất trong Dự án với cư
                dân sầm uất nhất. Có công viên trung tâm, shophouse, bãi đỗ xe,
                trường học, di chuyển vài bước chân là tới bến du thuyền. – Khu
                Smart Homes sở hữu trọn bộ Phong cách Địa Trung Hải, Tân Cổ
                điển, hiện đại, 1 số dãy nhà được thiết kế theo phòng cách nhà
                phố NewYork hiện đại. – Các căn hộ và khu liền kề tại Smart
                Homes đáp ứng đa phần nhu cầu của khách hàng hiện nay.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhanKhu;
