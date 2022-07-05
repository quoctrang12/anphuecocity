import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import {Element} from "react-scroll"
import {
  TongQuan,
  ViTri,
  TienIch,
  MatBang,
  PhanKhu,
  ChinhSach,
  TienDoDuAn,
  DangKy,
  TinTuc,
  LienHe,
} from "~/pages/Home/Session";

const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx("wrapper")}>
      <Element className={cx("element")} name="TongQuan"><TongQuan /></Element>
      <Element className={cx("element")} name="ViTri"><ViTri /></Element>
      <Element className={cx("element")} name="TienIch"><TienIch /></Element>
      <Element className={cx("element")} name="MatBang"><MatBang /></Element>
      <Element className={cx("element")} name="PhanKhu"><PhanKhu /></Element>
      <Element className={cx("element")} name="ChinhSach"><ChinhSach /></Element>
      <Element className={cx("element")} name="TienDoDuAn"><TienDoDuAn /></Element>
      <Element className={cx("element")} name="DangKy"><DangKy /></Element>
      <Element className={cx("element")} name="TinTuc"><TinTuc /></Element>
      <Element className={cx("element")} name="LienHe"><LienHe /></Element>
      <p className={cx("phone")}>0123456789</p>
      <div className={cx("footer")}>&copy;2022 Copyright by Nguyen Quoc Trang</div>
    </div>
  );
}

export default Home;
