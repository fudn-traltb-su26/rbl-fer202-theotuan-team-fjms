# Freelancer Job Matching System (FJMS) - Week 1 (FER202)

Dự án thực hành môn Phát triển ứng dụng Web với ReactJS (FER202) theo phương pháp Research By Learning (RBL).

## 🚀 Công nghệ sử dụng
* **Frontend Core:** React 19 + Vite
* **UI Framework:** React-Bootstrap 2.x + TailwindCSS
* **HTTP Client:** Axios
* **Mock Backend:** JSON-Server (chạy ở port 3001)

## 📁 Cấu trúc thư mục dự án
```text
src/
├── assets/         # Hình ảnh, font chữ, logo
├── components/     # Các UI Component tái sử dụng (Header, Footer, ProjectCard...)
├── context/        # Quản lý State toàn cục (ProjectContext, ThemeContext...)
├── hooks/          # Các custom hooks của ứng dụng (useFetch, useDebounce...)
├── pages/          # Các trang chính của hệ thống (HomePage, ProjectDetailPage...)
├── services/       # Layer gọi các API (projectService.js...)
├── App.jsx         # Component điều hướng và cấu trúc chính
└── main.jsx        # File khởi chạy React
```

## ⚙️ Hướng dẫn cài đặt và chạy thử

### Bước 1: Cài đặt dependencies
Chạy lệnh này từ thư mục `fjms-frontend`:
```bash
npm install
```

### Bước 2: Chạy Frontend ở chế độ Developer
```bash
npm run dev
```
Giao diện sẽ chạy ở: [http://localhost:5173](http://localhost:5173)

### Bước 3: Chạy Mock API Server (JSON-Server)
Tại thư mục `Week01`, khởi chạy server:
```bash
npx json-server --watch db.json --port 3001
```
Kiểm tra API danh sách dự án tại: [http://localhost:3001/projects](http://localhost:3001/projects)
