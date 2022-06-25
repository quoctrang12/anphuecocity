import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

import Header from "./Header";

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("banner")}>
        <div className={cx("text")}>
          <h3 className={cx("title")}>An phu eco city</h3>
          <p className={cx("line")}></p>
          <p className={cx("des")}>
            CƯ AN LÀNH - ĐỊA PHÚ QUÝ <br />
            Kiến tạo phong cách sống Châu Âu
          </p>
        </div>
      </div>
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
