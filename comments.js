// Create a web server

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

// Array to store comments
let comments = [];

// Function to create a new comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.status(201).end();
});

// Function to get all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Function to get a specific comment
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments[id];
  if (comment) {
    res.send(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

// Function to update a comment
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const newComment = req.body.comment;
  comments[id] = newComment;
  res.status(200).end();
});

// Function to delete a comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  comments.splice(id, 1);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});