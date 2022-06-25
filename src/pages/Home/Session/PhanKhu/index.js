import classNames from "classnames/bind";
import styles from "./PhanKhu.module.scss";

const cx = classNames.bind(styles);
function PhanKhu() {
    return ( <div className={cx("wrapper")}>
        <h2>PhanKhu</h2>
    </div> );
}

export default PhanKhu;