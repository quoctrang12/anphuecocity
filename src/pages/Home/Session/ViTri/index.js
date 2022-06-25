import classNames from "classnames/bind";
import styles from "./ViTri.module.scss";

const cx = classNames.bind(styles);
function ViTri() {
    return ( <div className={cx("wrapper")}>
        <h2>ViTri</h2>
    </div> );
}

export default ViTri;