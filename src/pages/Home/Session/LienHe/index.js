import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGlobe, faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Title from "../components/Title";
import styles from "./LienHe.module.scss";

const cx = classNames.bind(styles);
function LienHe() {
    return ( <div className={cx("wrapper")}>
    <Title>LIÊN HỆ VỚI CHÚNG TÔI</Title>

    <div className={cx("container")}>
        <div className={cx("info")}>
            <h3 className={cx("")}>CÔNG TY CỔ PHẦN DỊCH VỤ & ĐỊA ỐC ĐẤT XANH MIỀN BẮC</h3>
            <div className={cx("detail")}>
                <p><FontAwesomeIcon icon={faHouse}/>{" "}Địa chỉ: 146E Trần Văn Hoài, Xuân Khánh, Ninh Kiều, Cần Thơ</p>
                <p><FontAwesomeIcon icon={faPhone}/>{" "}Hotline: 0978.372.988</p>
                <p><FontAwesomeIcon icon={faEnvelope}/>{" "}Email: cskh.dxgroup@gmail.com</p>
                <p><FontAwesomeIcon icon={faGlobe}/>{" "}Website: www.anphu-ecocity.net</p>
            </div>
        </div>
        <div className={cx("faq")}>
        <h3 className={cx("")}>CAM KẾT CỦA CHÚNG TÔI</h3>
            <div className={cx("detail")}>
                <ul>
                    <li>Cung cấp những thông tin nhanh chóng & cập nhật nhất từ chủ đầu tư.</li>
                    <li>Hỗ trợ quý khách tìm được căn tầng đẹp nhất.</li>
                    <li>Cung cấp bảng giá gốc, hỗ trợ quý khách tìm căn phù hợp với ngân sách.</li>
                    <li>Không thu thêm bất cứ khoản phí nào.</li>
                    <li>Hỗ trợ làm thủ tục trực tiếp với chủ đầu tư, trước và sau bán hàng lâu dài.</li>
                </ul>
            </div>
        </div>
    </div>
    </div> );
}

export default LienHe;