import classNames from "classnames/bind";
import styles from "./MatBang.module.scss";

const cx = classNames.bind(styles);
function MatBang() {
    return ( <div className={cx("wrapper")}>
        <h2>MatBang</h2>
    </div> );
}

export default MatBang;