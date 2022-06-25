import classNames from "classnames/bind";
import styles from "./DangKy.module.scss";

const cx = classNames.bind(styles);
function DangKy() {
    return ( <div className={cx("wrapper")}>
        <h2>DangKy</h2>
    </div> );
}

export default DangKy;