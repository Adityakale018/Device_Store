# Device Store - MERN E-Commerce Platform

A modern, professional online mobile phone shopping website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## 🚀 Features

- **Authentication & Authorization**: JWT-based authentication with role-based access control
- **Product Management**: Browse, search, and filter mobile phones
- **Shopping Cart**: Add to cart, update quantities, persistent cart
- **Order Management**: Place orders, track order history
- **Admin Panel**: Manage products, orders, and users
- **Payment Integration**: Ready for Razorpay/Stripe integration
- **Responsive Design**: Mobile-first responsive UI with Tailwind CSS
- **Protected Routes**: Client-side route protection for authenticated users
- **Admin Dashboard**: Separate admin interface for managing products and orders

## 🛠️ Tech Stack

### Frontend
- **React.js 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **Axios** - HTTP client with interceptors
- **Framer Motion** - Animation library
- **React Hot Toast** - Toast notifications
- **Lucide React** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Cloudinary** - Image upload and management
- **CORS** - Cross-origin resource sharing
- **Express Validator** - Request validation

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/Adityakale018/Device_Store.git
cd Device_Store
```

2. **Backend Setup**
```bash
cd server
npm install

# Create .env file from example
cp .env.example .env
# Edit .env and add your MongoDB URI, JWT secret, and Cloudinary credentials
```

3. **Frontend Setup**
```bash
cd ../client
npm install

# Create .env file from example
cp .env.example .env
# Edit .env and set VITE_API_URL (default: http://localhost:5000)
```

4. **Start the Application**

Open two terminal windows:

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
# Server will run on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
# Client will run on http://localhost:5173
```

5. **Access the Application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 🔐 Environment Variables

### Backend (.env in /server)
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/device_store
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/device_store

# JWT Secret (use a strong random string in production)
JWT_SECRET=your_jwt_secret_key_here_change_in_production

# Cloudinary Configuration (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Frontend (.env in /client)
```env
# API Configuration
VITE_API_URL=http://localhost:5000
```

## 📂 Project Structure

```
Device_Store/
├── client/                      # React frontend
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── AdminRoute.jsx
│   │   ├── pages/               # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── admin/
│   │   │       ├── Dashboard.jsx
│   │   │       └── ManageProducts.jsx
│   │   ├── context/             # React Context
│   │   │   └── AuthContext.jsx
│   │   ├── services/            # API services
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env.example
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/                      # Express backend
│   ├── models/                  # Mongoose models
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Cart.js
│   │   └── Order.js
│   ├── controllers/             # Route controllers
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── cartController.js
│   │   └── orderController.js
│   ├── routes/                  # API routes
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── cartRoutes.js
│   │   └── orderRoutes.js
│   ├── middleware/              # Custom middleware
│   │   ├── auth.js
│   │   ├── admin.js
│   │   └── errorHandler.js
│   ├── utils/                   # Utility functions
│   │   ├── generateToken.js
│   │   └── cloudinaryConfig.js
│   ├── config/                  # Configuration
│   │   └── db.js
│   ├── .env.example
│   ├── server.js
│   └── package.json
│
└── README.md
```

## 🔌 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get User Profile
```http
GET /api/auth/profile
Authorization: Bearer <token>
```

### Product Endpoints

#### Get All Products
```http
GET /api/products
Query Parameters: ?category=smartphone&brand=Apple&search=iPhone
```

#### Get Single Product
```http
GET /api/products/:id
```

#### Create Product (Admin Only)
```http
POST /api/products
Authorization: Bearer <admin-token>
Content-Type: application/json

{
  "name": "iPhone 15 Pro",
  "brand": "Apple",
  "price": 999,
  "description": "Latest iPhone model",
  "category": "smartphone",
  "stock": 50,
  "images": [{ "url": "...", "public_id": "..." }]
}
```

#### Update Product (Admin Only)
```http
PUT /api/products/:id
Authorization: Bearer <admin-token>
```

#### Delete Product (Admin Only)
```http
DELETE /api/products/:id
Authorization: Bearer <admin-token>
```

### Cart Endpoints

#### Get User Cart
```http
GET /api/cart
Authorization: Bearer <token>
```

#### Add to Cart
```http
POST /api/cart
Authorization: Bearer <token>
Content-Type: application/json

{
  "productId": "product_id_here",
  "quantity": 1
}
```

#### Update Cart Item
```http
PUT /api/cart/:itemId
Authorization: Bearer <token>
Content-Type: application/json

{
  "quantity": 2
}
```

#### Remove from Cart
```http
DELETE /api/cart/:itemId
Authorization: Bearer <token>
```

### Order Endpoints

#### Create Order
```http
POST /api/orders
Authorization: Bearer <token>
Content-Type: application/json

{
  "items": [...],
  "shippingAddress": {
    "address": "123 Main St",
    "city": "New York",
    "postalCode": "10001",
    "country": "USA"
  }
}
```

#### Get User Orders
```http
GET /api/orders
Authorization: Bearer <token>
```

#### Get All Orders (Admin Only)
```http
GET /api/orders/admin/all
Authorization: Bearer <admin-token>
```

#### Update Order Status (Admin Only)
```http
PUT /api/orders/:id/status
Authorization: Bearer <admin-token>
Content-Type: application/json

{
  "orderStatus": "shipped"
}
```

## 🎯 Roadmap

See [Issue #1](https://github.com/Adityakale018/Device_Store/issues/1) for the complete project roadmap.

## 📝 Development Notes

### Creating an Admin User
Currently, there's no registration interface for admin users. To create an admin user:
1. Register a normal user through the UI
2. Manually update the user's role in MongoDB to 'admin'
```javascript
db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { role: "admin" } }
)
```

### Testing the Application
1. Register a new user
2. Login with the credentials
3. Browse products (add some products via admin panel first)
4. Add items to cart
5. View profile and orders

## 🐛 Known Issues
- Multer has security vulnerabilities in 1.x (upgrade to 2.x recommended)
- Payment integration is not yet implemented

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👨‍💻 Author

**Aditya Kale**
- GitHub: [@Adityakale018](https://github.com/Adityakale018)

## 📄 License

This project is open source and available under the MIT License.