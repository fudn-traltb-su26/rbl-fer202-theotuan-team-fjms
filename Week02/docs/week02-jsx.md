# TÀI LIỆU HỌC TẬP TUẦN 2: CƠ CHẾ COMPILATION CỦA JSX & CÁC KHÁI NIỆM CỐT LÕI

Tài liệu này giải thích chi tiết cơ chế hoạt động của JSX (JavaScript XML), cách nó được biên dịch sang JavaScript thuần và những điểm lưu ý quan trọng khi phát triển ứng dụng React.

---

## 1. JSX là gì? Cơ chế biên dịch JSX sang JS

### 1.1. Khái niệm JSX
**JSX** (JavaScript XML) là một cú pháp mở rộng (syntax extension) cho JavaScript. Nó cho phép lập trình viên viết các cấu trúc giống như HTML ngay bên trong file JavaScript. JSX không phải là HTML, và trình duyệt không thể đọc trực tiếp JSX.

### 1.2. Cơ chế biên dịch (Compilation)
Trước khi chạy trong trình duyệt, mã nguồn JSX phải được chuyển đổi (compile) thành mã JavaScript tiêu chuẩn. Công cụ thường dùng cho việc này là **Babel** hoặc các bộ build hiện đại như **esbuild** / **SWC** (được tích hợp trong Vite).

* **Trong các phiên bản React cũ (trước v17)**:
  Mỗi thẻ JSX sẽ được biên dịch thành một lời gọi hàm `React.createElement()`.
  
  *Mã JSX ban đầu:*
  ```jsx
  const element = <h1 className="title">Hello World</h1>;
  ```
  *Mã JavaScript sau khi biên dịch:*
  ```javascript
  const element = React.createElement('h1', { className: 'title' }, 'Hello World');
  ```

* **Trong React 17, 18 và React 19 (phiên bản hiện tại của dự án)**:
  React giới thiệu **JSX Transform** mới. Trình biên dịch sẽ tự động import các hàm đặc biệt từ package React (ví dụ: `react/jsx-runtime`) và biên dịch trực tiếp mà không cần gọi `React.createElement`.
  
  *Mã JavaScript sau khi biên dịch (React 19)*:
  ```javascript
  import { jsx as _jsx } from 'react/jsx-runtime';
  const element = _jsx('h1', { className: 'title', children: 'Hello World' });
  ```
  *Lợi ích*: Bạn không cần phải `import React from 'react'` ở đầu mỗi file chỉ để sử dụng JSX nữa.

---

## 2. Phân biệt các thuộc tính trong JSX và HTML tiêu chuẩn

Vì JSX thực chất là một cú pháp mở rộng của JavaScript chứ không phải HTML, các thuộc tính của thẻ JSX được ánh xạ thành các thuộc tính của đối tượng JavaScript (DOM properties) dưới dạng camelCase.

### 2.1. Phân biệt `class` và `className`
* **Trong HTML**: Chúng ta sử dụng thuộc tính `class` để gán class CSS cho thẻ.
  ```html
  <div class="card"></div>
  ```
* **Trong JSX**: Từ khóa `class` là một từ khóa đã được bảo lưu (reserved word) trong JavaScript (dùng để định nghĩa lớp). Do đó, React sử dụng thuộc tính **`className`** thay thế.
  ```jsx
  <div className="card"></div>
  ```

### 2.2. Phân biệt `for` và `htmlFor`
* **Trong HTML**: Thuộc tính `for` trong thẻ `<label>` được dùng để liên kết label đó với một `<input>` thông qua `id`.
  ```html
  <label for="username">Tên đăng nhập</label>
  <input id="username" type="text" />
  ```
* **Trong JSX**: Từ khóa `for` là từ khóa bảo lưu trong JavaScript (dùng cho vòng lặp `for`). Do đó, React sử dụng **`htmlFor`** thay thế để tránh xung đột cú pháp.
  ```jsx
  <label htmlFor="username">Tên đăng nhập</label>
  <input id="username" type="text" />
  ```

---

## 3. Cơ chế xử lý sự kiện (Event Handling) trong JSX

Cách xử lý sự kiện trong JSX có hai điểm khác biệt lớn so với HTML truyền thống:

### 3.1. Đặt tên sự kiện bằng camelCase
Các sự kiện trong JSX được viết bằng quy tắc **camelCase** thay vì viết thường toàn bộ (lowercase).
* **HTML**: `onclick`, `onchange`, `onsubmit`, `onkeydown`
* **JSX**: `onClick`, `onChange`, `onSubmit`, `onKeyDown`

### 3.2. Truyền hàm xử lý dưới dạng tham chiếu (Reference)
Trong HTML, bạn truyền một chuỗi chứa lệnh JS vào sự kiện. Trong JSX, bạn truyền trực tiếp tham chiếu tới hàm xử lý nằm trong cặp ngoặc nhọn `{}`.

* **HTML (Chuỗi lệnh)**:
  ```html
  <button onclick="handleClick()">Click me</button>
  ```
* **JSX (Tham chiếu hàm)**:
  ```jsx
  function App() {
    function handleClick() {
      alert('Clicked!');
    }
    return <button onClick={handleClick}>Click me</button>;
  }
  ```

> **Cảnh báo lỗi phổ biến**: Tránh gọi hàm trực tiếp trong sự kiện nếu không có arrow function bọc ngoài.
> * **Sai (Sẽ tự chạy ngay khi render)**: `onClick={handleClick()}`
> * **Đúng (Chỉ chạy khi click thực sự)**: `onClick={handleClick}` hoặc `onClick={() => handleClick()}`
