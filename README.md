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

### Screenshots
<img width="1917" height="870" alt="Screenshot 2026-09-08 185800" src="https://github.com/user-attachments/assets/efa06b07-f935-4b9b-a036-4cea48f40fe8" />
<img width="1917" height="866" alt="Screenshot 2026-09-08 185903" src="https://github.com/user-attachments/assets/37b537eb-6850-48c4-ace2-2f4fb0e3e987" />




---

# 👩‍💻 Developer

**Tanvi Nanaware**

### Project

**BOOKIFY — Online Book Store**


**React | Spring Boot | MySQL**


