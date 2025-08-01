# Task Management Frontend

A modern and responsive task management web application built with **React** and **Tailwind CSS**, designed to help users create, manage, and organize their tasks easily. This app includes a fun spinning wheel to randomly choose tasks, providing a gamified productivity experience.

> 🚀 Developed as part of a MERN stack challenge following strict Figma design guidelines.

---

## Project Resources

🌍 [Netlify](https://task-management-client-1746.netlify.app/)  
💻 [Backend Repo](https://github.com/Nadim-Nion/task-management-backend)  
📦 [Frontend Repo](https://github.com/Nadim-Nion/task-management-frontend)

---

## Features

- ✅ Responsive Dashboard UI
- ✅ Create, View, Edit & Delete Tasks
- ✅ Filter tasks by category and status
- ✅ Fun Spin Wheel to pick a random task
- ✅ Token-based Authentication (with HTTP-only cookies)
- ✅ Protected Routes for authenticated users
- ✅ User-friendly loading and empty states
- ✅ Error handling and feedback messages
- ✅ Mobile-first & pixel-perfect UI following Figma design

---

## Tech Stack

### Frontend

- ⚛️ React
- 💨 Tailwind CSS
- 🎨 DaisyUI (UI Components)
- 🧠 Context API (State Management)
- 📦 Axios (API calls)
- 🔐 React Router DOM (Routing)
- ✅ React Hook Form + Yup (Form handling & validation)
- 🔄 Vite (Blazing-fast build tool)

---

## Folder Structure

```plaintext
task-management-frontend/
│
├── dist/ # Build output (after running build)
├── node_modules/ # Project dependencies
├── public/ # Public files
│ └── vite.svg # Vite logo
│
├── src/ # Source code
│ ├── assets/ # Static assets (images, icons, etc.)
│ │
│ ├── layouts/ # Layout components
│ │ └── MainLayout.jsx
│ │
│ ├── pages/ # Page-level components
│ │ └── DashboardPage/
│ │ ├── Dashboard.jsx
│ │ └── TaskDetails.jsx
│ │
│ ├── routes/ # Routing configuration
│ │ └── BasicRoutes.jsx
│ │
│ ├── App.css # App-level styles
│ ├── App.jsx # Root App component
│ ├── index.css # Global styles
│ ├── main.jsx # Entry point
│
├── .gitignore # Git ignore file
├── eslint.config.js # ESLint configuration
├── index.html # Main HTML file
├── package.json # Project metadata and scripts
├── package-lock.json # Dependency lock file
├── README.md # Project documentation
└── vite.config.js # Vite configuration
```

---

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Nadim-Nion/task-management-frontend.git
cd task-management-frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## Authentication Flow

- Login / Sign Up using email and password

- JWT token stored in HTTP-only cookies

- Protected dashboard routes

- Logout functionality included

- (Optional) Password Reset

---

## Deployment

- Frontend: Netlify

- Backend: Vercel

- MongoDB: MongoDB Atlas

---

## Design Reference

This project is built by following the provided [Figma Design](https://www.figma.com/design/5iMEaU0uMrI5AWsAxHfkba/MERN--Test?node-id=1001-46&p=f&t=wE5A7xcwEUwrkwQL-0) strictly for pixel-perfect UI across screen sizes

---

## Notes

✅ Fully mobile responsive (XS to Monitor)

💡 Clean and modular code structure

⚠️ Proper error boundaries and loading states

🎯 Designed for scalability and readability

---

## License

This project is licensed under the MIT License — feel free to use, modify, and share.

---

### Author

Hi, I am **Nadim Mahmud Nion**. I have recently concluded my graduation from the department of Computer Science and Engineering (CSE) at **Daffodil International University (DIU)**. I have been learning **MERN Stack Web Development** since 2022.

I am skilled in the following technologies:

- React
- Express.js
- TypeScript
- Mongoose
- Postman
- MongoDB Compass
- NoSQLBooster
- Node.js
- MongoDB Atlas
- JWT
- Stripe
- Vite
- React Router
- Firebase (Authentication & Hosting)
- Vercel
- JavaScript
- Advanced JavaScript
- Daisy UI
- Bootstrap
- Tailwind
- HTML5
- CSS3
- Media Query

I have built multiple projects using these skills. You are invited to visit my [GitHub profile](https://github.com/Nadim-Nion) to explore my work — and don’t forget to ⭐ star the projects you like!

> Developed by Nadim Mahmud Nion 💻
