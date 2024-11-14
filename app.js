const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mentorRoutes = require('./routes/mentor');
const studentRoutes = require('./routes/student');
require('dotenv').config(); // Add this line to load environment variables

const app = express();
app.use(bodyParser.json());

// Use the MONGO_URI from the .env file
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/mentors', mentorRoutes);
app.use('/students', studentRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
