const express = require('express');
const app = express();
const port = 3001; // Different from the React's default port 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
