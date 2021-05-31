const mediasoup = require('mediasoup');
const net = require('net');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ done: true });
});

app.listen(3000);
