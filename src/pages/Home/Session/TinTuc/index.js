import classNames from "classnames/bind";
import Title from "../components/Title";
import styles from "./TinTuc.module.scss";

const cx = classNames.bind(styles);
function TinTuc() {
  return (
    <div className={cx("wrapper")}>
      <Title>TIN TỨC CẬP NHẬT</Title>
      <div className={cx("container")}>
        <div className={cx("content")}>
        <div className={cx("box")}>
            <a href="https://www.facebook.com">
              <div className={cx("image")}>
                <img
                  src="https://w.ladicdn.com/s600x500/62957c1637739a005da4499d/cho-noi-cai-rang-2_1624262882-20220604030846.jpg"
                  alt=""
                />
              </div>
              <div className={cx("text")}>
                Chợ nổi Cái Răng Cần Thơ - Trải nghiệm độc đáo tại miền Tây sông
                nước
              </div>
            </a>
          </div><div className={cx("box")}>
            <a href="https://www.facebook.com">
              <div className={cx("image")}>
                <img
                  src="https://w.ladicdn.com/s600x500/62957c1637739a005da4499d/cho-noi-cai-rang-2_1624262882-20220604030846.jpg"
                  alt=""
                />
              </div>
              <div className={cx("text")}>
                Chợ nổi Cái Răng Cần Thơ - Trải nghiệm độc đáo tại miền Tây sông
                nước
              </div>
            </a>
          </div><div className={cx("box")}>
            <a href="https://www.facebook.com">
              <div className={cx("image")}>
                <img
                  src="https://w.ladicdn.com/s600x500/62957c1637739a005da4499d/cho-noi-cai-rang-2_1624262882-20220604030846.jpg"
                  alt=""
                />
              </div>
              <div className={cx("text")}>
                Chợ nổi Cái Răng Cần Thơ - Trải nghiệm độc đáo tại miền Tây sông
                nước
              </div>
            </a>
          </div><div className={cx("box")}>
            <a href="https://www.facebook.com">
              <div className={cx("image")}>
                <img
                  src="https://w.ladicdn.com/s600x500/62957c1637739a005da4499d/cho-noi-cai-rang-2_1624262882-20220604030846.jpg"
                  alt=""
                />
              </div>
              <div className={cx("text")}>
                Chợ nổi Cái Răng Cần Thơ - Trải nghiệm độc đáo tại miền Tây sông
                nước
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TinTuc;
