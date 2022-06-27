import classNames from "classnames/bind";
import Title from "../components/Title";
import styles from "./LienHe.module.scss";

const cx = classNames.bind(styles);
function LienHe() {
    return ( <div className={cx("wrapper")}>
    <Title>LIÊN HỆ VỚI CHÚNG TÔI</Title>
    </div> );
}

export default LienHe;