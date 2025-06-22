const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// CREATE a new student
router.post('/', async (req, res) => {
  try {
    // Validate required fields
    if (!req.body.name || !req.body.email || !req.body.course) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const student = new Student(req.body);
    const saved = await student.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE a student
router.put('/:id', async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a student
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Student.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;