
# Habesha Restaurant 

A full-stack web application for managing restaurant orders, customers, and administration, built with NestJS (backend) and a modern HTML/CSS/JS frontend.

---

## Features 

- **Customer Interface:**  
  - View menu, book tables, contact the restaurant, and read testimonials.
- **Admin Interface:**  
  - Manage orders, view analytics, and handle restaurant operations.
- **Order Management:**  
  - Create, read, update, and delete restaurant orders.
- **Authentication:**  
  - Secure login and access using JWT.
- **Responsive Design:**  
  - Modern, mobile-friendly UI using Bootstrap and SCSS.
- **Database Integration:**  
  - Uses TypeORM for database operations (MySQL/PostgreSQL supported).

---

## Tech Stack

- **Backend:** NestJS, TypeScript, TypeORM, JWT, Passport, MySQL/PostgreSQL
- **Frontend:** HTML, CSS, SCSS, Bootstrap, JavaScript
- **Testing:** Jest



## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MySQL or PostgreSQL database

### Backend Setup

1. Install dependencies:
    ```sh
    cd backend
    npm install
    ```
2. Configure your database in `ormconfig.js` or `ormconfig.ts`.
3. Run database migrations (if any):
    ```sh
    npm run typeorm migration:run
    ```
4. Start the backend server:
    ```sh
    npm run start:dev
    ```

### Frontend Setup

1. Open the `frontend/customer/index.html` or `frontend/admin/admin-index.html` in your browser.

## Team Members
- Teyiba Aman
- Ekram Shemsu
- Entisar Elias
- Hikma Oumer
- Yeabsira Abiy
