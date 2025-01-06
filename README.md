This project is a full-stack **Employee Management System** that allows users to manage employee records. It includes functionalities to **Create**, **Read**, **Update**, and **Delete (CRUD)** employee information. The system is built with a **React frontend** and a **Spring Boot backend**, with **MySQL** as the database for persistent storage.

---

## Features:
1. View a list of employees.
2. Add new employees.
3. Edit existing employee details.
4. Delete employee records.
5. Responsive and user-friendly interface.

---

## Technologies Used:

### Frontend:
- **React**: A JavaScript library for building dynamic user interfaces.
- **React Router**: For handling navigation between pages.
- **Bootstrap**: For styling and responsive design.

### Backend:
- **Spring Boot**: A powerful framework for building RESTful APIs and handling backend logic.
- **Spring Data JPA**: For database operations and object-relational mapping (ORM) using Hibernate.
- **MySQL**: As the relational database for storing employee records.

---

## How It Works:

1. **Frontend**:
   - Built with **React**, the user interface allows users to interact with the application, such as viewing the employee list, adding new employees, or editing existing records.
   - API calls are made to the backend using the **fetch** API or similar methods.

2. **Backend**:
   - The backend, built with **Spring Boot**, exposes RESTful APIs to handle requests from the frontend.
   - **Spring Data JPA** (powered by Hibernate) handles database interactions.
   - **MySQL** stores all the employee data.

---

## API Endpoints:

### Base URL: `/api/employees`

| HTTP Method | Endpoint               | Description                  |
|-------------|------------------------|------------------------------|
| `GET`       | `/api/employees`       | Retrieve all employees.      |
| `POST`      | `/api/employees`       | Add a new employee.          |
| `PUT`       | `/api/employees/{id}`  | Update an existing employee. |
| `DELETE`    | `/api/employees/{id}`  | Delete an employee by ID.    |

---

## Steps to Run:

1. **Backend**:
   - Navigate to the backend directory.
   - Update the `application.properties` file to include your MySQL database credentials.
   - Build and run the Spring Boot application using Maven:
     ```bash
     mvn spring-boot:run
     ```
   - The backend server starts at `http://localhost:8080`.

2. **Frontend**:
   - Navigate to the frontend directory.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React development server:
     ```bash
     npm start
     ```
   - The frontend server starts at `http://localhost:3000`.

---

## Project Highlights:
- **Frontend**: React with modern UI and responsive design.
- **Backend**: Spring Boot APIs with proper error handling and validation.
- **Database**: Persistent storage using MySQL.
- **Separation of Concerns**: Clear distinction between frontend, backend, and database responsibilities.

---

## Future Enhancements:
- Add search and filter functionality for employees.
- Implement authentication and authorization (e.g., login system).
- Deploy the project to a cloud platform (e.g., AWS, Heroku, or Azure).

---

