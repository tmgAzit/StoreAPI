const getAllProductsStatic = async (req, res) => {
  // throw new Error('testing async error');
  res.status(200).json({ msg: `get all static products` });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: `get all the products. ` });
};

module.exports = { getAllProducts, getAllProductsStatic };
