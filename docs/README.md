# Hệ thống Onboarding TechNova

Sinh viên: **Phan Huy Hưng** — Lớp **CNTT1** — Môn **Nhập môn CNTT (NhapMonCNTT)**.

## 1. Mục đích và cách đọc

TechNova tuyển thêm 10–15 người mỗi tháng nên cần chung một cách lưu file, cấp quyền, dùng trình duyệt, bảo vệ tài khoản và báo lỗi. Nhân viên mới làm các bước dưới đây, tự kiểm tra kết quả rồi nhờ Mentor cấp quyền còn thiếu. Người mới không tự ý lấy quyền Admin hay chia sẻ dữ liệu nội bộ.

## 2. Hướng dẫn bắt đầu

Mở Terminal tại thư mục dự án để xem cấu trúc, kiểm tra tệp `.env` đã được Git bỏ qua và thử đọc cấu hình qua biến môi trường:

```bash
git status --short
git check-ignore -v .env
# Neu da cai Node.js va muon thu vi du (khong can ket noi API):
node security/app-config-demo.js
```

Lệnh `git check-ignore` dùng khi đã `git init` cho dự án; nếu chưa khởi tạo repository thì tạo repository trước. Không chạy `git add -f .env`.

## 3. Module 1 — Cloud Workspace

- Tạo thư mục `TechNova/` trên Google Drive, gồm `onboarding/`, `projects/`, `shared-docs/`, `restricted/` và `archive/`.
- Dùng Google Drive for desktop để lưu, sửa tệp trên SSD, sau đó chờ ứng dụng hoàn tất **Auto Sync**. Khi mất mạng, tệp vẫn lưu cục bộ nhưng chưa được coi là đã sao lưu an toàn lên Cloud.
- Trước khi cấp quyền, xem [bảng phân quyền](../cloud-workspace/phan-quyen-chia-se.md). Đối tác dùng `Restricted` theo email cụ thể; chỉ cấp `Editor` khi thực sự cần sửa.
- Tạo kênh `#thong-bao` (chỉ quản trị viên đăng), `#onboarding` (người mới/Mentor), `#dev-ten-du-an` (kỹ thuật), `#hoi-dap` (câu hỏi chung), `#giai-tri` (ngoài công việc).
- Khi chat: nêu vấn đề và ảnh lỗi ngay trong một tin (tránh No-Hello), trả lời theo Thread và tag đúng người; dùng Schedule Send nếu không khẩn cấp ngoài giờ.

## 4. Module 2 — Browser Setup

- Tạo hai Profile `Personal` và `TechNova_Work` có Cookie, History, Bookmark riêng. Chỉ đăng nhập GitHub công ty ở `TechNova_Work`.
- Sắp Bookmark thành `01_Work_Dev`, `02_Onboarding_Docs`, `03_Tools`.
- Chọn Extension theo 3 nhóm: Dev Suite (JSON Viewer), Productivity Suite (ColorPicker), Security Suite (Bitwarden, tiện ích chặn nội dung uy tín). Chỉ cài thứ thực sự dùng và ưu tiên `On click`/`On specific sites` khi phù hợp.
- Thực hành `F12 > Elements > Computed` để xem Content, Padding, Border, Margin; `F12 > Network` để theo dõi Status/Waterfall; `Ctrl + Shift + R` để làm mới không dùng bản Cache cũ.

Chi tiết: [Hồ sơ trình duyệt](../browser-setup/ho-so-trinh-duyet.md).

## 5. Module 3 — Security

- Cài Bitwarden, tạo Master Passphrase dài, duy nhất. Generator tạo từng mật khẩu riêng từ 16 đến 32 ký tự, bật 2FA bằng Authenticator App cho Email/GitHub.
- Lưu Backup Codes trong Vault đã khóa và cân nhắc bản giấy cất riêng; không đăng ảnh OTP hoặc Recovery Codes lên chat.
- Áp dụng 5 KHÔNG: không mở liên kết đáng ngờ, không chạy Crack/Keygen, không tắt Antivirus, không gửi Secret lên chat, không dùng lại mật khẩu.
- API Key nằm trong biến môi trường `.env` ở máy Dev (file ví dụ trong ZIP không có key thật). Tạo `.env.example` công khai không chứa giá trị, đặt `.env` trong `.gitignore` **trước commit đầu**.

Chi tiết: [Checklist bảo mật](../security/checklist-bao-mat.md).

## 6. Module 4 — Troubleshooting

1. Ghi tên phần mềm, hệ điều hành và lỗi nguyên văn; tìm trên Google với `site:`, dấu ngoặc kép và `-`.
2. Đọc StackOverflow/GitHub Issues, xem năm đăng, Upvotes, Accepted Answer, bình luận mới và nguồn chính thức. Không chạy ngay lệnh xóa/sửa quyền hệ thống.
3. Nếu vẫn chưa hiểu, hỏi AI với **Context → Raw Error → Instruction**; che mật khẩu và token trước khi dán log.
4. Nếu chưa xử lý được, tạo Bug Report **Context → Expected → Actual → Log/Screenshot**, có ảnh chụp đã che thông tin nhạy cảm.

Tệp hỗ trợ: [Cheat-sheet](../troubleshooting/cheat-sheet-tra-cuu.md) và [mẫu Bug Report](../troubleshooting/mau-bao-cao-loi.md).

## 7. Module 5 — Tài liệu vận hành

SRS trong `srs-onboarding-kit.docx` dùng Word Heading 1–3 để tạo mục lục tự động. Khi nội dung sửa đổi, mở Word, chọn mục lục và **Update Field / Update entire table** để làm mới số trang. Quy trình onboarding có kiểm tra từng bước trong [quy-trinh-onboarding.md](quy-trinh-onboarding.md).

## 8. Checklist hoàn thành

- [ ] Dữ liệu chung có ít nhất một bản trên Cloud đã xác nhận sync.
- [ ] Không có file chứa mật khẩu ở `Anyone with the link`.
- [ ] Work Profile không thấy History/Cookies cá nhân.
- [ ] Mỗi tài khoản công việc dùng mật khẩu riêng và có TOTP.
- [ ] `git check-ignore -v .env` trả về luật bỏ qua thích hợp.
- [ ] Người mới biết dùng `site:`, đọc Issue và điền đủ 4 phần Bug Report.

## 9. Nghiệm thu nhanh

| Tình huống kiểm thử | Kết quả cần thấy |
|---|---|
| Ngắt Wi-Fi sau khi lưu file | File vẫn có trên SSD, biểu tượng chờ đồng bộ; lên Cloud khi mạng phục hồi |
| Mời người ngoài xem báo cáo | Chỉ xem được bằng email đã mời, không sửa hoặc chia sẻ lại |
| Mở GitHub cá nhân trong Profile Personal | TechNova_Work không tự dùng Cookies cá nhân |
| Tìm `.env` trong `git status` | Không xuất hiện để commit |
| Giả lập lỗi `git: command not found` | Có truy vấn tìm kiếm, Prompt 3 phần và Bug Report có Context/Log |

Tài liệu này chỉ là **bộ cấu hình và kịch bản mẫu**; việc bật đồng bộ, cấp quyền và 2FA thật cần thao tác trực tiếp trên tài khoản do công ty quản lý.
