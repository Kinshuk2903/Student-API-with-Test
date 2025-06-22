const Student = require('../../models/Student');

describe('Student Model Unit Test', () => {
  it('should create a student with default enrollmentDate', async () => {
    const student = new Student({
      name: 'Unit User',
      email: 'unit@example.com',
      course: 'Science'
    });
    await student.validate();  // Applies defaults without DB save

    expect(student.name).toBe('Unit User');
    expect(student.email).toBe('unit@example.com');
    expect(student.course).toBe('Science');
    expect(student.enrollmentDate).toBeDefined();
  });
});