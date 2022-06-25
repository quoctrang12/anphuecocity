import classNames from "classnames/bind";
import styles from "./TongQuan.module.scss";

const cx = classNames.bind(styles);
function TongQuan() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
            <div className={cx("title")}>
                <h3 className={cx("name-title")}>An Phu Eco City Can Tho</h3>
                <div className={cx("")}>
                    <img src="https://w.ladicdn.com/s500x350/5c7362c6c417ab07e5196b05/decor1-20210313073005.png" alt=""/>
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
