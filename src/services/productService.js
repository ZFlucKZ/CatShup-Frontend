import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/products/`;

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

// Delete a product
const deleteProduct = async (id) => {
  const res = await axios.delete(API_URL + id);

  return res.data;
};

// Get a product
const getProduct = async (id) => {
  const res = await axios.get(API_URL + id);

  return res.data;
};

// Update a product
const updateProduct = async (id, formData) => {
  const res = await axios.patch(`${API_URL}${id}`, formData);

  return res.data;
};

const productService = {
  createNewProduct,
  getProducts,
  deleteProduct,
  getProduct,
  updateProduct,
};

export default productService;
