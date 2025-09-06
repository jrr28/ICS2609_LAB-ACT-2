# 📘 Courses CRUD API

A simple **Node.js + Express + MySQL** REST API for managing courses.  
Supports the five basic CRUD operations: **Create, Read, Update, Delete**.

---

## 🔹 Project Overview
This API manages courses with these fields:
- `id` → auto-increment primary key
- `code` → unique course code (e.g. CS101)
- `title` → course title (e.g. Intro to CS)
- `units` → number of units
- `created_at` → timestamp when created

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/courses-crud-api.git
cd courses-crud-api

npm install

CREATE DATABASE lab_crud;

USE lab_crud;

CREATE TABLE courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(20) UNIQUE NOT NULL,
  title VARCHAR(100) NOT NULL,
  units INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=lab_crud_3isc
PORT=3000

npm start
