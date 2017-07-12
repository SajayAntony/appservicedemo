'use strict';

const path = require('path');
const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
var filename = path.resolve('./version.txt');
app.get('/', (req, res) => {
  res.sendFile(filename);
});

app.listen(PORT, HOST);

process.on('SIGINT', function(){
   process.exit(0);
});

console.log(`Running on http://${HOST}:${PORT}`);
