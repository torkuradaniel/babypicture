
// Import required modules
import express from 'express';

// Create an Express application
const app = express();

// Import function from app.js
import {someAsyncFunction}  from './app.js'; 

// import multer from 'multer'
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// Define a sample route
// app.post('/baby-picture', (req, res) => {
//   someAsyncFunction();
//   // res.send('Hello, this is the homepage!');
  
// });

app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.post('/baby-picture', async (req, res) => {

  res.setHeader('Content-Type', 'application/json');

  try {
    const {firstImage} = req.body;
    const {secondImage} = req.body;
    const {babyGender} = req.body;

    // Ensure that the request contains two image files and a gender parameter
    if (!firstImage || !secondImage || !babyGender) {
      return res.status(400).json({ error: 'Please provide two image files and a gender parameter.' });
    }

    // Process the images (you can add more image processing logic here)
    // For simplicity, we'll assume the images are already processed

    // Call the detectGender function to get the result
    const output = await someAsyncFunction(firstImage, secondImage, babyGender)

    res.json({ image: output });

  } catch (error) {
    res.status(500).json({ error: error.message || 'Something went wrong.' });
  }
});



const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); 
});

