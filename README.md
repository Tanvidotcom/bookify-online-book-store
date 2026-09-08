# BOOKIFY — Online Book Store

A full-stack online bookstore application built using **React, Spring Boot, and MySQL**.

BOOKIFY allows users to register and log in, browse a collection of books, search and filter books, add books to a shopping cart, manage quantities, complete checkout, and place orders. User, book, and order information is stored using a MySQL database.

---

## 📌 Project Overview

BOOKIFY is a web-based online bookstore designed to provide a simple, responsive, and user-friendly digital shopping experience.

The application is divided into two major parts:

- **Frontend** — React application responsible for the user interface and client-side interactions.
- **Backend** — Spring Boot REST API responsible for business logic, authentication, book management, and order processing.
- **Database** — MySQL used for persistent storage of users, books, orders, and order items.

The frontend communicates with the backend using **REST APIs and JSON**.

---

# 🎯 Problem Statement

Traditional bookstore systems require customers to physically visit a store to browse books and purchase them. Managing customers, books, shopping carts, and orders manually can also be inefficient.

There is a need for an online bookstore system that allows customers to:

- Browse books from anywhere
- Search for books quickly
- Filter books by category
- Create an account
- Log in securely
- Add books to a shopping cart
- Modify cart quantities
- Enter delivery information
- Place orders online
- Store order information digitally

---

# 💡 Proposed Solution

BOOKIFY provides a centralized online bookstore platform where users can browse and purchase books through a responsive web interface.

The React frontend communicates with a Spring Boot backend through REST APIs. The backend processes user authentication, retrieves book information, creates orders, and communicates with the MySQL database using Spring Data JPA and Hibernate.

The system provides:

- User registration and login
- BCrypt password hashing
- Dynamic book catalogue
- Search functionality
- Category filtering
- Shopping cart management
- Checkout
- Order placement
- Order persistence
- Responsive design

---

# 🎯 Objectives

The main objectives of BOOKIFY are:

1. Develop a responsive online bookstore website.
2. Provide a simple and user-friendly interface for browsing books.
3. Implement user registration and login functionality.
4. Store user information securely in MySQL.
5. Hash user passwords using BCrypt.
6. Retrieve book information dynamically from the backend.
7. Implement book search and category filtering.
8. Implement shopping cart functionality.
9. Allow users to increase, decrease, and remove cart items.
10. Provide a checkout interface for delivery information.
11. Store customer orders in the database.
12. Store individual order items associated with each order.
13. Develop REST APIs using Spring Boot.
14. Maintain separation between frontend, backend, and database layers.
15. Provide a responsive interface for desktop, tablet, and mobile devices.

---

# 🏗️ System Architecture

BOOKIFY follows a **three-tier architecture** consisting of the presentation layer, application layer, and data layer.

```text
                         ┌─────────────────────────┐
                         │          USER           │
                         │                         │
                         │      Web Browser        │
                         └────────────┬────────────┘
                                      │
                                      │ HTTP Requests
                                      │ / JSON Responses
                                      ▼
              ┌────────────────────────────────────────────┐
              │             PRESENTATION LAYER             │
              │                                            │
              │              REACT FRONTEND                │
              │                                            │
              │  Pages                                     │
              │  ├── Home                                  │
              │  ├── Register                              │
              │  ├── Login                                 │
              │  ├── Catalogue                             │
              │  ├── Cart                                  │
              │  ├── Checkout                              │
              │  └── Order Success                         │
              │                                            │
              │  Components                                │
              │  ├── Navbar                                │
              │  ├── Footer                                │
              │  └── BookCard                              │
              │                                            │
              │  Utilities                                 │
              │  └── Cart Management                       │
              └────────────────────┬───────────────────────┘
                                   │
                                   │ REST API
                                   │
                                   ▼
              ┌────────────────────────────────────────────┐
              │              APPLICATION LAYER             │
              │                                            │
              │               SPRING BOOT                  │
              │                                            │
              │  Controllers                               │
              │  ├── UserController                        │
              │  ├── BookController                        │
              │  └── OrderController                       │
              │                                            │
              │  Services                                  │
              │  ├── UserService                           │
              │  ├── BookService                           │
              │  └── OrderService                          │
              │                                            │
              │  Repositories                              │
              │  ├── UserRepository                        │
              │  ├── BookRepository                        │
              │  ├── OrderRepository                       │
              │  └── OrderItemRepository                   │
              │                                            │
              │  Entities                                  │
              │  ├── User                                  │
              │  ├── Book                                  │
              │  ├── Order                                 │
              │  └── OrderItem                             │
              └────────────────────┬───────────────────────┘
                                   │
                                   │ JPA / Hibernate
                                   ▼
              ┌────────────────────────────────────────────┐
              │                 DATA LAYER                 │
              │                                            │
              │                MYSQL DATABASE              │
              │                                            │
              │  ┌─────────────┐                           │
              │  │    users    │                           │
              │  └─────────────┘                           │
              │                                            │
              │  ┌─────────────┐                           │
              │  │    books    │                           │
              │  └─────────────┘                           │
              │                                            │
              │  ┌─────────────┐                           │
              │  │    orders   │                           │
              │  └─────────────┘                           │
              │                                            │
              │  ┌─────────────┐                           │
              │  │ order_items │                           │
              │  └─────────────┘                           │
              └────────────────────────────────────────────┘
```

