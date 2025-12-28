# Habesha Restaurant 🍽️

A full-stack web application for an Ethiopian restaurant that allows customers to browse the menu and place food orders online, while enabling administrators to manage orders efficiently. Built with a NestJS backend and a modern, responsive frontend.

## ✨ Features

### Customer
- Browse the restaurant menu with images and descriptions  
- Place food orders online with customer details and special requests  
- View restaurant information, services, testimonials, and contact details  
- Fully responsive design for mobile and desktop  

### Admin
- Secure admin dashboard  
- View and manage customer orders  
- Track order details and statistics  

### Backend
- RESTful API for order management (CRUD)  
- Database integration using TypeORM  
- CORS enabled for frontend-backend communication  
- Type-safe development with TypeScript  

## 🛠 Tech Stack

**Backend**
- NestJS  
- TypeScript  
- TypeORM  
- MySQL (PostgreSQL supported)  

**Frontend**
- HTML5  
- CSS / Bootstrap 5  
- JavaScript / TypeScript  

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)  
- npm or yarn  
- MySQL or PostgreSQL database  

### Backend Setup

1. Install dependencies:
   ```sh
   cd backend
   npm install
Configure the database connection in ormconfig.js or ormconfig.ts.

Run database migrations (if applicable):

npm run typeorm migration:run


Start the backend server:

npm run start:dev


Backend runs at:

http://localhost:3000

Frontend Setup

Open the frontend directly in your browser:

Customer interface: frontend/customer/index.html

Admin dashboard: frontend/admin/admin-index.html
👥 Team Members

Teyiba Aman

Ekram Shemsu

Entisar Elias

Hikma Oumer

Yeabsira Abiy

📝 Notes

TypeORM synchronize is enabled for development; disable it in production

CORS is enabled for development; configure it properly for production

Authentication is partially configured and should be reviewed before production use
