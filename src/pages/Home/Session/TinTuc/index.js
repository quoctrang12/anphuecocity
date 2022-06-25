import classNames from "classnames/bind";
import styles from "./TinTuc.module.scss";

const cx = classNames.bind(styles);
function TinTuc() {
    return ( <div className={cx("wrapper")}>
        <h2>TinTuc</h2>
    </div> );
}

export default TinTuc;