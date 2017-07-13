'use strict';

const path = require('path');
const express = require('express');

// Constants
const PORT = process.env.PORT || 80;
const HOST = 'localhost';

// App
const app = express();
var filename = path.resolve('./version.txt');
app.get('/', (req, res) => {
  //res.sendFile(filename);
  res.send('Hello World!');
});

app.listen(PORT);

process.on('SIGINT', function(){
   process.exit(0);
});

console.log(`Running on http://${HOST}:${PORT}`);
