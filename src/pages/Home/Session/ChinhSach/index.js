import classNames from "classnames/bind";
import Title from "../components/Title";
import styles from "./ChinhSach.module.scss";

const cx = classNames.bind(styles);
function ChinhSach() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Title>Chính sách bán hàng An Phú Eco City</Title>
        <div className={cx("content")}>
          <div className={cx("row")}>
            <div className={cx("info")}></div>
            <div className={cx("gift")}></div>
          </div>
          <div className={cx("row")}>
            <div className={cx("file")}></div>
            <div className={cx("form")}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChinhSach;
