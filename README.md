# 🎓 Academix - Course Management System

A modern Course Management System where users can explore available courses, enroll in them, manage their added courses, and track their own enrolled courses. The app demonstrates secure authentication, course enrollment logic, and a clean responsive UI — perfect for recruiters or learning platforms.

## 🌐 Live Site

🔗 [Visit Live Site](https://academix-5a4b3.web.app)

## 🔌 Tech Stack

- React.js
- Tailwind CSS + DaisyUI
- Firebase Authentication
- MongoDB (via server)
- Vite
- Axios
- JWT (JSON Web Token)
- Express.js
- react-slick (slider)
- framer-motion (animation)
- sweetalert2 (alerts)
- react-toastify (notifications)
- lucide-react (icons)

## 🚀 Features

### 🔐 Authentication
- Login/Register with Email & Password
- Social Login (Google, GitHub)
- Password validation & visibility toggle
- JWT-based private route protection
- Redirect back to private page after login

### 📋 Course Features
- Browse courses with latest & popular sorting
- Add Course (private route)
- Edit / Delete own courses
- Enroll/Unenroll in a course
- Limit enroll to 3 courses per user
- Limit course seat (e.g., 10 seats max)
- Show remaining seats and disable button if full

### 📄 Pages
- Home Page (Hero Slider, Latest Courses, Popular Courses)
- Course Details Page (with Enroll button logic)
- Add Course Page
- Manage Courses Page (Edit/Delete)
- My Enrolled Courses Page (remove enrollment)
- Custom 404 Not Found Page
- Additional Dynamic Page (optional)
  
### 💡 Additional
- Dynamic route titles
- Loading spinner during API calls
- Toast notifications for actions
- Modal for delete confirmation
- Responsive design on all devices
- Secure .env for Firebase and MongoDB
- Clean, eye-pleasing UI

## 📁 Folder Structure

