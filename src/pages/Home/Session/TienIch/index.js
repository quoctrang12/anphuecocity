import classNames from "classnames/bind";
import styles from "./TienIch.module.scss";

const cx = classNames.bind(styles);
function TienIch() {
    return ( <div className={cx("wrapper")}>
        <h2>TienIch</h2>
    </div> );
}

export default TienIch;