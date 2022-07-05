import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import {Link} from "react-scroll"
const cx = classNames.bind(styles);
function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
      <div><Link to="TongQuan" activeClass="active" spy={true} smooth={true} duration={500}>Tổng Quan</Link></div>
      <div><Link to="ViTri" activeClass="active" spy={true} smooth={true} duration={500}>Vị Trí</Link></div>
      <div><Link to="TienIch" activeClass="active" spy={true} smooth={true} duration={500}>Tiện Ích</Link></div>
      <div><Link to="MatBang" activeClass="active" spy={true} smooth={true} duration={500}>Mặt Bằng</Link></div>
      <div><img className={cx("logo")} alt="logo" src="https://w.ladicdn.com/s500x400/62957c1637739a005da4499d/an-phu-logo-removebg-preview-20220531024115.png"/></div>
      <div><Link to="ChinhSach" activeClass="active" spy={true} smooth={true} duration={500}>Chính Sách</Link></div>
      <div><Link to="TienDoDuAn" activeClass="active" spy={true} smooth={true} duration={500}>Tiến Độ Dự Án</Link></div>
      <div><Link to="TinTuc" activeClass="active" spy={true} smooth={true} duration={500}>Tin Tức</Link></div>
      <div><Link to="LienHe" activeClass="active" spy={true} smooth={true} duration={500}>Liên Hệ</Link></div>
      </div>
    </div>
  );
}

export default Header;