---

# 🧱 Backend Architecture

The Spring Boot backend follows a layered architecture:

```text
                    Client Request
                          │
                          ▼
                 ┌─────────────────┐
                 │   Controller    │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │     Service     │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │   Repository    │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │ MySQL Database  │
                 └─────────────────┘
```

### Controller Layer

The controller layer receives HTTP requests and exposes REST endpoints.

Controllers:

- `UserController`
- `BookController`
- `OrderController`

### Service Layer

The service layer contains the application's business logic.

Services:

- `UserService`
- `BookService`
- `OrderService`

### Repository Layer

The repository layer communicates with the database using Spring Data JPA.

Repositories:

- `UserRepository`
- `BookRepository`
- `OrderRepository`
- `OrderItemRepository`

### Entity Layer

The entity layer represents database tables as Java classes using JPA.

Entities:

- `User`
- `Book`
- `Order`
- `OrderItem`

---

# 📂 Project Structure

```text
bookify-online-book-store/
│
├── .gitignore
├── README.md
│
├── BookStore/
│   │
│   ├── pom.xml
│   ├── mvnw
│   ├── mvnw.cmd
│   │
│   ├── .mvn/
│   │   └── wrapper/
│   │       └── maven-wrapper.properties
│   │
│   └── src/
│       │
│       ├── main/
│       │   │
│       │   ├── java/
│       │   │   └── com/
│       │   │       └── store/
│       │   │           └── BookStore/
│       │   │               │
│       │   │               ├── BookStoreApplication.java
│       │   │               ├── DataInitializer.java
│       │   │               │
│       │   │               ├── controller/
│       │   │               │   ├── UserController.java
│       │   │               │   ├── BookController.java
│       │   │               │   └── OrderController.java
│       │   │               │
│       │   │               ├── entity/
│       │   │               │   ├── User.java
│       │   │               │   ├── Book.java
│       │   │               │   ├── Order.java
│       │   │               │   └── OrderItem.java
│       │   │               │
│       │   │               ├── repository/
│       │   │               │   ├── UserRepository.java
│       │   │               │   ├── BookRepository.java
│       │   │               │   ├── OrderRepository.java
│       │   │               │   └── OrderItemRepository.java
│       │   │               │
│       │   │               └── service/
│       │   │                   ├── UserService.java
│       │   │                   ├── BookService.java
│       │   │                   └── OrderService.java
│       │   │
│       │   └── resources/
│       │       └── application.properties
│       │
│       └── test/
│           └── java/
│               └── com/
│                   └── store/
│                       └── BookStore/
│                           └── BookStoreApplicationTests.java
│
└── frontend/
    │
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    ├── eslint.config.js
    ├── index.html
    │
    ├── public/
    │   ├── favicon.svg
    │   └── icons.svg
    │
    └── src/
        │
        ├── assets/
        │   └── hero.png
        │
        ├── components/
        │   ├── Navbar.jsx
        │   ├── Footer.jsx
        │   ├── Footer.css
        │   └── BookCard.jsx
        │
        ├── pages/
        │   ├── Home.jsx
        │   ├── Home.css
        │   ├── Register.jsx
        │   ├── Register.css
        │   ├── Login.jsx
        │   ├── Login.css
        │   ├── Catalogue.jsx
        │   ├── Catalogue.css
        │   ├── Cart.jsx
        │   ├── Cart.css
        │   ├── Checkout.jsx
        │   ├── Checkout.css
        │   ├── OrderSuccess.jsx
        │   └── OrderSuccess.css
        │
        ├── utils/
        │   └── cartUtils.js
        │
        ├── App.jsx
        ├── App.css
        ├── index.css
        └── main.jsx
```

