import classNames from "classnames/bind";
import styles from "./TongQuan.module.scss";
import Title from "~/pages/Home/Session/components/Title"
const cx = classNames.bind(styles);
function TongQuan() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Title>An Phú Eco City Cần Thơ</Title>
        <div className={cx("content")}>
          <div className={cx("row")}>
            <div className={cx("slider")}>
              <div className={cx("main-slider")}></div>
              <div className={cx("sub-slider")}>
                <div className={cx("sub-img")}></div>
                <div className={cx("sub-img")}></div>
                <div className={cx("sub-img")}></div>
                <div className={cx("sub-img")}></div>
                <div className={cx("sub-img")}></div>
              </div>
            </div>
            <div className={cx("info")}>
              <div className={cx("info-details")}></div>
            </div>
          </div>
          <div className={cx("row")}>
            <div className={cx("info-details")}>
            Khu đô thị An Phú EcoCity sở hữu vị trí vàng hoàn hảo “Nhất cận thị, nhị cận giang, tam cận lộ”, mang đến tài lộc, vượng khí cho chủ nhân. Các căn hộ được bao quanh bởi dòng sông thơ mộng, kết nối nhanh chóng đến quốc lộ 1A. Với những lợi thế sẵn có, An Phú EcoCity không chỉ là cùng đất an lành để an cư lập nghiệp cho chủ nhân mà còn là nơi tràn đầy vượng khí, nơi sinh lời lý tưởng cho các nhà đầu tư bất động sản.
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
