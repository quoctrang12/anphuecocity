import classNames from "classnames/bind";
import Title from "../components/Title";
import styles from "./TienDoDuAn.module.scss";

const cx = classNames.bind(styles);
function TienDoDuAn() {
    return ( <div className={cx("wrapper")}>
        <Title>Tiến độ dự án An Phú Eco City</Title>
    </div> );
}

export default TienDoDuAn;