---

# 🛠️ Technology Stack

| Technology | Version | Purpose |
|---|---:|---|
| Java | 26.0.2 | Backend programming language |
| Spring Boot | 4.1.1 | Backend framework |
| Maven | Wrapper | Dependency and build management |
| Spring Data JPA | Spring Boot managed | Database access |
| Hibernate | Spring Boot managed | Object-relational mapping |
| MySQL | 8.x | Relational database |
| React | 19.x | Frontend library |
| Vite | 8.2.2 | Frontend development and build tool |
| Node.js | 24.18.0 | JavaScript runtime |
| npm | 11.16.0 | Package manager |
| React Router | 7.x | Client-side routing |
| JavaScript | ES6+ | Frontend programming |
| HTML5 | — | Web page structure |
| CSS3 | — | Styling and responsive design |
| BCrypt | Spring Security Crypto | Password hashing |

> Versions managed by Spring Boot or npm can be verified directly in `pom.xml` and `package-lock.json`.

---

# 🔐 Security

BOOKIFY implements basic security practices for user authentication and application configuration.

## Password Hashing

Passwords are never intentionally stored as plain text.

BCrypt is used to hash passwords before they are saved to the database.

```text
                User Password
                      │
                      ▼
                    BCrypt
                      │
                      ▼
              Hashed Password
                      │
                      ▼
                  MySQL DB
```

During login, BCrypt verifies the entered password against the stored hash.

## CORS

The backend allows requests from the React development server:

```text
http://localhost:5173
```

## Sensitive Configuration

Database passwords and other secrets should not be committed to GitHub.

The repository uses:

```text
YOUR_MYSQL_PASSWORD
```

as a placeholder.

Each developer should configure their own local MySQL password.

---

# 🔄 Application Workflow

## 1. Registration Workflow

```text
User
  │
  ▼
Registration Page
  │
  │ Name + Email + Password
  ▼
POST /api/users/register
  │
  ▼
UserController
  │
  ▼
UserService
  │
  ▼
BCrypt Password Hashing
  │
  ▼
UserRepository
  │
  ▼
MySQL users table
```

---

## 2. Login Workflow

```text
User
  │
  ▼
Login Page
  │
  │ Email + Password
  ▼
POST /api/users/login
  │
  ▼
UserController
  │
  ▼
UserService
  │
  ▼
BCrypt Password Verification
  │
  ▼
Login Successful
  │
  ▼
User information stored in browser
```

---

## 3. Book Catalogue Workflow

```text
Catalogue Page
      │
      ▼
GET /api/books
      │
      ▼
BookController
      │
      ▼
BookService
      │
      ▼
BookRepository
      │
      ▼
MySQL books table
      │
      ▼
JSON Response
      │
      ▼
React displays books
```

---

## 4. Search and Filtering Workflow

```text
Catalogue
    │
    ├───────────────┐
    │               │
    ▼               ▼
Search by       Category
Title/Author    Filter
    │               │
    └───────┬───────┘
            ▼
     Filtered Results
```

---

## 5. Shopping Cart Workflow

```text
Catalogue
    │
    ▼
Add to Cart
    │
    ▼
Browser localStorage
    │
    ▼
Cart Page
    │
    ├── Increase Quantity
    │
    ├── Decrease Quantity
    │
    └── Remove Item
    │
    ▼
Calculate Total
```

---

## 6. Checkout Workflow

