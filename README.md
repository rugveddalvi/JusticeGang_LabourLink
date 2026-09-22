# 👷 LabourLink

> **A platform connecting workers with employers and job opportunities.**

LabourLink is a **Spring Boot-based web application** designed to bridge the gap between workers and employers. It provides a centralized platform where workers can showcase their skills and experience, while employers can post job opportunities and find suitable workers.

The project focuses on making the process of **finding workers and finding employment simpler, faster, and more organized**.

---

## ✨ Features

### 👷 Worker

* Register and create a worker account
* Create and update worker profile
* Add skills and experience
* Browse available jobs
* Search for suitable opportunities
* Apply for jobs
* Track job applications

### 🏢 Employer

* Register and create an employer account
* Create and manage employer profile
* Post job opportunities
* Define required skills and job details
* View available workers
* Review job applications
* Manage posted jobs

### 🔐 Authentication & Security

* User registration and login
* Role-based access for workers and employers
* Secure API endpoints
* Password protection

---

## 🛠️ Tech Stack

| Technology          | Purpose                        |
| ------------------- | ------------------------------ |
| **Java**            | Core programming language      |
| **Spring Boot**     | Backend framework              |
| **Spring Web**      | REST API development           |
| **Spring Data JPA** | Database interaction           |
| **Hibernate**       | ORM                            |
| **Spring Security** | Authentication & authorization |
| **MySQL**           | Database                       |
| **Maven**           | Dependency management & build  |
| **Git & GitHub**    | Version control                |

> Update/remove any technology that isn't actually used in the project.

---

## 🏗️ Project Architecture

```text
Client / Frontend
       │
       ▼
 REST API
       │
       ▼
┌──────────────────────┐
│    Spring Boot       │
│                      │
│  Controller Layer    │
│         ↓            │
│  Service Layer       │
│         ↓            │
│  Repository Layer    │
│         ↓            │
│      Database        │
└──────────────────────┘
```

### Main Layers

**Controller**

Handles HTTP requests and exposes REST APIs.

**Service**

Contains the application's business logic.

**Repository**

Handles database operations using Spring Data JPA.

**Entity**

Represents the application's database tables.

---

## 📂 Project Structure

```text
src/
├── main/
│   ├── java/
│   │   └── ...
│   │       ├── controller/
│   │       ├── service/
│   │       ├── repository/
│   │       ├── entity/
│   │       └── config/
│   │
│   └── resources/
│       ├── application.properties
│       └── static/
│
└── test/
    └── java/

pom.xml
README.md
```

> The exact package/folder names should be updated according to the repository.

---

## 🔄 How LabourLink Works

### Worker

```text
Register
   ↓
Create Profile
   ↓
Add Skills & Experience
   ↓
Browse Jobs
   ↓
Apply for Job
   ↓
Track Application
```

### Employer

```text
Register
   ↓
Create Profile
   ↓
Post Job
   ↓
Specify Requirements
   ↓
Receive Applications
   ↓
Review & Select Worker
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Java JDK 17 or later
* Maven
* MySQL
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/rugveddalvi/JusticeGang_LabourLink.git
```

```bash
cd JusticeGang_LabourLink
```

### 2. Configure the Database

Create a MySQL database:

```sql
CREATE DATABASE labourlink;
```

Update your database configuration in:

```text
src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/labourlink
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

> Use the actual database name and configuration from the project if they are different.

### 3. Build the Project

Using Maven:

```bash
mvn clean install
```

### 4. Run the Application

```bash
mvn spring-boot:run
```

The application will start on:

```text
http://localhost:8080
```

---

## 🔌 API Overview

The application provides REST APIs for managing users, workers, employers, jobs, and applications.

Example API structure:

```text
/api/auth
    ├── POST /register
    └── POST /login

/api/workers
    ├── GET /
    ├── GET /{id}
    └── PUT /{id}

/api/employers
    ├── GET /
    └── GET /{id}

/api/jobs
    ├── GET /
    ├── POST /
    ├── GET /{id}
    └── DELETE /{id}

/api/applications
    ├── POST /
    ├── GET /
    └── PUT /{id}
```

> Replace these endpoints with the actual endpoints implemented in the project.

---

## 🎯 Project Objectives

* Provide a digital platform for connecting workers and employers
* Simplify the process of finding employment opportunities
* Help employers discover workers based on their requirements
* Maintain structured worker and job information
* Provide secure user authentication
* Build a scalable backend using Spring Boot and REST APIs

---

## 🔮 Future Enhancements

* 🤖 AI-based worker-job matching
* 📍 Location-based job recommendations
* ⭐ Worker ratings and reviews
* 💬 Real-time chat
* 🔔 Notifications
* 📱 Android/mobile application
* 💳 Online payment integration
* 🌐 Multi-language support
* 📊 Advanced analytics and dashboards
* 🛡️ Worker verification and safety features

---

## ⭐ Support

If you find LabourLink useful, consider giving the repository a ⭐.

**LabourLink — Connecting Workers with Opportunities.**
