import axios from "axios";
import { API_URL } from "utils/index";

// CREATE TAG
const createTag = async (token: string, tagsData: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post(`${API_URL}/tags`, tagsData, config);

  return data;
};

// GET ALL TAG
const getAllTag = async () => {
  const { data } = await axios.get(`${API_URL}/tags`);
  return data;
};

// GET TAG
const getTagById = async (slug: string) => {
  const { data } = await axios.get(`${API_URL}/tags/${slug}`);

  return data;
};

// DELETE TAG
const deleteTag = async (slug: string, token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.delete(`${API_URL}/tags/${slug}`, config);
  return data;
};

const tagsService = {
  createTag,
  getAllTag,
  getTagById,
  deleteTag,
};

export default tagsService;
