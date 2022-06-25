import classNames from "classnames/bind";
import styles from "./Home.module.scss";

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
      <TongQuan />
      <ViTri />
      <TienIch />
      <MatBang />
      <PhanKhu />
      <ChinhSach />
      <TienDoDuAn />
      <DangKy />
      <TinTuc />
      <LienHe />
    </div>
  );
}

export default Home;
