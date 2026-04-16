# ✨ AURA - The Ultimate Social Experience

AURA is a feature-rich, MERN-stack social media web application designed with a sleek, **default dark-mode** interface. From sharing life moments through 'Vibes' (Reels) to real-time interactions, AURA provides a premium and secure environment for social connectivity.

## 🚀 Live Preview
✨ **Experience AURA:** **https://aura-eight-jet.vercel.app/**

---

## 💎 Key Features

- **📱 Vibe (Short Videos/Reels):** Upload and explore short-form video content with a smooth scroll experience.
- **🖼️ Rich Media Posts:** Share your thoughts with support for high-quality images and text.
- **⚡ Real-time Notifications:** Stay updated instantly with Socket.io powered alerts for likes, comments, and follows.
- **💬 Engagement System:** Full-featured like and comment system to interact with the community.
- **👥 Connections:** Follow and unfollow users to curate your personal feed.
- **🔐 Secure Authentication:** - **OTP-on-Email:** Secure registration via Nodemailer for email verification.
  - **Unique Identity:** Login using a personalized username after verification.

---

### **Frontend Core**
![React 19](https://img.shields.io/badge/React_19-%2320232d.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite 7](https://img.shields.io/badge/Vite_7-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS 4](https://img.shields.io/badge/Tailwind_CSS_4-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-%23764ABC.svg?style=for-the-badge&logo=redux&logoColor=white)

### **Key Libraries**
- **State Management:** Redux Toolkit & React-Redux for seamless data flow.
- **Routing:** React Router DOM v7 for optimized client-side navigation.
- **Real-time:** Socket.io-client for instant notifications and chat.
- **HTTP Client:** Axios for reliable backend communication.
- **Utilities:** - `react-easy-crop` for precision image editing (Profile/Posts).
  - `react-spinners` for elegant loading states.
  - `react-icons` & `bootstrap-icons` for a rich visual UI.


---



### **Server-Side Excellence**
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white)
![Firebase](https://img.shields.io/badge/Nodemailer-3399FF?style=for-the-badge&logo=Gmail&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)

### **Key Backend Features**
- **🛡️ Secure Auth:** - Password hashing with **Bcryptjs**.
  - Stateless authentication using **JWT (JSON Web Tokens)**.
  - Secure session handling via **Cookie-parser**.
- **📧 Multi-Channel OTP System:** Integrated with **Nodemailer** for 100% email delivery reliability.
- **☁️ Media Handling:** - **Multer** for efficient multipart/form-data handling.
  - **Cloudinary SDK** for seamless cloud storage of images and 'Vibes' (reels).
- **🔄 Real-time Engine:** **Socket.io** integration for instant notifications and live user interactions.
- **🗄️ Database:** **Mongoose (MongoDB)** with strict schema modeling for data integrity.

### 📂 Folder Structure
```
AURA/
├── frontend/                # React (vite) & Tailwind css
│   ├── public/              # Icons and Static assets
│   ├── src/
│   │   ├── assets/          # Images and Global styles
│   │   ├── components/      # Reusable UI Components
│   │   ├── hooks/           # Custom React Hooks
│   │   ├── pages/           # View Components(Home,Profile, Vibe)
│   │   ├── redux/           # State Management (Slices & Store)
│   │   ├── utils/           # Helper functions & API Config
│   │   ├── App.jsx          # Main App Component
│   │   ├── index.css        # Global Tailwind Styles
│   │   └── main.jsx         # App Entry Point
│   └── package.json
│
└── Backend/                 # Node.js + Express  Server
    ├── config/              # Database & Cloudinary Connection
    ├── controllers/         # Request Handling Logic
    ├── middlewares/         # Auth & Error Handling Middlewares
    ├── models/              # Mongoose Schemas (User, Post, Vibe)
    ├── public/              # Server-side static assets
    ├── routes/              # API Route Definitions
    ├── socket.js            # Real-time Logic (Socket.io)
    ├── index.js             # Server Entry Point
    └── package.json
    
    
```




---



## ⚙️ Installation & Setup

Follow these steps to get the project running on your local machine:

### 1. Clone the repository
```bash
git clone [https://github.com/Shivu2308/aura-app.git](https://github.com/Shivu2308/aura-app.git)

cd aura
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies:

```Bash
cd Backend
npm install
```

Create a .env file in the Backend folder and add your credentials:

```Code snippet
PORT = 5000
MONGODB_URL = your_mongodb_connection_string
JWT_SECRET = your_secret_key
CLOUDINARY_CLOUD_NAME = your_name
CLOUDINARY_API_KEY = your_key
CLOUDINARY_SECRET_KEY = your_secret
EMAIL = your_email@gmail.com
EMAIL_PASS = your_app_password
Start the backend server:
FRONTEND_URL = "https://your-Frontend-URL"
```
Start the backend server:
```Bash
npm run dev
```
### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory, and install dependencies:

```Bash
cd frontend
npm install
```
Start the Vite development server:

```Bash
npm run dev
```
---
---