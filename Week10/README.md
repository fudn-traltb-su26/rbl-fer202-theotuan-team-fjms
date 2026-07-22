# TUẦN 10 — NÂNG CAO (REDUX RTK, LAZY LOADING, TAILWIND CSS) & DEPLOY

Trong tuần học này, nhóm đã thực hiện:
- Tích hợp Redux Toolkit để quản lý State tập trung cho Wishlist và mock Authentication (thay thế cho Context API).
- Cấu hình Tailwind CSS v4 bằng `@tailwindcss/vite` plugin.
- Tái cấu trúc (Migrate) các component `Banner.jsx` và `ProjectCard.jsx` sang Tailwind CSS, loại bỏ hoàn toàn các class Bootstrap.
- Tối ưu hóa hiệu suất tải trang với Route-based code splitting (`React.lazy` và `Suspense`), giúp chia nhỏ bundle size.
- Thêm tính năng Hover Prefetching cho các trang và lazy loading hình ảnh logo doanh nghiệp (`loading="lazy"`).
- Đăng tải (Deploy) thành công ứng dụng frontend lên Vercel với tệp tin định cấu hình rewrite URL routing `vercel.json`.
