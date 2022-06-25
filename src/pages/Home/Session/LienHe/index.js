import classNames from "classnames/bind";
import styles from "./LienHe.module.scss";

const cx = classNames.bind(styles);
function LienHe() {
    return ( <div className={cx("wrapper")}>
        <h2>LienHe</h2>
    </div> );
}

export default LienHe;