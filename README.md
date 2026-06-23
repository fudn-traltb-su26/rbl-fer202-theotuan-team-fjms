[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/p2HEpTkK)

# Freelancer Job Matching System (FJMS)

Dự án thực hành môn **Phát triển ứng dụng Web với ReactJS (FER202)** theo phương pháp **Research By Learning (RBL)**.

---

## 📁 Cấu trúc thư mục Repository

Để thuận tiện cho giảng viên theo dõi và chấm điểm qua từng tuần, repository được tổ chức phân chia như sau:

```text
rbl-fer202-theotuan-team-fjms/
├── fjms-frontend/          # Thư mục phát triển chính (Liên tục nâng cấp qua các tuần)
│   ├── public/
│   └── src/
│       ├── assets/         # Ảnh, logo, tài nguyên tĩnh
│       ├── components/     # Các component UI (Header, Footer, ProjectCard...)
│       ├── context/        # Quản lý State toàn cục
│       ├── hooks/          # Các custom hooks
│       ├── pages/          # Các trang chính của hệ thống
│       └── services/       # Layer gọi API
│
├── Week01/                 # Báo cáo & Sản phẩm Tuần 1
│   ├── docs/mockup/        # Bản vẽ Mockup (PNG) & Prompts log, Style guide
│   ├── fjms-frontend/      # Mã nguồn React tại thời điểm kết thúc Tuần 1
│   └── Week01_BaoCaoNhom.docx
│
├── Week02/                 # Báo cáo & Sản phẩm Tuần 2
│   ├── docs/               # Tài liệu giải thích JSX
│   ├── fjms-frontend/      # Mã nguồn React tại thời điểm kết thúc Tuần 2
│   └── Week02_BaoCaoNhom.docx
│
├── Week03/                 # Báo cáo & Sản phẩm Tuần 3
│   ├── docs/               # Sơ đồ luồng dữ liệu (Data Flow Diagram)
│   ├── fjms-frontend/      # Mã nguồn React tại thời điểm kết thúc Tuần 3
│   └── Week03_BaoCaoNhom.docx
│
├── TODO.md                 # Checklist theo dõi tiến độ từng thành viên hàng tuần
└── README.md               # Tài liệu hướng dẫn chung này
```

---

## 🛠️ Hướng dẫn cách chạy thử (Test) dự án từng tuần

Để chạy thử mã nguồn của một tuần cụ thể (Ví dụ: Tuần 3):

1. **Mở terminal và di chuyển vào thư mục code tuần đó:**
   ```bash
   cd "Week03/fjms-frontend"
   ```
2. **Cài đặt thư viện:**
   ```bash
   npm install
   ```
3. **Chạy server phát triển cục bộ:**
   ```bash
   npm run dev
   ```
4. **Mở trình duyệt truy cập:** [http://localhost:5173](http://localhost:5173)
