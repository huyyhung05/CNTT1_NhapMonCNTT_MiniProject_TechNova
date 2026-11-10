# Hồ sơ trình duyệt TechNova

## 1. Browser Profile và Data Isolation

| Profile | Màu gợi ý | Mục đích | Dữ liệu độc lập |
|---|---|---|---|
| `Personal` | Xanh lá | Gmail cá nhân, học tập, giải trí | Cookies, Session, History, Bookmark, Extension cá nhân |
| `TechNova_Work` | Xanh dương | GitHub công ty, Drive, Lark | Cookies, Session, History, Bookmark, Extension công việc |
| `Sandbox_Test` (tùy chọn) | Xám | Kiểm thử tiện ích/trang không tin cậy | Chỉ tài khoản thử, không dùng Secret thật |

**Cách tạo:** Chrome/Edge → biểu tượng Profile → `Add profile` → nhập tên và chọn màu → đăng nhập đúng tài khoản theo Profile. Đóng mở từng Profile để xác nhận GitHub cá nhân không tự đăng nhập tại TechNova_Work. Profile chỉ tách **dữ liệu trình duyệt**, không thay thế tài khoản Windows riêng hoặc bảo vệ máy đã nhiễm mã độc.

## 2. Bookmark Manager

Mở `Ctrl + Shift + O` rồi tạo:

```text
01_Work_Dev/
|-- GitHub Organization
`-- VS Code Documentation
02_Onboarding_Docs/
|-- TechNova README
`-- Google Drive Onboarding
03_Tools/
|-- Chrome DevTools Docs
`-- Stack Overflow
```

Chỉ bật Cloud Sync bookmark cho tài khoản công ty trên máy được phép; không đồng bộ Profile Personal trên máy dùng chung.

## 3. Extensions 3 nhóm

| Nhóm | Ví dụ | Vai trò | Quyền Site Access |
|---|---|---|---|
| Dev Suite | JSON Viewer | Hiển thị API JSON dễ đọc | `On click` hoặc domain test cần thiết |
| Productivity Suite | ColorPicker | Lấy mã màu trong giao diện | `On click` |
| Security Suite | Bitwarden | Điền mật khẩu từ Vault | Chỉ bật trong Profile Work, kiểm tra website trước khi Autofill |
| Security Suite | Tiện ích chặn nội dung uy tín | Hạn chế quảng cáo/rủi ro web | Quyền tối thiểu đáp ứng mục đích chặn |

Không phải extension nào cũng hoạt động đầy đủ với `On click`; nếu cần quyền rộng hơn thì IT phải xem xét trước khi cấp. Chỉ cài từ nguồn chính thức, gỡ tiện ích không dùng.

## 4. DevTools cơ bản

| Công cụ | Mục đích | Ví dụ thao tác |
|---|---|---|
| `F12 > Elements` | Kiểm tra DOM, CSS và 4 lớp Box Model | `Ctrl + Shift + C`, chọn nút lỗi, xem `Computed` |
| `F12 > Network` | Kiểm tra request, Status/Waterfall, cache | Chọn `Disable Cache` khi DevTools đang mở; F5 |
| `F12 > Application` | Xem Cookies, Local Storage | Kiểm tra cookie phiên có HttpOnly, Secure |
| `F12 > Console` | Xem log JS | Đọc lỗi đỏ, tránh paste lệnh lạ |

**Cache vs Cookies:** Cache lưu tài nguyên để tải nhanh; Cookies thường lưu định danh phiên/thuộc tính. `Ctrl + Shift + R` trên Windows giúp yêu cầu tải mới tài nguyên khi debug mà không cần xóa lịch sử duyệt web; không dùng “Clear all browsing data” khi chỉ cần khắc phục Cache CSS cũ.
