import classNames from "classnames/bind";
import styles from "./TienDoDuAn.module.scss";

const cx = classNames.bind(styles);
function TienDoDuAn() {
    return ( <div className={cx("wrapper")}>
        <h2>TienDoDuAn</h2>
    </div> );
}

export default TienDoDuAn;