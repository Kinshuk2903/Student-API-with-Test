
# Student API with Test Coverage

This project provides a RESTful API for managing students, including full CRUD operations and comprehensive test coverage using Jest and Supertest.

---

## 📌 API Endpoints

| Method | Endpoint               | Description                 |
|--------|------------------------|-----------------------------|
| POST   | /api/students          | Create a new student        |
| GET    | /api/students          | Get all students            |
| PUT    | /api/students/:id      | Update a student by ID      |
| DELETE | /api/students/:id      | Delete a student by ID      |

---

## ⚙ Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- Jest (Testing)
- Supertest (API testing)
- mongodb-memory-server (Mock DB for testing)

---

## 🚀 How to Run

### 1. Install dependencies
```bash
npm install
```

### 2. Start the server
```bash
npm start
```

### 3. Run tests with coverage
```bash
npm test
```

---

## 🧪 Testing Frameworks

- Jest – for unit, integration & API testing
- Supertest – for HTTP assertions on API routes
- mongodb-memory-server – for isolated DB in test environment

---

## 📊 Test Coverage

As of the latest run:

- Statements: 82.35%
- Branches: 77.77%
- Functions: 100%
- Lines: 82.35%

### Screenshot:

![Test Coverage Screenshot](./Code%20coverage%20report%20for%20All%20files%20-%20JioSphere%2022-06-2025%2014_54_53.png)

---

## 📁 Project Structure

```
├── models/
│   └── Student.js
├── routes/
│   └── students.js
├── tests/
│   ├── unit/
│   │   └── studentModel.test.js
│   ├── integration/
│   │   └── studentIntegration.test.js
│   └── api/
│       └── studentAPI.test.js
├── .env
├── server.js
├── package.json
└── README.md
```

---

## ✅ Notes

- API is fully functional and tested.
- Validation errors and edge cases (404, 400) are handled.
- Test coverage exceeds 80%, meeting the goal.
