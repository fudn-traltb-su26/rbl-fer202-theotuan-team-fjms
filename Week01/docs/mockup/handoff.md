# TÀI LIỆU BÀN GIAO MOCKUP SANG CODE (HANDOFF DOCUMENT) - TUẦN 1

Tài liệu này ánh xạ các phân vùng giao diện trên bản vẽ thiết kế Mockup thành các React Component dự kiến sẽ lập trình, cùng tuần triển khai tương ứng.

---

## 1. Màn hình Chi tiết dự án (Project Details Page) - Thành viên C

Đường dẫn thiết kế mockup: `Week01/docs/mockup/project_details.png`

| Vùng trên Mockup | Component tương ứng | File dự kiến | Tuần thực hiện | Ghi chú & Logic xử lý |
| :--- | :--- | :--- | :--- | :--- |
| **Toàn bộ trang** | `ProjectDetailPage` | `src/pages/ProjectDetailPage.jsx` | **Tuần 6** | Quản lý layout chính, nhận `id` từ URL (ví dụ: `/projects/:id`) qua hook `useParams()`. Gọi service để lấy dữ liệu. |
| **Thanh điều hướng** | `Breadcrumbs` | `src/components/Breadcrumbs.jsx` | **Tuần 6** | Hiển thị đường dẫn: Trang chủ > Danh sách dự án > Chi tiết dự án. |
| **Phần mô tả chính** | `ProjectMainContent` | `src/components/ProjectMainContent.jsx` | **Tuần 6** | Hiển thị Title, Mô tả chi tiết dự án (Description) và Danh sách kỹ năng. |
| **Nhãn kỹ năng** | `SkillBadge` | `src/components/SkillBadge.jsx` | **Tuần 2 & 3** | Component nhỏ hiển thị từng kỹ năng yêu cầu (ví dụ: React, Figma). Nhận tên kỹ năng làm prop. |
| **Thẻ thông tin nhanh** | `ProjectSidebarCard` | `src/components/ProjectSidebarCard.jsx` | **Tuần 6** | Thẻ sticky chứa thông tin ngân sách, thời gian, tên nhà tuyển dụng, đánh giá sao. |
| **Nút "Gửi báo giá"** | `Button` (Primary) | `src/components/common/Button.jsx` | **Tuần 3 & 5** | Nút bấm lớn màu Emerald Green. Kích hoạt form/modal nộp báo giá ở Tuần 8. |
| **Nút "Lưu dự án"** | `Button` (Outline / Save) | `src/components/common/Button.jsx` | **Tuần 3 & 4** | Nút viền xanh lá. Nhận sự kiện `onClick` để thêm dự án vào state `savedProjects` ở App (Lifting State Up - Tuần 4). |

---

## 2. Màn hình Giỏ hàng / Dự án đã lưu (Saved Projects Page) - Thành viên C

Đường dẫn thiết kế mockup: `Week01/docs/mockup/saved_projects.png`

| Vùng trên Mockup | Component tương ứng | File dự kiến | Tuần thực hiện | Ghi chú & Logic xử lý |
| :--- | :--- | :--- | :--- | :--- |
| **Toàn bộ trang** | `SavedProjectsPage` | `src/pages/SavedProjectsPage.jsx` | **Tuần 6** | Nhận danh sách `savedProjects` từ Context (Tuần 7) hoặc State ở App (Tuần 4) để hiển thị. |
| **Bảng danh sách** | `SavedProjectsTable` | `src/components/SavedProjectsTable.jsx` | **Tuần 6** | Chứa header bảng và lặp qua danh sách các dự án để hiển thị chi tiết hàng. |
| **Dòng dự án đơn lẻ** | `SavedProjectRow` | `src/components/SavedProjectRow.jsx` | **Tuần 6** | Component render thông tin một dự án đã lưu trong bảng (Tên, Nhà tuyển dụng, Ngân sách, Hành động). |
| **Nút "Ứng tuyển"** | `Button` (Primary Small) | `src/components/common/Button.jsx` | **Tuần 3 & 5** | Nút bấm nhỏ hơn, dẫn tới trang nộp báo giá chi tiết. |
| **Nút "Xóa" (Thùng rác)** | `IconButton` (Danger) | `src/components/common/IconButton.jsx` | **Tuần 4 & 6** | Nút màu đỏ (Soft Crimson). Kích hoạt hàm xóa dự án khỏi danh sách lưu (`handleRemoveSaved`). |
| **Trạng thái danh sách trống**| `EmptySavedProjects` | `src/components/EmptySavedProjects.jsx` | **Tuần 6** | Hiển thị hình vẽ minh họa, dòng chữ thông báo và nút "Khám phá dự án" khi danh sách trống. |
| **Thanh menu bên cạnh** | `SidebarNavigation` | `src/components/SidebarNavigation.jsx` | **Tuần 5 & 6** | Menu điều hướng dạng cột dọc chứa badge đếm số lượng dự án đã lưu. |

---

## 3. Các thành phần chung (Thành viên A & B)

| Vùng trên Mockup (UI Section) | Tên Component sẽ code (`src/components/`) | Người phụ trách | Tuần thực hiện |
|-------------------------------|-------------------------------------------|----------------|----------------|
| Thanh điều hướng (Navbar) | `Header.jsx` | Thành viên A | Tuần 2 |
| Khu vực giới thiệu (Hero Banner) | `Banner.jsx` | Thành viên B | Tuần 2 |
| Danh sách danh mục (Tags/Chips) | `CategoryList.jsx` | Thành viên C | Tuần 2 |
| Thẻ dự án độc lập (Single Card) | `ProjectCard.jsx` | Thành viên B | Tuần 2 |
| Lưới hiển thị nhiều thẻ dự án | `ProjectGrid.jsx` | Thành viên C | Tuần 2 |
| Thanh tìm kiếm | `SearchBar.jsx` | Thành viên A | Tuần 4 |
| Chân trang | `Footer.jsx` | Thành viên A | Tuần 2 |

**Lưu ý khi handoff:**
- Mọi Component phải tuân thủ đúng màu sắc và kích thước từ `style-guide.md`.
- Các dữ liệu hiển thị (tiêu đề, ngân sách, danh mục) phải khớp với cấu trúc object trong file `db.json`.
