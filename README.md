# TechNova Onboarding Kit

**Sinh viên thực hiện:** Phan Huy Hưng  
**Lớp:** CNTT1  
**Môn học:** Nhập môn CNTT (NhapMonCNTT)  
**Tên dự án:** CNTT1_NhapMonCNTT_MiniProject_TechNova

Bộ hồ sơ giúp nhân viên mới của TechNova làm quen với không gian Cloud, môi trường trình duyệt, bảo mật tài khoản và cách tự gỡ lỗi. Đây là **bộ tài liệu và cấu hình mẫu để triển khai**, không phải bằng chứng công ty đã thiết lập những dịch vụ thật.

## Hướng dẫn sử dụng

1. Đọc [tài liệu vận hành](docs/README.md) và [đặc tả SRS](docs/srs-onboarding-kit.docx).
2. Làm theo [kiểm tra onboarding](docs/quy-trinh-onboarding.md) rồi đánh dấu những mục đã hoàn thành.
3. Xem [cấu trúc và phân quyền](cloud-workspace/phan-quyen-chia-se.md), [trình duyệt](browser-setup/ho-so-trinh-duyet.md), [bảo mật](security/checklist-bao-mat.md) và [báo lỗi](troubleshooting/mau-bao-cao-loi.md).
4. Sao chép giá trị biến mẫu vào `.env` trên máy cá nhân, **không nhập khóa thật vào các file sẽ đưa lên Git**. Tệp `.env` ở bộ ZIP chỉ chứa giá trị giả định.

```text
CNTT1_NhapMonCNTT_MiniProject_TechNova/
|-- README.md
|-- .gitignore                  # Chan Git theo doi .env toan du an
|-- .env                        # Du lieu gia lap, Git bo qua
|-- docs/
|   |-- README.md
|   |-- srs-onboarding-kit.docx
|   `-- quy-trinh-onboarding.md
|-- cloud-workspace/
|   |-- cau-truc-thu-muc.md
|   `-- phan-quyen-chia-se.md
|-- browser-setup/
|   `-- ho-so-trinh-duyet.md
|-- security/
|   |-- checklist-bao-mat.md
|   |-- .gitignore
|   |-- .env.example
|   `-- app-config-demo.js
`-- troubleshooting/
    |-- mau-bao-cao-loi.md
    `-- cheat-sheet-tra-cuu.md
```

## Checklist nhanh

- [ ] Tạo Profile `Personal` và `TechNova_Work`, kiểm tra đăng nhập độc lập.
- [ ] Bật Google Drive for desktop và xác nhận trạng thái đồng bộ xong.
- [ ] Cấp Viewer / Commenter / Editor đúng người, dùng `Restricted`.
- [ ] Tạo các kênh `#thong-bao`, `#onboarding`, `#dev-ten-du-an`.
- [ ] Thiết lập Bitwarden, mật khẩu riêng và TOTP cho tài khoản công việc.
- [ ] Kiểm tra `.env` không được Git theo dõi trước khi commit.
- [ ] Đọc quy trình tra cứu lỗi và tập điền Bug Report 4 phần.

## Danh mục thiết bị và tài khoản (mẫu)

| Hạng mục | Công cụ | Vai trò sử dụng | Trạng thái mẫu |
|---|---|---|---|
| Laptop làm việc | Windows 11 / SSD | Nhân viên mới | Chưa nghiệm thu |
| Tệp dự án | Google Drive for desktop | Nhân viên và Mentor | Chưa nghiệm thu |
| Email công việc | Tài khoản do công ty cấp | Nhân viên | Chưa kích hoạt TOTP |
| Mã nguồn | GitHub tổ chức | Developer | Chưa được cấp quyền |
| Mật khẩu | Bitwarden | Mỗi nhân viên | Chưa cấu hình |
| Giao tiếp | Lark/Slack | Phòng ban | Chưa tham gia kênh |

> **Lưu ý:** Không có API Key hay mật khẩu thật trong bản nộp. File `.gitignore` ở **thư mục gốc** mới đảm bảo bỏ qua `.env` đặt ở gốc; file `.gitignore` trong `security/` chỉ có phạm vi thư mục con.
