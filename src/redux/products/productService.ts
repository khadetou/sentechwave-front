import axios from "axios";
import { API_URL } from "utils/index";
import { Data } from "utils/interface";
// CREATE PRODUCTS
const createProducts = async (productData: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.post(`${API_URL}/products`, productData, config);
  return data;
};

// GET ALL PRODUCTS

const getAllProducts = async (datas: Data) => {
  const {
    keyword,
    category,
    max,
    min,
    pageNumber,
    pageSize,
    qty,
    req,
    souscategory,
    ssouscategory,
  } = datas;

  const { data } = await axios.get(
    `${API_URL}/products?keyword=${keyword}&pageNumber=${pageNumber}&category=${category}&min=${min}&max=${max}&pageSize=${pageSize}&qty=${qty}&souscategory=${souscategory}&ssouscategory=${ssouscategory}`
  );
  // const res = await fetch(
  //   `${API_URL}/products?keyword=${keyword}&pageNumber=${pageNumber}&category=${category}&min=${min}&max=${max}&pageSize=${pageSize}&qty=${qty}&souscategory=${souscategory}&ssouscategory=${ssouscategory}`
  // );
  // const data = await res.json();

  return data;
};

// GET FILTER PRODUCTS
const getFilterProducts = async (datas: Data) => {
  const {
    keyword,
    category,
    max,
    min,
    pageNumber,
    pageSize,
    qty,
    req,
    souscategory,
    ssouscategory,
  } = datas;

  const { data } = await axios.get(
    `${API_URL}/products?keyword=${keyword}&pageNumber=${pageNumber}&category=${category}&min=${min}&max=${max}&pageSize=${pageSize}&qty=${qty}&souscategory=${souscategory}&ssouscategory=${ssouscategory}`
  );
  // const res = await fetch(
  //   `${API_URL}/products?keyword=${keyword}&pageNumber=${pageNumber}&category=${category}&min=${min}&max=${max}&pageSize=${pageSize}&qty=${qty}&souscategory=${souscategory}&ssouscategory=${ssouscategory}`
  // );
  // const data = await res.json();

  return data;
};

// UPDATE PRODUCT
const updateProduct = async (productData: any, token: any, id: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.put(
    `${API_URL}/products/${id}`,
    productData,
    config
  );

  return data;
};

// GET PRODUCT BY ID
const getProductById = async (id: string) => {
  // const res = await fetch(`${API_URL}/products/${id}`);
  // const data = res.json();
  const { data } = await axios.get(`${API_URL}/products/${id}`);
  return data;
};

// DELETE PRODUCT
const deleteProduct = async (id: string, token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.delete(`${API_URL}/products/${id}`, config);
  return data;
};

export const createReview = async (
  id: string,
  reviewData: any,
  token: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.post(
    `${API_URL}/products/${id}/reviews`,
    reviewData,
    config
  );
  return data;
};

const getTopProducts = async () => {
  const { data } = await axios.get(`${API_URL}/products/top-rated`);

  return data;
};

// CREATE PRODUCT CATEGORY
const createProductCategory = async (categoryData: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post(
    `${API_URL}/product-category`,
    categoryData,
    config
  );
  return data;
};
const createSubCategory = async (categoryData: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post(
    `${API_URL}/product-category/subcat`,
    categoryData,
    config
  );
  return data;
};
const createSubSubCategory = async (categoryData: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post(
    `${API_URL}/product-category/subsubcat`,
    categoryData,
    config
  );
  return data;
};
const createItemCategory = async (categoryData: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post(
    `${API_URL}/product-category/itemscat`,
    categoryData,
    config
  );
  return data;
};

// GET ALL CATEGORIES
const getAllProductCategories = async () => {
  const { data } = await axios.get(`${API_URL}/product-category`);
  return data;
};
const getAllSubCategories = async () => {
  const { data } = await axios.get(`${API_URL}/product-category/subcat`);
  return data;
};
const getAllSubSubCategories = async () => {
  const { data } = await axios.get(`${API_URL}/product-category/subsubcat`);
  return data;
};
const getAllItemstCategories = async () => {
  const { data } = await axios.get(`${API_URL}/product-category/itemscat`);
  return data;
};

// GET PRODUCT CATEGORY BY SLUG
const getProductCategoryBySlug = async (slug: string) => {
  const { data } = await axios.get(`${API_URL}/product-category/${slug}`);
  return data;
};
const getSubCategoryBySlug = async (slug: string) => {
  const { data } = await axios.get(
    `${API_URL}/product-category/subcat/${slug}`
  );
  return data;
};
const getSubSubCategoryBySlug = async (slug: string) => {
  const { data } = await axios.get(
    `${API_URL}/product-category/subsubcat/${slug}`
  );
  return data;
};
const getItemsCategoryBySlug = async (slug: string) => {
  const { data } = await axios.get(
    `${API_URL}/product-category/itemscat/${slug}`
  );
  return data;
};

// DELETE CATEGORY BY SLUG
const deleteProductCategoryBySlug = async (slug: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.delete(
    `${API_URL}/product-category/${slug}`,
    config
  );
  return data;
};
const deleteSubCategoryBySlug = async (slug: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.delete(
    `${API_URL}/product-category/subcat/${slug}`,
    config
  );
  return data;
};
const deleteSubSubCategoryBySlug = async (slug: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.delete(
    `${API_URL}/product-category/subsubcat/${slug}`,
    config
  );
  return data;
};
const deleteItemsCategoryBySlug = async (slug: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.delete(
    `${API_URL}/product-category/itemscat/${slug}`,
    config
  );
  return data;
};

const productsService = {
  createProducts,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  createReview,
  getFilterProducts,
  getTopProducts,
  createProductCategory,
  createSubCategory,
  createSubSubCategory,
  createItemCategory,
  getAllItemstCategories,
  getAllProductCategories,
  getAllSubCategories,
  getAllSubSubCategories,
  getProductCategoryBySlug,
  getSubCategoryBySlug,
  getSubSubCategoryBySlug,
  getItemsCategoryBySlug,
  deleteItemsCategoryBySlug,
  deleteSubCategoryBySlug,
  deleteSubSubCategoryBySlug,
  deleteProductCategoryBySlug,
};
export default productsService;
