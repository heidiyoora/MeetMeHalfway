const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`
  *** FLOW METHOD ***\n
  URL: ${req.url}\n
  METHOD: ${req.method}\n`);
  return next();
})




// main app page
app.use('/dist', express.static(path.join(__dirname, '../dist/bundle.js')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
});


// catch all 
app.use('*', (req, res, next) => {
  return res.status(404).send('This is not the page you\'re looking for...')
});

// global error handler
app.use((err, req, res, next) => {
  console.log(err);
  return res.status(404).send('Internal Server Error')
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});

module.exports = app;