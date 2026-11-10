# Checklist bảo mật nhân viên TechNova

Sinh viên thực hiện: **Phan Huy Hưng – CNTT1 – Nhập môn CNTT**.

## 1. Bitwarden và mật khẩu

- [ ] Tạo Vault Bitwarden với Master Passphrase dài (ưu tiên cụm nhiều từ ngẫu nhiên, không tái sử dụng).
- [ ] Mỗi tài khoản sử dụng **một mật khẩu khác nhau**, Generator dài 16–32 ký tự, có hoa/thường/số/ký tự đặc biệt theo quy định dịch vụ.
- [ ] Khóa Vault khi rời máy; bật xác thực 2 yếu tố cho chính tài khoản Bitwarden.
- [ ] Không chụp Master Password vào ảnh, không gửi qua Slack/Zalo.

**Zero-Knowledge:** Bitwarden thiết kế mã hóa và giải mã Vault ở thiết bị người dùng; nhà cung cấp không cần biết Master Password. Điều này giảm rủi ro khi máy chủ bị xâm nhập nhưng không bảo vệ tuyệt đối nếu **thiết bị cá nhân bị nhiễm Infostealer** lúc Vault đang mở.

## 2. 2FA/TOTP

- [ ] GitHub và Email công việc đã bật 2FA qua Authenticator App (ưu tiên TOTP, security key/passkey nếu có).
- [ ] Lưu mã khôi phục trong mục riêng được bảo vệ trong Vault hoặc bản in cất riêng trong nơi an toàn. Với hệ thống trọng yếu, giữ một bản ngoài Vault để tránh mất cả Vault lẫn 2FA.
- [ ] Không để Recovery Codes trong thư viện ảnh điện thoại hoặc repository.
- [ ] Khi mất thiết bị xác thực, báo IT và dùng quy trình phục hồi do dịch vụ hỗ trợ; mã dự phòng không tự động có ở mọi nền tảng.

## 3. Quy tắc 5 KHÔNG

1. Không bấm liên kết không rõ nguồn hoặc nhập mật khẩu vào trang giả mạo (Phishing/Typosquatting).
2. Không tải/chạy Crack, Keygen và file đuôi kép `.pdf.exe`.
3. Không tắt Antivirus/Windows Defender vì hướng dẫn của file lạ.
4. Không dùng lại mật khẩu giữa Gmail, GitHub và dịch vụ khác.
5. Không gửi API Key, OTP, token hoặc thông tin cá nhân qua chat/AI công cộng.

## 4. Bảo vệ Secrets trước khi push

- [ ] Không hardcode `TECHNOVA_API_KEY`, `DATABASE_URL` hay `SLACK_WEBHOOK_URL` vào mã nguồn.
- [ ] `.env` lưu ở máy Local, root `.gitignore` đã bỏ qua `.env`, `.env.*` ngoại trừ `.env.example`.
- [ ] `security/.env.example` chỉ chứa tên biến, không chứa giá trị thật.
- [ ] Chạy `git status --short`, `git check-ignore -v .env`, xem lại `git diff --cached` trước khi push.
- [ ] Nếu Secret từng được commit, **thu hồi/xoay vòng ngay**, không chỉ xóa file hoặc đổi repository thành private.

```gitignore
.env
.env.*
!.env.example
node_modules/
dist/
*.log
```

Nếu Git đã theo dõi `.env` từ trước, thêm `.gitignore` không có tác dụng hồi tố: cần `git rm --cached .env`, commit bỏ theo dõi, rồi **revoke/rotate** các khóa từng xuất hiện trong lịch sử Git.

## 5. Xử lý sự cố ngắn

Nghi máy nhiễm Infostealer: (1) ngắt Internet; (2) đổi mật khẩu từ thiết bị sạch; (3) thu hồi token, phiên đăng nhập và SSH key; (4) nhờ IT làm sạch/cài lại hệ điều hành từ nguồn đáng tin cậy. Thông báo ngay cho người quản lý quyền dữ liệu.
