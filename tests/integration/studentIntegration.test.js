const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Student = require('../../models/Student');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await Student.deleteMany();
});

describe('Student Integration Test', () => {
  it('should save and retrieve a student', async () => {
    const student = new Student({
      name: 'Integration User',
      email: 'int@example.com',
      course: 'CS'
    });
    await student.save();

    const found = await Student.findOne({ email: 'int@example.com' });
    expect(found).not.toBeNull();
    expect(found.name).toBe('Integration User');
  });
});