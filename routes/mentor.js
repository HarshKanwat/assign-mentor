const express = require('express');
const router = express.Router();
const Mentor = require('../models/mentor');
const Student = require('../models/student');

// Create Mentor
router.post('/', async (req, res) => {
    const mentor = new Mentor(req.body);
    await mentor.save();
    res.send(mentor);
});

// Assign Students to Mentor
router.post('/:id/students', async (req, res) => {
    const mentor = await Mentor.findById(req.params.id);
    const students = await Student.find({ _id: { $in: req.body.studentIds }, mentor: null });
    students.forEach(student => {
        student.mentor = mentor._id;
        student.save();
    });
    mentor.students.push(...students.map(student => student._id));
    await mentor.save();
    res.send(mentor);
});

// Get all students for a particular mentor
router.get('/:id/students', async (req, res) => {
    const mentor = await Mentor.findById(req.params.id).populate('students');
    res.send(mentor.students);
});

module.exports = router;
