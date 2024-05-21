const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('.'));

app.post('/validate-email', (req, res) => {
  const email = req.body.email;
  const re = /\S+@\S+\.\S+/;
  const isValid = re.test(email);
  if (!email) {
    res.status(400).send('Email is required');
  } else if (!isValid) {
    res.status(400).send('Email is invalid');
  } else {
    res.send('Email is valid');
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});