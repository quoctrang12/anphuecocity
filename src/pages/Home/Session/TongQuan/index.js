import classNames from "classnames/bind";
import styles from "./TongQuan.module.scss";
import Title from "~/pages/Home/Session/components/Title";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);
function TongQuan() {
  const subImage = [
    "https://w.ladicdn.com/s950x650/62957c1637739a005da4499d/an-phu-eco-city-can-tho-1-20220531071407.jpg",
    "https://w.ladicdn.com/s950x650/62957c1637739a005da4499d/lien-ke-11-20220531160059.jpg",
    "https://w.ladicdn.com/s950x650/62957c1637739a005da4499d/eco-city-3-01-scaled-20220531160019.jpg",
  ];

  const [currentPos, setCurrentPos] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCurrentPos((prev) => (prev - 1 < 0 ? 2 : prev - 1));
    }, 3000);
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Title>An Phú Eco City Cần Thơ</Title>
        <div className={cx("content")}>
          <div className={cx("row")}>
            <div className={cx("slider")}>
              <div className={cx("main-slider")}>
                <img src={subImage[currentPos]} alt="" />
                <div className={cx("prev-next")}>
                  <button
                    onClick={() => {
                      setCurrentPos((prev) =>
                        prev - 1 < 0 ? subImage.length - 1 : prev - 1
                      );
                    }}
                  >
                    {"<"}
                  </button>
                  <button
                    onClick={() => {
                      if (currentPos > subImage.length - 1) {
                        setCurrentPos(0);
                      } else
                        setCurrentPos((prev) =>
                          prev + 1 > subImage.length - 1 ? 0 : prev + 1
                        );
                    }}
                  >
                    {">"}
                  </button>
                </div>
              </div>
              <div className={cx("sub-slider")}>
                {subImage.map((image, index) => (
                  <div
                    className={cx("sub-img")}
                    key={index}
                    onClick={() => {
                      setCurrentPos(index);
                    }}
                  >
                    <img src={image} alt="" />
                  </div>
                ))}
              </div>
            </div>
            <div className={cx("info")}>
              <div className={cx("info-details")}>
                <ul style={{listStyle: "none"}}>
                  <li>Tên dự án: An Phú Eco City</li>
                  <li>Chủ đầu tư: Công ty TNHH An Phú Cần Thơ</li>
                  <li>Diện tích đất: 10.2 ha.</li>
                  <li>Diện tích cây xanh mặt nước: 7.000m2</li>
                  <li>
                    Diện tích công viên lớn nhất, tích hợp tiện ích bể bơi du
                    thuyền trên kênh đào xuyên suốt dự án
                  </li>
                  <li>Diện tích bãi đậu xe: Hơn 5.000m2</li>
                  <li>Hình thức sở hữu: Sổ hồng lâu dài</li>
                  <li>Giá bán: NHẬN BÁO GIÁ TẠI ĐÂY</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={cx("row")}>
            <div className={cx("info-details")}>
              Khu đô thị An Phú EcoCity sở hữu vị trí vàng hoàn hảo “Nhất cận
              thị, nhị cận giang, tam cận lộ”, mang đến tài lộc, vượng khí cho
              chủ nhân. Các căn hộ được bao quanh bởi dòng sông thơ mộng, kết
              nối nhanh chóng đến quốc lộ 1A. Với những lợi thế sẵn có, An Phú
              EcoCity không chỉ là cùng đất an lành để an cư lập nghiệp cho chủ
              nhân mà còn là nơi tràn đầy vượng khí, nơi sinh lời lý tưởng cho
              các nhà đầu tư bất động sản.
            </div>
          </div>
        </div>
      </div>
      <div className={cx("video")}>
        <iframe
          className={cx("video-main")}
          src="https://www.youtube.com/embed/WznuCALoRpY?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay;"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default TongQuan;
