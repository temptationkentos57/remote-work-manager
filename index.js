const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Chào mừng đến với Remote Work Manager!');
});

app.listen(port, () => {
  console.log(`Server đang chạy trên http://localhost:${port}`);
});