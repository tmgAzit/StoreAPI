require('dotenv').config();

const connectdb = require('./db/connect');
const Product = require('./models/product');
const jsonProducts = require('./products.json');

const start = async () => {
  try {
    await connectdb(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log('its working..');

    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
