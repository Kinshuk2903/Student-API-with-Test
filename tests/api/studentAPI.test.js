const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const express = require('express');
const request = require('supertest');
const studentRoutes = require('../../routes/students');

let mongoServer;
let app;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());

  app = express();
  app.use(express.json());
  app.use('/api/students', studentRoutes);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  const Student = require('../../models/Student');
  await Student.deleteMany();
});

describe('Student API Tests', () => {
  it('POST /api/students - should create a student', async () => {
    const res = await request(app)
      .post('/api/students')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        course: 'Math'
      });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('John Doe');
  });

  it('GET /api/students - should list students', async () => {
    const Student = require('../../models/Student');
    await Student.create({
      name: 'Jane Doe',
      email: 'jane@example.com',
      course: 'Physics'
    });

    const res = await request(app).get('/api/students');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].name).toBe('Jane Doe');
  });

  it('PUT /api/students/:id - should return 404 for non-existent ID', async () => {
    const res = await request(app)
      .put('/api/students/507f1f77bcf86cd799439011')
      .send({ name: 'Updated Name' });
    expect(res.statusCode).toBe(404);
  });

  it('DELETE /api/students/:id - should return 404 for non-existent ID', async () => {
    const res = await request(app)
      .delete('/api/students/507f1f77bcf86cd799439011');
    expect(res.statusCode).toBe(404);
  });

  it('POST /api/students - should return 400 for missing required fields', async () => {
    const res = await request(app)
      .post('/api/students')
      .send({});
    expect(res.statusCode).toBe(400);
  });
});