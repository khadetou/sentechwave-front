import axios from "axios";
import { API_URL } from "utils/index";

// CREATE Blog
const createBlog = async (blogData: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.post(`${API_URL}/blog`, blogData, config);
  return data;
};

// GET ALL Blog

const getAllBlog = async () => {
  const { data } = await axios.get(`${API_URL}/blog`);

  return data;
};

// UPDATE Blog
const updateBlog = async (blogData: any, token: any, slug: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.put(`${API_URL}/blog/${slug}`, blogData, config);

  return data;
};

// GET Blog BY ID
const getBlogById = async (slug: string) => {
  const { data } = await axios.get(`${API_URL}/blog/${slug}`);
  return data;
};

// DELETE Blog
const deleteBlog = async (slug: string, token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.delete(`${API_URL}/blog/${slug}`, config);
  return data;
};

const blogsService = {
  createBlog,
  getAllBlog,
  updateBlog,
  getBlogById,
  deleteBlog,
};

export default blogsService;
