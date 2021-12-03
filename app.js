const express = require('express');

const apiRouter = require('./routes/api');
const {
  handleCustomErrors,
  handleInternalServerErrors,
} = require('./controllers/errors');

const app = express();

app.get('/', (req, res, next) => {
  res
    .status(200)
    .send({ msg: 'Hello from the games api - I was deployed through CI 🎉' });
});

app.use('/api', apiRouter);

app.use(handleCustomErrors);
app.use(handleInternalServerErrors);

module.exports = app;
