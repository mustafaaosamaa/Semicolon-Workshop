// http code that not finished.

// const http = require('http');

// // Create a server object
// const server = http.createServer((req, res) => {
//   const { url, method } = req
//   if (url = "/users") {
//     if (method = "GET") {
//       res.writeHead(200);

//     }
//     else if (method = "POST") {
//       res.writeHead(201, );
//     }
//   }
//   res.end();
// });

// // Start the server and listen on the specified port
// server.listen(3000, () => {
//   console.log(`Server is running on port 3000`);
// });
// ------------------------------------------------------------------------


// express code

const express = require('express');

const app = express();
const port = 3000;
app.use(express.json());


app.get('/users/:userId', (req, res) => {
  const { userId } = req.params
  res.send(`Hello, The user id is : ${userId}`);
});

app.post('/admins', (req, res) => {
  const { name, password } = req.body
  res.send(`hello, your name is ${name}`)
})

app.delete('/posts/:postId', (req, res) => {
  const { postId } = req.body
  res.send(`post ${postId} is deleted`)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});