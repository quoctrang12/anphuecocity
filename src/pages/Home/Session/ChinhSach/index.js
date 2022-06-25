import classNames from "classnames/bind";
import styles from "./ChinhSach.module.scss";

const cx = classNames.bind(styles);
function ChinhSach() {
    return ( <div className={cx("wrapper")}>
        <h2>ChinhSach</h2>
    </div> );
}

export default ChinhSach;