import axios from "axios";
import { API_URL } from "utils/index";

// CREATE CATEGORY
const createCategory = async (token: string, categoryData: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post(
    `${API_URL}/category`,
    categoryData,
    config
  );
  return data;
};

// GET ALL CATEGORY
const getAllCategories = async () => {
  const { data } = await axios.get(`${API_URL}/category`);
  return data;
};

// GET CATEGORY
const getCategoryById = async (slug: string) => {
  const { data } = await axios.get(`${API_URL}/category/${slug}`);

  return data;
};

// DELETE CATEGORY
const deleteCategory = async (slug: string, token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.delete(`${API_URL}/category/${slug}`, config);
  return data;
};

const categoryService = {
  createCategory,
  getAllCategories,
  getCategoryById,
  deleteCategory,
};
export default categoryService;
