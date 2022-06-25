import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);
function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
      <div><p>Tổng Quan</p></div>
      <div><p>Vị Trí</p></div>
      <div><p>Tiện Ích</p></div>
      <div><p>Mặt Bằng</p></div>
      <div><img className={cx("logo")} alt="logo" src="https://w.ladicdn.com/s500x400/62957c1637739a005da4499d/an-phu-logo-removebg-preview-20220531024115.png"/></div>
      <div><p>Chính Sách</p></div>
      <div><p>Tiến Độ Dự Án</p></div>
      <div><p>Tin Tức</p></div>
      <div><p>Liên Hệ</p></div>
      </div>
    </div>
  );
}

export default Header;