```text
Cart
 │
 ▼
Proceed to Checkout
 │
 ▼
Enter Delivery Details
 │
 ├── Full Name
 ├── Email
 ├── Phone
 ├── Address
 ├── City
 └── Pincode
 │
 ▼
Place Order
 │
 ▼
POST /api/orders
 │
 ▼
OrderController
 │
 ▼
OrderService
 │
 ├───────────────┐
 ▼               ▼
OrderRepository  OrderItemRepository
 │               │
 └───────┬───────┘
         ▼
      MySQL
```

---

## 7. Order Completion Workflow

```text
Order Successfully Saved
          │
          ▼
     Cart Cleared
          │
          ▼
   Order Success Page
          │
          ▼
Display Order Information
          │
          ├── Order ID
          ├── Total
          └── Status
```

---

# 🌐 REST API Documentation

## User APIs

### Register User

```http
POST /api/users/register
```

Example request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login User

```http
POST /api/users/login
```

Example request:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

---

# 📚 Book APIs

### Get All Books

```http
GET /api/books
```

### Get Book By ID

```http
GET /api/books/{id}
```

### Add Book

```http
POST /api/books
```

---

# 📦 Order APIs

### Create Order

```http
POST /api/orders
```

### Get All Orders

```http
GET /api/orders
```

### Get Order Items

```http
GET /api/orders/{orderId}/items
```

---

# 🗄️ Database Design

Database name:

```text
online_book_store_spring
```

The application uses four main tables:

```text
┌──────────────┐
│    users     │
└──────────────┘

┌──────────────┐
│    books     │
└──────────────┘

┌──────────────┐
│    orders    │
└──────────────┘

┌──────────────┐
│ order_items  │
└──────────────┘
```

---

## Users Table

Stores registered user information.

| Column | Description |
|---|---|
| id | Unique user ID |
| name | User name |
| email | User email |
| password | BCrypt hashed password |

---

## Books Table

Stores the bookstore catalogue.

| Column | Description |
|---|---|
| id | Unique book ID |
| title | Book title |
| author | Book author |
| category | Book category |
| price | Book price |
| description | Book description |
| image_url | Book image URL |

---

## Orders Table

Stores customer order information.

| Column | Description |
|---|---|
| id | Unique order ID |
| user_id | Associated user ID |
| full_name | Customer name |
| email | Customer email |
| phone | Customer phone |
| address | Delivery address |
| city | Delivery city |
| pincode | Delivery pincode |
| total | Order total |
| status | Order status |
| order_date | Date and time of order |

---

## Order Items Table

Stores individual books belonging to an order.

| Column | Description |
|---|---|
| id | Unique order item ID |
| order_id | Associated order ID |
| book_id | Associated book ID |
| quantity | Quantity ordered |
| price | Book price |

---

# 🔗 Database Relationship

The order structure can be represented as:

```text
                 ┌──────────────┐
                 │    users     │
                 └──────┬───────┘
                        │
                        │ user_id
                        ▼
                 ┌──────────────┐
                 │    orders    │
                 └──────┬───────┘
                        │
                        │ order_id
                        ▼
                 ┌──────────────┐
                 │ order_items  │
                 └──────┬───────┘
                        │
                        │ book_id
                        ▼
                 ┌──────────────┐
                 │    books     │
                 └──────────────┘
```

---

# 💻 Running the Project Locally

## Prerequisites

Make sure the following are installed:

- Java JDK 26.0.2
- Node.js 24.18.0
- npm 11.16.0
- MySQL 8.x
- MySQL Workbench
- Git
- Visual Studio Code or another IDE

---

# 1. Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/Tanvidotcom/bookify-online-book-store.git
```

Navigate into the project:

```bash
cd bookify-online-book-store
```

---

# 2. Configure MySQL

Start MySQL.

Create the database:

```sql
CREATE DATABASE online_book_store_spring;
```

The application uses:

```text
Host: localhost
Port: 3307
Database: online_book_store_spring
Username: root
```

Open:

```text
BookStore/src/main/resources/application.properties
```

Configure your local MySQL password:

```properties
spring.application.name=BookStore

