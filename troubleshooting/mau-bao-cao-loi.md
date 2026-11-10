# Mẫu Bug Report — TechNova

**Tiêu đề:** [Phần mềm] [Mã lỗi] [Hành động]  
**Người báo:** ________  **Ngày:** ________  **Mức độ ảnh hưởng:** ________

## 1. Context — Bối cảnh

- Thiết bị/HĐH: ________
- Phần mềm & phiên bản: ________
- Đường dẫn hoặc chức năng (không chứa token): ________
- Kết nối mạng/thao tác trước khi lỗi: ________

## 2. Expected — Kết quả mong muốn

Mô tả hệ thống đúng ra phải làm gì: ________

## 3. Actual — Kết quả thực tế

Hệ thống đang hiển thị/hoạt động ra sao: ________

## 4. Log & Screenshot — Bằng chứng

```text
Dan thong bao loi nguyen van da che thong tin nhay cam vao day.
```

Ảnh chụp `Win + Shift + S`, khoanh vùng thông báo lỗi, làm mờ email, số điện thoại, token, địa chỉ hoặc dữ liệu khách hàng trước khi gửi.

## 5. Steps to Reproduce — Các bước tái hiện

1. Mở ________.
2. Chọn ________.
3. Nhấn ________.
4. Quan sát ________.

## 6. Tự kiểm tra trước khi gửi

- [ ] Đã thử giải pháp an toàn từ tài liệu chính thức.
- [ ] Đã ghi chính xác phiên bản và nguyên văn lỗi.
- [ ] Đã che thông tin mật trong log và ảnh.
- [ ] Đã đánh dấu bước tái hiện được lỗi.

---

## Ví dụ: `git` chưa có trong PATH

**Context:** VS Code Terminal trên Windows 11, đang gõ `git --version`.  
**Expected:** In ra phiên bản Git.  
**Actual:** Terminal không nhận diện được lệnh Git.  
**Log:** `'git' is not recognized as an internal or external command` (giả lập); ảnh sẽ bổ sung sau khi chụp tại máy thật.
