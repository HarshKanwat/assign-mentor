const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// Create Student
router.post('/', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } catch (error) {
        res.status(400).send({ error: 'Error creating student' });
    }
});

// Assign or Change Mentor for a particular Student
router.post('/:id/mentor', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).send({ error: 'Student not found' });
        }
        student.mentor = req.body.mentorId;
        await student.save();
        res.send(student);
    } catch (error) {
        res.status(400).send({ error: 'Error assigning or changing mentor for student' });
    }
});

// Get previously assigned mentor for a particular student
router.get('/:id/mentor', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id).populate('mentor');
        if (!student) {
            return res.status(404).send({ error: 'Student not found' });
        }
        res.send(student.mentor);
    } catch (error) {
        res.status(400).send({ error: 'Error fetching mentor for student' });
    }
});

module.exports = router;
