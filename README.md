# 🚀 Mini SaaS Task Management System

A production-ready full-stack Task Management application built with modern web technologies. This system allows users to securely manage their personal tasks with authentication and multi-user isolation.

---

## 🧠 Overview

This application follows a SaaS architecture where each user has their own isolated task space. It includes secure authentication, RESTful APIs, and a responsive frontend.

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB (MongoDB Atlas)
* Mongoose
* JWT Authentication
* bcrypt (password hashing)

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend/`:

```
VITE_API_URL=http://localhost:5000/api
```

Run frontend:

```bash
npm run dev
```

---

### 4️⃣ Production Setup

Update frontend `.env`:

```
VITE_API_URL=https://your-backend.onrender.com/api
```

Deploy frontend (Vercel) and backend (Render).

---

## ✨ Features Implemented

### 🔐 Authentication

* User Signup & Login
* Password hashing using bcrypt
* JWT-based authentication
* Protected API routes

### 📌 Task Management

* Create tasks
* View only personal tasks
* Update task (status & title)
* Delete tasks
* Multi-user data isolation

### ⚙️ Backend Features

* RESTful API design
* MVC folder structure
* Middleware for authentication & error handling
* Environment-based configuration

### 🎨 Frontend Features

* Clean and responsive UI (Tailwind)
* Protected routes
* API integration using Axios
* Token-based session handling

---

## 🌐 Live Links

* Frontend: https://your-frontend.vercel.app
* Backend: https://your-backend.onrender.com

---

## 🧪 API Endpoints

### Auth

* `POST /api/auth/signup`
* `POST /api/auth/login`

### Tasks

* `GET /api/tasks`
* `POST /api/tasks`
* `PUT /api/tasks/:id`
* `DELETE /api/tasks/:id`

---

## 🧠 Key Highlights

* Multi-user SaaS architecture
* Secure authentication flow
* Clean separation of concerns
* Production deployment with environment variables
* Scalable and maintainable codebase

---

## 📌 Conclusion

This project demonstrates full-stack development capabilities including backend architecture, frontend integration, authentication, and deployment. It reflects real-world SaaS design principles with a focus on security and scalability.

---
