# HƯỚNG DẪN STYLE GUIDE - FREELANCER JOB MATCHING SYSTEM (FJMS)

Tài liệu này xác lập hệ thống quy chuẩn thiết kế giao diện (Design System) chung của nhóm phát triển dự án FJMS. Hệ thống này đảm bảo tính nhất quán (consistency) về mặt hình ảnh, màu sắc, font chữ và các thành phần giao diện trên toàn bộ các màn hình.

---

## 1. Bảng Màu Chủ Đạo (Color Palette)

Nhóm thống nhất sử dụng tông màu chủ đạo là **Emerald Green** (Xanh ngọc lục bảo) làm điểm nhấn thương hiệu, tạo cảm giác tin cậy, chuyên nghiệp và thân thiện cho nền tảng kết nối công việc tự do.

| Vai trò màu | Tên màu | Mã Hex | Ứng dụng cụ thể |
| :--- | :--- | :--- | :--- |
| **Primary (Chủ đạo)** | Emerald Green | `#059669` | Header, các nút hành động chính (Primary Button), biểu tượng nổi bật, hover state. |
| **Primary Light** | Emerald Tint | `#D1FAE5` | Nền nhãn (Badge background), nền thông báo nhẹ, hover background. |
| **Secondary (Phụ)** | Mint Green | `#10B981` | Điểm nhấn phụ, nhãn trạng thái tích cực (Active/Open status). |
| **Background (Nền)** | Pure White / Light Gray | `#F9FAFB` | Màu nền chung toàn trang, nền thẻ thông tin (Card background). |
| **Text Primary** | Charcoal / Dark Slate | `#1F2937` | Tiêu đề chính, nội dung văn bản chính (Độ tương phản cao). |
| **Text Secondary** | Medium Slate | `#4B5563` | Nội dung văn bản phụ, mô tả chi tiết dự án, metadata (ngày đăng, người tuyển dụng). |
| **Border / Divider** | Light Gray Border | `#E5E7EB` | Đường phân chia, viền của ô nhập liệu và thẻ dự án. |
| **Danger (Lỗi / Xóa)** | Soft Crimson | `#EF4444` | Nút Hủy/Xóa dự án, thông báo lỗi validation. |

---

## 2. Font Chữ & Typography

Để tối ưu hóa trải nghiệm đọc trên cả máy tính và thiết bị di động, dự án sử dụng font chữ sans-serif hiện đại từ Google Fonts:

- **Font chữ chủ đạo**: **Inter** (hoặc **Roboto** làm dự phòng).
- **Quy định cỡ chữ & Weight**:
  - `h1` (Tiêu đề trang): `2.25rem` (36px), Bold (700)
  - `h2` (Tiêu đề phần lớn): `1.5rem` (24px), Semi-Bold (600)
  - `h3` (Tiêu đề thẻ / component): `1.25rem` (20px), Semi-Bold (600)
  - `body-large` (Văn bản lớn): `1.125rem` (18px), Regular (400)
  - `body` (Văn bản thông thường): `1rem` (16px), Regular (400) hoặc Medium (500)
  - `small` (Ghi chú, metadata): `0.875rem` (14px), Light (300) hoặc Regular (400)

---

## 3. Quy chuẩn Thiết kế Component

### 3.1. Các nút bấm (Buttons)
- **Primary Button** (Gửi báo giá, Đăng ký):
  - Nền: Emerald Green (`#059669`)
  - Chữ: Trắng (`#FFFFFF`), bold nhẹ.
  - Hiệu ứng hover: Nền chuyển sang đậm hơn (`#047857`), có transition mượt (`all 0.2s ease-in-out`).
  - Bo góc: `8px` (`border-radius: 0.5rem`).
- **Secondary Button** (Lưu dự án, Quay lại):
  - Viền: Emerald Green (`#059669`) 1px, không màu nền (outline).
  - Chữ: Emerald Green (`#059669`).
  - Hiệu ứng hover: Nền Emerald Tint (`#D1FAE5`) nhẹ, giữ nguyên màu chữ.
- **Danger Button** (Xóa khỏi danh sách lưu):
  - Nền: Trắng hoặc nhạt.
  - Viền & Chữ: Soft Crimson (`#EF4444`).
  - Hiệu ứng hover: Nền Crimson Tint nhẹ hoặc nền đỏ chữ trắng.

### 3.2. Thẻ thông tin (Cards)
- Bo góc: `12px` (`border-radius: 0.75rem`).
- Hiệu ứng: Bóng mờ nhẹ (`box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05)`).
- Khi hover: Dịch chuyển nhẹ lên trên (transform translate-y) và tăng bóng đổ để tăng tương tác trực quan.

---

## 4. Định hướng Thiết kế Giao diện (Tone & Mood)

- **Sạch sẽ & Gọn gàng (Clean & Minimalist)**: Tránh quá nhiều đường viền phân cách thô, sử dụng khoảng trắng (whitespace) hợp lý để làm nổi bật thông tin dự án.
- **Tính Chuyên nghiệp**: Hướng đến đối tượng freelancer và doanh nghiệp tuyển dụng, do đó giao diện trực quan, rõ ràng, tập trung vào số liệu (ngân sách, thời gian, kỹ năng).
- **Tính Đồng bộ (Consistent)**: Tất cả các icon sử dụng chung từ thư viện `lucide-react` để đảm bảo độ dày nét vẽ đồng nhất.

---

## 5. Quy chuẩn Thiết kế Riêng cho Màn hình Thành viên C phụ trách

### 5.1. Trang Chi tiết dự án (Project Details Page)
- **Cấu trúc chia làm 2 cột trên Desktop**: 
  - Cột chính (bên trái - chiếm 2/3): Hiển thị tiêu đề dự án lớn, mô tả chi tiết công việc, và danh sách các kỹ năng yêu cầu (dưới dạng các badge màu xanh nhạt).
  - Cột thông tin nhanh (bên phải - chiếm 1/3): Hiển thị thông tin tổng hợp dạng thẻ (ngân sách nổi bật với màu Emerald Green, thời gian thực hiện, thông tin nhà tuyển dụng) kèm nút hành động "Gửi báo giá" nổi bật nhất trang.
- **Tương tác**: Có nút "Quay lại" điều hướng mượt mà và nút "Lưu dự án" (bookmark) để lưu nhanh trạng thái.

### 5.2. Trang Giỏ hàng / Dự án đã lưu (Cart / Saved Projects Page)
- **Cấu trúc dạng bảng hoặc lưới danh sách gọn gàng**:
  - Cột 1: Logo/Ảnh đại diện dự án hoặc icon lĩnh vực (Category).
  - Cột 2: Tên dự án + Tên nhà tuyển dụng.
  - Cột 3: Ngân sách (Budget) hiển thị rõ ràng, căn lề phải hoặc căn giữa.
  - Cột 4: Nút hành động bao gồm: **Ứng tuyển ngay** (Primary Button nhỏ) và **Xóa** (Danger Button dạng icon thùng rác).
- **Trạng thái rỗng (Empty State)**: Nếu chưa lưu dự án nào, hiển thị hình minh họa vẽ nét nhẹ kèm thông điệp "Chưa có dự án nào được lưu" và nút bấm gợi ý điều hướng "Khám phá dự án ngay".
