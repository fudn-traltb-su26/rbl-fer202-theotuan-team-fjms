# NHẬT KÝ PROMPT THIẾT KẾ (PROMPTS LOG) - TUẦN 1 

Tài liệu này ghi lại toàn bộ các câu lệnh (prompts) được sử dụng để thiết kế mockup và giao diện các màn hình thông qua các công cụ AI Design (Figma Make / Galileo AI / v0 / Google Stitch).

---

## 1. Màn hình Chi tiết dự án (Project Details Page) - Thành viên C

### Prompt 1: Tạo cấu trúc bố cục cơ bản (Wireframe/Layout)
> **Mục tiêu**: Tạo khung giao diện chi tiết dự án có tổ chức thông tin khoa học, phân chia rõ rệt khu vực thông tin chính và thông tin nhanh.

* **Prompt bằng tiếng Anh (Dành cho AI Design Tool)**:
  ```text
  Design a high-fidelity web page for "Project Details" of a Freelancer Job Matching System (FJMS). 
  Layout should be split into 2 columns on desktop:
  - Left column (2/3 width) contains: Project Title ("SaaS Dashboard UI/UX Design"), Breadcrumb navigation, Posted date (2 days ago), Category badge ("UI/UX Design"), Detailed Job Description (overview, scope of work, deliverables), and Required Skills (displayed as pill badges: "Figma", "UI/UX", "Dashboard Design", "Wireframing").
  - Right column (1/3 width) contains a sticky information card with: Budget (displaying "8,000,000 VND" in large bold emerald green text), Project Duration ("14 days"), Client Info (Client name: "TechStart Solutions", rating: "4.8/5 stars", verified payment badge), a prominent primary call-to-action button "Submit Proposal" (solid emerald green color), and a secondary outline button "Save Project" with a bookmark icon.
  Use a modern, clean style with Inter font, lots of whitespace, rounded corners (12px), and Emerald Green (#059669) as the primary brand color.
  ```

* **Kết quả thu được**: Bản thiết kế thô phân chia 2 cột rất rõ ràng. Cột trái chứa mô tả văn bản dễ đọc, cột phải nổi bật thông tin tài chính và nút kêu gọi hành động lớn thu hút sự chú ý.

### Prompt 2: Tối ưu hóa UI chi tiết và Style Guide
> **Mục tiêu**: Điều chỉnh màu sắc, khoảng cách và các biểu tượng (icons) để khớp chính xác với Style Guide chung của nhóm.

* **Prompt bằng tiếng Anh**:
  ```text
  Refine the previous Project Details web design:
  - Apply the exact Emerald Green color (#059669) to the primary button and status badges.
  - Apply a very light green tint background (#D1FAE5) for the skills tags with dark green text.
  - Add icons (from Lucide icons set) next to key metadata items: a calendar icon next to "14 days", a dollar-sign icon next to "8,000,000 VND", and a user-check icon next to "TechStart Solutions" (showing client verification).
  - Add a "Back to Projects List" link with a left-arrow icon at the top of the page.
  - The page background should be #F9FAFB and the main cards background should be pure #FFFFFF with a subtle soft shadow.
  ```

---

## 2. Màn hình Giỏ hàng / Dự án đã lưu (Saved Projects Page) - Thành viên C

### Prompt 1: Thiết kế giao diện danh sách dự án đã lưu
> **Mục tiêu**: Tạo một trang quản lý các dự án mà freelancer quan tâm hoặc đã lưu để ứng tuyển sau, sử dụng cấu trúc bảng chuyên nghiệp.

* **Prompt bằng tiếng Anh (Dành cho AI Design Tool)**:
  ```text
  Design a responsive web page for "Saved Projects / Bookmark Manager" for a freelancer dashboard.
  The page title is "My Saved Projects" with a subtitle showing "You have 3 saved projects".
  The layout features a clean table or list layout containing the bookmarked projects.
  Each row/item in the list should display:
  - Project Title & Category: e.g., "SaaS Dashboard UI/UX Design" under "UI/UX Design" category.
  - Client Name: e.g., "TechStart Solutions".
  - Budget: e.g., "8,000,000 VND" in medium-bold dark slate.
  - Actions: A primary button "Apply Now" (small, emerald green background) and a delete icon button (a trash-can icon in soft red color) to remove the project from the saved list.
  Include a sidebar navigation showing: "Dashboard", "Find Jobs", "Saved Projects (3)", "My Proposals", "Settings".
  The primary theme color is Emerald Green (#059669). The background should be light gray (#F9FAFB) and the content area cards should be rounded white boxes with subtle shadows.
  ```

### Prompt 2: Thiết kế trạng thái rỗng (Empty State)
> **Mục tiêu**: Cung cấp giao diện thân thiện khi người dùng chưa có bất kỳ dự án nào được lưu để hướng dẫn họ tương tác tiếp.

* **Prompt bằng tiếng Anh**:
  ```text
  Design the "Empty State" version of the "Saved Projects" page.
  Remove the project list table. In the center of the content card, display:
  - A clean, modern line-art illustration of a folder or bookmark with a magnifying glass.
  - A heading text: "No Saved Projects Yet".
  - A description text: "Explore open opportunities and save your favorite projects to apply later." in medium gray color.
  - A prominent green button "Browse Projects" (background color #059669) that links to the job listings page.
  Keep the sidebar navigation the same as the previous screen, but the badge number next to "Saved Projects" should be "0".
  ```

---

## 3. Màn hình Trang chủ và Danh sách dự án - Thành viên B

### Prompt 1: Thiết kế Trang chủ (Home Page)
> **Mục tiêu**: Thiết kế màn hình Trang chủ hấp dẫn, chuyên nghiệp cho sàn giao dịch Freelancer.
* **Công cụ:** Google Stitch / Midjourney / Figma AI
* **Prompt**:
  ```text
  Design a modern, professional home page for a Freelancer Job Matching System (FJMS). Please generate a desktop web layout (1440px wide). The color scheme should use Emerald Green (#0F766E) as the primary color with a light gray background (#F8FAFC). The UI must include a horizontal navigation bar with a logo, a full-width hero banner with a bold headline 'Nâng tầm doanh nghiệp của bạn với Nhân tài hàng đầu toàn cầu' and two call-to-action buttons. Below the hero banner, display 5 job category tags (e.g., Web Development, UI/UX Design). Finally, include a 'Featured Projects' section containing a grid of modern cards with soft shadows, each showing a project title, budget, category badge, and employer name. Use Inter font, rounded corners, and a clean layout.
  ```

### Prompt 2: Thiết kế Danh sách dự án (Project List)
> **Mục tiêu**: Thiết kế trang tìm kiếm và lọc dự án trực quan, dễ sử dụng.
* **Công cụ:** Google Stitch / Midjourney / Figma AI
* **Prompt**:
  ```text
  Design a project listing page for a Freelancer marketplace. Please generate a desktop web layout (1440px wide). Use the same Emerald Green and light gray color palette. The layout should have a left sidebar for filtering options (by Category, Budget, Skills) and a wide main content area displaying a grid or wide list of project cards. Top of the main area should have a search bar and a sorting dropdown. Each project card must display a title, description, skills required, budget, duration, and a 'Save Project' icon. Include pagination at the bottom. The style should be minimalistic, corporate, with soft drop shadows and rounded UI elements.
  ```
