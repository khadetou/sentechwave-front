import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import blogsService from "./blogService";

interface BlogsState {
  blogs: any;
  blog: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: BlogsState = {
  blogs: [],
  blog: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// CREATE BLOG
export const createBlogs = createAsyncThunk(
  "blogs/create",
  async (blogsData: any, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await blogsService.createBlog(blogsData, token);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

// GET ALL BLOG
export const getAllblogs = createAsyncThunk(
  "blogs/getAll",
  async (_, thunkAPI: any) => {
    try {
      return await blogsService.getAllBlog();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// GET BLOG BY SLUG
export const getBlogById = createAsyncThunk(
  "blog/getById",
  async (slug: string, thunkAPI: any) => {
    try {
      return await blogsService.getBlogById(slug);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// DELETE BLOG
export const deleteBlog = createAsyncThunk(
  "blog/delete",
  async (id: string, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await blogsService.deleteBlog(id, token);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// UPDATE BLOG
export const updateBlog = createAsyncThunk(
  "blog/update",
  async (blogsData: any, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;

      const { slug, data } = blogsData;

      return await blogsService.updateBlog(data, token, slug);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    reset: (state: BlogsState) => initialState,
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(HYDRATE, (state: any, action: any) => {
        state.blogs = action.payload.blog.blogs;
        state.blog = action.payload.blog.blog;
        state.isError = action.payload.blog.isError;
        state.isLoading = action.payload.blog.isLoading;
        state.isSuccess = action.payload.blog.isSuccess;
        state.message = action.payload.blog.message;
      })
      .addCase(createBlogs.pending, (state: BlogsState) => {
        state.isLoading = true;
      })
      .addCase(createBlogs.fulfilled, (state: BlogsState, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blogs.push(action.payload);
      })
      .addCase(createBlogs.rejected, (state: BlogsState, action: any) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.message = action.payload);
      })
      .addCase(getAllblogs.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getAllblogs.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(getAllblogs.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getBlogById.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getBlogById.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(getBlogById.rejected, (state: any, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(updateBlog.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(updateBlog.fulfilled, (state: any, action: any) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(updateBlog.rejected, (state: any, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteBlog.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(deleteBlog.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blogs = state.blogs.filter(
          (blog: any) => blog._id !== action.payload._id
        );
      });
  },
});

export const { reset } = blogSlice.actions;
export default blogSlice.reducer;
