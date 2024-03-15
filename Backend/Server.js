const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORTjs || 5001;

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URIjs)
    .then((x) => {
        console.log(`Connected to the database successfully! Database name: "${x.connections[0].name}"`)
    })
    .catch((err) => {
        console.error(`Error connecting to the database: ${err}`)
    });


// Define a schema for the contact form data
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

// Create a model based on the schema
const Contact = mongoose.model('Contact', contactSchema);

// Middleware to parse JSON
app.use(cors());
app.use(bodyParser.json());

// Route to handle form submission
app.post('/api/contact', async (req, res) => {
  try {
    // Create a new contact document
    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });

    // Save the contact document to the database
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error saving contact form data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
