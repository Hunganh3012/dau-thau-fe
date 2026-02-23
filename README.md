# 🚀 Dự án: Quản lý phần mềm Đấu thầu [FrontEnd-Angular]

Frontend hệ thống đấu thầu  
Angular 17 (Standalone API) + SCSS + Tailwind + Kendo UI + Ant Design + CKEditor  
Triển khai sau này trên Vercel

---

# 🏗️ Cấu trúc thư mục hiện tại
```src/
│
├── main.ts
├── index.html
├── styles.scss
│
└── app/
│ │
│ ├── app.component.ts
│ ├── app.component.html
│ ├── app.config.ts
│ ├── app.routes.ts
│ │
│ ├── core/
│ │ ├── guards/
│ │ │ └── auth.guard.ts
│ │ ├── services/
│ │ ├── interceptors/
│ │ └── models/
│ │
│ ├── features/
│ │ └── auth/
│ │ ├── login/
│ │ │ ├── login.component.ts
│ │ │ ├── login.component.html
│ │ │ └── login.component.scss
│ │ │
│ │ └── register/
│ │ ├── register.component.ts
│ │ ├── register.component.html
│ │ └── register.component.scss
│ │
│ ├── shared/
│ │ ├── components/
│ │ ├── directives/
│ │ ├── pipes/
│ │ └── utils/
│ │
│ └── layouts/
```
---

# 📦 Kiến trúc chính
core/
features/
shared/
layouts/


### 🔹 core
Chứa các thành phần dùng toàn hệ thống:
- Auth Guard
- Services
- Interceptors
- Models

### 🔹 features
Chứa từng module nghiệp vụ (Auth, Home, Tender…)

### 🔹 shared
Component / Pipe / Directive dùng chung

### 🔹 layouts
Layout hệ thống (auth-layout, admin-layout…)

---

# 🛠️ Các lệnh đã sử dụng

## 1️⃣ Tạo project Angular 17

```bash
ng new dau-thau-fe --style=scss --routing=false
cd dau-thau-fe 


# Tạo cấu trúc core, features, shared
ng g module core
ng g module shared
ng g module features
```
2️⃣ Tạo cấu trúc core, features, shared
```
ng g module core
ng g module shared
ng g module features
```

3️⃣ Tạo Auth Guard
```
ng g guard core/guards/auth
```
🔐 Tạo màn hình Login đúng chuẩn Angular 17
1️⃣ Tạo folder feature auth
```
mkdir src/app/features/auth
```
2️⃣ Tạo Login Component (Standalone)
```
ng g component features/auth/login --standalone
```
3️⃣ Tạo Register Component (Standalone)
``` 
ng g component features/auth/register --standalone
```

🌐 Cấu hình route mặc định về Login

Trong app.routes.ts:
```
{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}
```
▶️ Chạy project
```
ng serve
```

🚀 Triển khai Vercel (sau này)
Build production:
```
ng build
```
Deploy thư mục:
```
dist/dau-thau-fe
```

📌 Giai đoạn tiếp theo

Tạo Home/Dashboard

Tạo Layout Admin (Sidebar + Header)

Phân quyền theo Role

Kết nối API Backend

Tích hợp Kendo Grid

Tích hợp Ant Design UI

Tích hợp CKEditor
