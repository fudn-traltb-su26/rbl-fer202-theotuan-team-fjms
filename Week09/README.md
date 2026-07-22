# TUẦN 9 — CUSTOM HOOKS & REFACTOR CODE

Trong tuần học này, nhóm đã thực hiện:
- Tách biệt logic xử lý trạng thái và giao diện (Separation of Concerns).
- Xây dựng 3 Custom Hooks tái sử dụng:
  - `useFetch(url, params)`: Gọi dữ liệu động từ API (Axios).
  - `useDebounce(value, delay)`: Trì hoãn việc gọi tìm kiếm 500ms khi gõ.
  - `useLocalStorage(key, initialValue)`: Lưu trữ dữ liệu trạng thái đồng bộ xuống LocalStorage.
- Tối ưu hóa thanh tìm kiếm dự án (Search Debouncing) nhằm giảm tải số lượng request liên tục lên json-server.
- Đồng bộ lưu trữ và quản lý danh sách dự án yêu thích (Wishlist) lưu dưới LocalStorage.
