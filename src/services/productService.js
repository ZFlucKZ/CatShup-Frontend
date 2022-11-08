import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/products`;

// Create New Product
const createNewProduct = async (formData) => {
  const res = await axios.post(API_URL, formData);

  return res.data;
};

// Get all Product
const getProducts = async () => {
  const res = await axios.get(API_URL);

  return res.data;
};

const productService = {
  createNewProduct,
  getProducts,
};

export default productService;
