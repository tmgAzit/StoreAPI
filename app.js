require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');

const notFoundMiddleware = require('./middleware/not-found');
const errMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send(`<h1>Store API</h1> <a href="/api/v1/products">Products route</a>`);
});

// Products routes
app.use('/api/v1/products', productsRouter);

// custom middleware
app.use(notFoundMiddleware);
app.use(errMiddleware);

// Port
const port = process.env.PORT || 3000;

// start server
const start = async () => {
  try {
    // connect database
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`The server is listening at port ` + port)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
