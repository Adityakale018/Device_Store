# Device Store - MERN E-Commerce Platform

A modern, professional online mobile phone shopping website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## 🚀 Features

- **Authentication & Authorization**: JWT-based authentication with role-based access control
- **Product Management**: Browse, search, and filter mobile phones
- **Shopping Cart**: Add to cart, update quantities, persistent cart
- **Order Management**: Place orders, track order history
- **Admin Panel**: Manage products, orders, and users
- **Payment Integration**: Razorpay/Stripe integration
- **Responsive Design**: Mobile-first responsive UI

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- Framer Motion

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Cloudinary (image uploads)

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/Adityakale018/Device_Store.git
cd Device_Store
```

2. Install backend dependencies
```bash
cd server
npm install
```

3. Install frontend dependencies
```bash
cd ../client
npm install
```

4. Configure environment variables (see Environment Variables section)

5. Run the application
```bash
# Start backend (from server directory)
npm run dev

# Start frontend (from client directory)
npm run dev
```

## 🔐 Environment Variables

### Backend (.env in /server)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

### Frontend (.env in /client)
```
VITE_API_URL=http://localhost:5000
```

## 📂 Project Structure

```
Device_Store/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
├── server/          # Express backend
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── server.js
└── README.md
```

## 🎯 Roadmap

See [Issue #1](https://github.com/Adityakale018/Device_Store/issues/1) for the complete project roadmap.

## 👨‍💻 Author

**Aditya Kale**
- GitHub: [@Adityakale018](https://github.com/Adityakale018)

## 📄 License

This project is open source and available under the MIT License.