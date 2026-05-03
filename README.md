# 🚀 SkillSphere — Modern E-Learning Platform

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?logo=next.js" />
  <img src="https://img.shields.io/badge/React-18-blue?logo=react" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-38B2AC?logo=tailwind-css" />
  <img src="https://img.shields.io/badge/FramerMotion-Animation-pink?logo=framer" />
  <img src="https://img.shields.io/badge/Status-Production-success" />
</p>

<p align="center">
  A modern, scalable and user-friendly e-learning platform built with Next.js App Router.
</p>

---

## 🔗 Live Demo

👉 https://skill-sphere-two-gamma.vercel.app/

---

## 📌 Overview

**SkillSphere** is a full-featured e-learning platform where users can:

- 📚 Browse courses  
- 🔍 Filter & search content  
- 📄 View detailed course info  
- 🔐 Enroll securely  

Built with performance, UX, and clean architecture in mind.

---

## ✨ Features

### 🔐 Authentication
- Email & Google login  
- Protected routes  
- Auto redirect for unauthorized users  

### 📚 Course System
- Dynamic course listing  
- Category filtering  
- Smart search system  

### 📄 Course Details
- Server-side rendering (SSR)  
- Instructor info & metadata  
- Clean UI layout  

### ⚡ User Experience
- Skeleton loaders (`loading.jsx`)  
- Toast notifications (`react-hot-toast`)  
- Smooth animations (`framer-motion`)  

### 🔒 Access Control
- Private routes for logged-in users  
- Redirect + feedback system  

---

## 🧱 Tech Stack

### 🎨 Frontend
- ⚡ Next.js 14 (App Router)  
- ⚛️ React  
- 🎨 Tailwind CSS  
- 🎬 Framer Motion  

### 🧠 State & UX
- React Hooks  
- React Hot Toast  

### 🗄️ Backend / Data
- Static JSON API (GitHub Hosted)  
- Node.js (`fs/promises`)  

### 🔑 Authentication
- Custom Auth Client (Email + Social Login)  

---

## 🧰 Tools & Utilities

- 🖼️ Next.js Image Optimization  
- 🧭 App Router Navigation  
- 🔀 Dynamic Routing  
- ⚙️ Server & Client Component Architecture  

---

## 📂 Project Structure

```bash
src/
├── app/
│   ├── page.jsx
│   ├── courses/
│   │   └── [id]/
│   │       ├── page.jsx
│   │       ├── loading.jsx
│   ├── login/
│   ├── signup/
│   ├── error.jsx
│
├── components/
│   ├── Banner.jsx
│   ├── TopSkills.jsx
│   ├── TrendingCourse.jsx
│   ├── TopInstructor.jsx
│   ├── Learn.jsx
│   ├── StartLearning.jsx
│
├── lib/
│   └── auth-client.js
