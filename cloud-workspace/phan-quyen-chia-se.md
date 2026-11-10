# Phân quyền Google Drive và giao tiếp TechNova

## Nguyên tắc

Chỉ chia sẻ cho **email cụ thể (Restricted)**, cấp đúng mức quyền tối thiểu. Nếu file nhạy cảm nằm trong folder mà mọi người đều có Editor, quyền của folder có thể được kế thừa nên không thể sửa bằng cách chỉ hạ quyền file; phải **chuyển sang thư mục hạn chế riêng**.

| Vai trò | Thư mục/tài liệu | Quyền đề nghị | Phạm vi | Kênh liên quan |
|---|---|---|---|---|
| Nhân viên mới | Tài liệu cá nhân được giao | Editor | Restricted, tài khoản công ty | `#onboarding` |
| Đồng đội cùng dự án | Folder dự án chung | Editor | Restricted, danh sách team | `#dev-ten-du-an` |
| Thực tập sinh ban khác | **Tệp** cần góp ý | Commenter | Restricted, đúng email | `#hoi-dap` nếu cần |
| Mentor/QA | Tài liệu đánh giá | Commenter hoặc Editor nếu được giao | Restricted | `#onboarding` |
| Đối tác/khách mời ngoài công ty | Báo cáo đã duyệt | Viewer | Restricted, đúng email | Không vào workspace nội bộ |
| Bộ phận quản lý | `restricted/` | Viewer/Editor theo nhiệm vụ | Restricted, ít người | Kênh nội bộ được mời |

**Chú ý:** Một số quyền như `Commenter` áp dụng cho file hơn là folder; khi cần góp ý, chia sẻ **tệp riêng** ở chế độ Commenter. `Viewer` thông thường có thể tải về, vì thế không chia sẻ dữ liệu tối mật chỉ dựa vào quyền Viewer.

## 3 mức quyền

- **Viewer:** xem file; không chỉnh sửa.
- **Commenter:** xem và bình luận tệp; không sửa nội dung gốc.
- **Editor:** chỉnh sửa file, có thể quản lý nội dung trong folder được chia sẻ; tùy cài đặt còn có thể chia sẻ tiếp. Chỉ cấp cho người cần sửa.

**Tuyệt đối tránh** `Anyone with the link + Editor`; dữ liệu nhạy cảm dù là Viewer vẫn phải `Restricted`.

## Cách cấp quyền và kiểm tra

1. Mở `Share` → chọn `Restricted`, nhập đúng email người nhận.
2. Chọn Viewer/Commenter/Editor đúng công việc. Trong `Share > Settings`, tắt `Allow editors to change permissions and share` đối với file nếu tùy chọn này có sẵn; nhớ kiểm tra quyền folder cha vì có thể ghi đè.
3. Thử bằng tài khoản chỉ được xem: không chỉnh sửa được; kiểm tra `Manage access`, xử lý người nghỉ việc và kiểm tra lịch sử hoạt động định kỳ.

## Cấu trúc Channels

| Kênh | Ai đăng | Nội dung |
|---|---|---|
| `#thong-bao` | Trưởng nhóm/điều phối | Chính sách, deadline, thay đổi chính thức; người khác chỉ xem |
| `#onboarding` | Nhân viên mới, Mentor | Câu hỏi nhập môn, tài liệu, checklist |
| `#dev-ten-du-an` | Team dự án | Lỗi kỹ thuật, họp kỹ thuật, PR |
| `#hoi-dap` | Nhân viên | Câu hỏi không khẩn, trả lời bằng Thread |
| `#giai-tri` | Nhân viên | Nội dung ngoài công việc |

## 3 quy tắc chat

1. **Không No-Hello:** gửi vấn đề + thao tác đã thử + cần ai hỗ trợ trong một tin đầy đủ.
2. **Không spam @all:** chỉ tag người phụ trách; dùng `@all` cho sự cố thật sự liên quan toàn đội theo quy định nội bộ.
3. **Làm việc bất đồng bộ:** Reply in Thread, tạo Task với deadline khi cần; dùng Schedule Send ngoài giờ nếu không cấp bách.

**Ví dụ tin đúng:** “@mentor Em đang thiết lập Google Drive for desktop, đăng nhập xong nhưng thư mục onboarding chưa hiện. Em đã thử khởi động lại ứng dụng. Nhờ anh/chị kiểm tra quyền cho email công ty của em trong giờ làm việc mai.”
