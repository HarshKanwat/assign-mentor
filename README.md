# Mentor-Student Assignment API

## Overview

This project provides a simple API to manage mentors and students, allowing for the creation of mentors and students, assignment of students to mentors, changing mentors for students, and retrieving information about these relationships. The API is built using Node.js, Express, and MongoDB.

## Features

- Create a mentor
- Create a student
- Assign a student to a mentor
- Add multiple students to a mentor
- Change the mentor for a particular student
- Retrieve all students assigned to a particular mentor
- Retrieve the previously assigned mentor for a student

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv

## Installation
2 Install the dependencies:

bash
npm install
Create a .env file in the root directory and add your MongoDB URI:

env
MONGO_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/your-db-name?retryWrites=true&w=majority
Start the server:

bash
node app.js
API Endpoints
Create Mentor
URL: /mentors

Method: POST

    Body:

    json
    {
      "name": "John Doe"
    }
Create Student
URL: /students

Method: POST

    Body:

    json
    {
      "name": "Jane Smith"
    }
Assign Student to Mentor
URL: /mentors/:id/students

Method: POST

    Body:
    
    json
    {
      "studentIds": ["studentId1", "studentId2"]
    }
Change Mentor for Student
URL: /students/:id/mentor

Method: POST

    Body:
    
    json
    {
      "mentorId": "newMentorId"
    }
Get Students for Mentor

URL: /mentors/:id/students

Method: GET

Get Previously Assigned Mentor for Student
URL: /students/:id/mentor

Method: GET

    Directory Structure
    .
    ├── app.js
    ├── models
    │   ├── mentor.js
    │   └── student.js
    ├── routes
    │   ├── mentor.js
    │   └── student.js
    └── .env
Usage
Use Postman or a similar tool to test the API endpoints.

Ensure MongoDB is running and connected to your application.

Check logs for any errors and debug accordin


```bash
https://github.com/HarshKanwat/assign-mentor.git
cd assign-mentor
