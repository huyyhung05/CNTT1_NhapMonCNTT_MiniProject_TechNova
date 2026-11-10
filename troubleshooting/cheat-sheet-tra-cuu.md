# Cheat-sheet tra cứu và gỡ lỗi nhanh

## 1. Tách thông tin lỗi

Tên phần mềm + Hệ điều hành + mã lỗi tiếng Anh nguyên văn + thao tác đang làm.

**Ví dụ:** VS Code, Windows 11, `Terminal process failed`, đang chạy lệnh Git.

## 2. Google Operators

| Toán tử | Truy vấn mẫu | Ý nghĩa |
|---|---|---|
| `site:` | `site:stackoverflow.com "Terminal process failed"` | Chỉ tìm trong tên miền Stack Overflow |
| `" "` | `"fatal: not a git repository"` | Tìm chính xác thông báo lỗi |
| `-` | `git not recognized windows -win7 -crack` | Loại kết quả cũ/rác |
| `filetype:` | `site:developer.mozilla.org filetype:pdf HTML` | Lọc theo định dạng nếu tài liệu có PDF |

## 3. Đọc nguồn cộng đồng

- **Stack Overflow:** kiểm tra Tags đúng ngôn ngữ/hệ điều hành, Accepted Answer, Upvotes, ngày đăng, bình luận mới.
- **GitHub Issues:** Open = còn đang xử lý, Closed = đã đóng nhưng không phải luôn đã sửa. Đọc bình luận từ maintainer, thảo luận Reactions cao và thử Workaround an toàn.
- Mẹo đăng từ hơn 5 năm trước cần đối chiếu phiên bản mới, không mặc nhiên sai cũng không mặc nhiên đúng.

## 4. Prompt AI ba thành phần

```text
[Ngữ cảnh] Em đang dùng VS Code trên Windows 11 để chạy Git trong thư mục dự án.
[Lỗi nguyên văn] fatal: not a git repository (or any of the parent directories): .git
[Yêu cầu] Giải thích bằng tiếng Việt dễ hiểu, nêu 3 bước kiểm tra an toàn,
không đề xuất lệnh xóa hệ thống và ghi rõ khi nào cần hỏi lại IT.
```

**An toàn:** không paste token/API key/OTP. Kiểm chứng mọi lệnh có thể sửa Registry, xóa file hay thay đổi phân quyền trước khi chạy.

## 5. Quy trình quyết định

```text
Gap loi
  |
Ghi log + he dieu hanh + phien ban
  |
Google Operators --> doc tai lieu chinh thuc
  |
Stack Overflow / GitHub Issues --> kiem tra uy tin
  |
AI 3 thanh phan --> doi chieu lenh truoc khi chay
  |
+-- Da sua duoc --> ghi lai vao Knowledge Base
`-- Chua duoc --> tao Bug Report, gui IT/Mentor
```
