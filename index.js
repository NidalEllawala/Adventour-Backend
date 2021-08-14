require('dotenv').config();

const express = require('express');
const app = new express();
// const cors = require('cors');

const { router } = require('./routes/router');

const PORT = process.env.PORT || 3000;

app.use(router);

app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log(`Server is running on http://localhost:${PORT}!!🧩`);
});

module.exports = app;
