import classNames from "classnames/bind";
import Title from "../components/Title";
import styles from "./TinTuc.module.scss";

const cx = classNames.bind(styles);
function TinTuc() {
    return ( <div className={cx("wrapper")}>
        <Title>TIN TỨC CẬP NHẬT</Title>
    </div> );
}

export default TinTuc;