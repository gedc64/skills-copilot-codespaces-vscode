// Create a web server

// 1. Import the express library
const express = require('express');

// 2. Create an express application
const app = express();

// 3. Define a route
app.get('/comments', (req, res) => {
  res.send('This is a list of comments.');
});

// 4. Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// 5. Go to the browser and open http://localhost:3000/comments
// You will see the message "This is a list of comments."
