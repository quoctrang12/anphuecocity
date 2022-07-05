import classNames from "classnames/bind";
import Title from "../components/Title";
import styles from "./ChinhSach.module.scss";

const cx = classNames.bind(styles);
function ChinhSach() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Title>Chính sách bán hàng An Phú Eco City</Title>
        <div className={cx("content")}>
          <div className={cx("row")}>
            <div className={cx("info")}>
              <div>
                Chủ đầu tư An Phú là một chủ đầu tư rất uy tín được minh chứng
                bởi các dự án đã triển khai như An Phú Residence Vĩnh Yên, An
                Phú 1 tại quận Cái Răng, các dự án của An Phú đều hoàn thiện đầy
                đủ pháp lý mới đưa sản phẩm đến tay khách hàng. Hiện CĐT An Phú
                đang hỗ trợ khách hàng các chính sách ưu đãi như sau:
              </div>
              <ul style={{ marginLeft: "50px" }}>
                <li>
                  Hỗ trợ ngân hàng giải ngân 70% giá trị căn nhà, miễn lãi 12
                  tháng đầu
                </li>
                <li>
                  Không vay, thanh toán theo tiến độ (14 đợt trong 20 tháng)
                  nhận chiết khấu 3%
                </li>
                <li>
                  Thanh toán sớm 95%, nhận ngay chiết khấu 10% trừ trực tiếp vào
                  giá bán
                </li>
                <li>
                  Mua sỉ 2 căn chiết khấu 1%, Mua sỉ từ 3 căn nhận chiết khấu
                  1,5% giá bán
                </li>
              </ul>
            </div>
            <div className={cx("gift")}>
              <img src="" alt="" />
            </div>
          </div>
          <div className={cx("box")}>
            <div className={cx("box-group")}>
              <div className={cx("file")}>
                <div className={cx("file-image")}>
                  <img
                    src="https://w.ladicdn.com/s350x350/5f21c40d58ec0c18ea5e1bac/ocyclar-20211211061241.png"
                    alt=""
                  />
                  <h3 className={cx("file-name")}>
                    Chính sách bán hàng An Phu Eco City - New.pdf
                  </h3>
                </div>
                <div className={cx("file-image")}>
                  <img
                    src="https://w.ladicdn.com/s350x350/5f21c40d58ec0c18ea5e1bac/ocyclar-20211211061241.png"
                    alt=""
                  />
                  <h3 className={cx("file-name")}>
                    Quỹ căn đẹp ngoại giao.pdf
                  </h3>
                </div>
                <div className={cx("file-image")}>
                  <img
                    src="https://w.ladicdn.com/s350x350/5f21c40d58ec0c18ea5e1bac/ocyclar-20211211061241.png"
                    alt=""
                  />
                  <h3 className={cx("file-name")}>Bảng giá ưu đãi.pdf</h3>
                </div>
                <div className={cx("file-image")}>
                  <img
                    src="https://w.ladicdn.com/s350x350/5f21c40d58ec0c18ea5e1bac/ocyclar-20211211061241.png"
                    alt=""
                  />
                  <h3 className={cx("file-name")}>
                    Sơ đồ phân lô An Phú Ecocity.pdf
                  </h3>
                </div>
                <div>
                  Quý ANH/CHỊ vui lòng nhập chính xác thông tin số điện thoại và
                  địa chỉ Email để chúng tôi có thể gửi toàn bộ tài liệu cho anh
                  chị nhanh và sớm nhất
                </div>
              </div>
              <div className={cx("form")}>
                <input
                  type="text"
                  name="name"
                  placeholder="Họ và tên"
                  className={cx("input")}
                />
                <input
                  type="email"
                  name="name"
                  placeholder="Email"
                  className={cx("input")}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Số điện thoại"
                  className={cx("input")}
                />
                <textarea
                  name="description"
                  placeholder="Để lại lời nhắn cho chúng tôi"
                  className={cx("textarea")}
                />
                <button type="submit" className={cx("button")}>
                  Tu van dat cho
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChinhSach;