spring.datasource.url=jdbc:mysql://localhost:3307/online_book_store_spring
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8080
```

Replace:

```text
YOUR_MYSQL_PASSWORD
```

with your own local MySQL password.

**Do not commit your real password to GitHub.**

---

# 3. Run the Spring Boot Backend

Open a terminal in:

```text
bookify-online-book-store/BookStore
```

On Windows, run:

```powershell
.\mvnw.cmd spring-boot:run
```

The backend will run at:

```text
http://localhost:8080
```

---

# 4. Install Frontend Dependencies

Open another terminal.

Navigate to:

```text
bookify-online-book-store/frontend
```

Run:

```bash
npm install
```

This installs all dependencies listed in `package.json`.

---

# 5. Run the React Frontend

From the `frontend` folder, run:

```bash
npm run dev
```

The Vite development server will start at:

```text
http://localhost:5173
```

---

# 6. Open BOOKIFY

Open a browser and visit:

```text
http://localhost:5173
```

---

# 🧪 Application Testing Flow

The recommended testing sequence is:

```text
1. Open BOOKIFY
       ↓
2. Register a new account
       ↓
3. Login
       ↓
4. Browse Catalogue
       ↓
5. Search for a book
       ↓
6. Filter by category
       ↓
7. Add book to Cart
       ↓
8. Increase / decrease quantity
       ↓
9. Remove items if required
       ↓
10. Proceed to Checkout
       ↓
11. Enter delivery details
       ↓
12. Place Order
       ↓
13. View Order Success page
       ↓
14. Verify order in MySQL
```

---

# 🎨 User Interface

BOOKIFY uses a modern bookstore-inspired visual design.

The interface focuses on:

- Clean typography
- Warm neutral colours
- Minimal layouts
- Clear navigation
- Responsive design
- Subtle animations
- Readable content
- Consistent spacing
- Mobile-friendly layouts

The design uses:

- **DM Serif Display** for major headings
- **Inter** for body text and interface elements

---

# 📱 Responsive Design

The frontend is designed to adapt to:

- Desktop computers
- Laptops
- Tablets
- Mobile phones

Responsive CSS media queries are used to adjust layouts, spacing, typography, and navigation for smaller screens.

---

# 📚 Sample Book Catalogue

The application includes sample books initialized through the Spring Boot data initializer.

| Book | Author | Category | Price |
|---|---|---|---:|
| The Alchemist | Paulo Coelho | Fiction | ₹399 |
| Atomic Habits | James Clear | Self Help | ₹499 |
| Clean Code | Robert C. Martin | Programming | ₹699 |
| Think Like a Monk | Jay Shetty | Self Help | ₹450 |

---

# 🔧 Configuration

## Backend

Backend configuration is located at:

```text
BookStore/src/main/resources/application.properties
```

Default development configuration:

```properties
spring.datasource.url=jdbc:mysql://localhost:3307/online_book_store_spring
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8080
```

## Frontend

The frontend communicates with the backend using:

```text
http://localhost:8080
```

The React application runs on:

```text
http://localhost:5173
```

---

# 🧰 Development Tools

The project was developed using:

- Visual Studio Code
- Spring Boot
- Maven
- React
- Vite
- Node.js
- npm
- MySQL
- MySQL Workbench
- Git
- GitHub

---

# 🚀 Future Enhancements

The following features can be added in future versions:

- JWT-based authentication
- Protected backend APIs
- Role-based authorization
- Admin dashboard
- Admin book management
- Add, edit, and delete books
- User order history
- Order tracking
- Payment gateway integration
- Wishlist functionality
- Book reviews and ratings
- Inventory management
- Pagination
- Advanced search
- Email order confirmation
- Server-side cart management
- Cloud deployment
- Production environment configuration

---

# 📌 Current Limitations

The current version is primarily designed for educational and portfolio purposes.

Future versions can improve:

- Authentication using JWT
- Server-side cart storage
- Role-based access control
- Server-side order validation
- Payment processing
- Production-ready secret management
- Deployment configuration

---

# 👩‍💻 Developer

**Tanvi Nanaware**

### Project

**BOOKIFY — Online Book Store**

### Technologies

**React | Spring Boot | MySQL**

---

# 📄 License

This project was developed for educational and portfolio purposes.
