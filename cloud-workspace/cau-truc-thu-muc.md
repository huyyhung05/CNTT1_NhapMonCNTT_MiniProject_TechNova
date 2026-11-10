# Cấu trúc Cloud Workspace TechNova

## Cây thư mục đề xuất

```text
TechNova/
|-- onboarding/              # Tai lieu nhan vien moi
|   |-- 01-huong-dan/
|   `-- 02-bai-tap-thuc-hanh/
|-- projects/                # Du an phan theo nhom
|   `-- ten-du-an/
|       |-- code-docs/      # Huong dan code, khong luu token
|       |-- design/
|       `-- reports/
|-- shared-docs/             # Tai lieu chung da duoc duyet
|-- restricted/              # Tai lieu nhay cam, it nguoi truy cap
`-- archive/                 # Ban hoan tat, read-only
```

Đặt tên **kebab-case**, chữ thường, không dấu, không khoảng trắng. **Thư mục gốc GitHub** của bài nộp có tên riêng theo quy định môn học; năm thư mục trụ cột vẫn áp dụng kebab-case.

## Hybrid Workflow 3 bước

1. **Local SSD:** Cài Google Drive for desktop, chọn folder đang được đồng bộ và chỉ làm việc ở bản file thuộc folder ấy. Đối với mã nguồn, dùng Git riêng; Cloud Sync hỗ trợ tài liệu và bản sao, không thay thế Git.
2. **Auto Sync:** Mỗi khi nhấn Ctrl+S, file được lưu cục bộ rồi ứng dụng tải thay đổi lên Cloud khi có mạng. Kiểm tra biểu tượng trạng thái, đặc biệt trước khi gập máy.
3. **Cloud + Version History:** Người có quyền khôi phục mở lịch sử phiên bản phù hợp với loại tệp; chọn bản ổn định. Với file bị xóa, kiểm tra Thùng rác/Trash. Nên có sao lưu độc lập vì đồng bộ cũng có thể lan truyền thao tác xóa.

```text
[SSD Local] --Luu file--> [Drive for desktop: Hang doi Sync] --Co Internet--> [Google Drive]
                          |                                 |
                          +-- Mat mang: cho, thu lai         +-- History/Trash
```

**Không đồng bộ:** `node_modules/`, `dist/` sinh lại được, file phim/game cá nhân và file `.env`/API Key. Lưu ý `.gitignore` chỉ quyết định Git theo dõi gì, **không tự loại trừ file khỏi Google Drive Sync**. Vì vậy dùng vùng dự án không có Secret khi đồng bộ hoặc cấu hình phạm vi thư mục Sync cẩn thận.

**Xung đột phiên bản:** Nếu hai người sửa cùng một file không hỗ trợ đồng chỉnh sửa, đồng bộ có thể sinh bản sao conflict. Không xóa vội; so hai bản, chọn bản đúng rồi lưu lại. Dùng Google Docs cho tài liệu nhiều người sửa hoặc Git branch/merge cho code.
