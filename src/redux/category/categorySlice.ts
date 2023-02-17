import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import categoryService from "./categoryService";

interface CategoryState {
  categories: any;
  category: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: CategoryState = {
  category: null,
  categories: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// CREATE CATEGORY
export const createCategory = createAsyncThunk(
  "categories/create",
  async (categoryData: any, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await categoryService.createCategory(token, categoryData);
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

// GET ALL CATEGORIES
export const getAllCategories = createAsyncThunk(
  "categories/getAll",
  async (_, thunkAPI: any) => {
    try {
      return await categoryService.getAllCategories();
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

// GET CATEGORY BY
export const getCategoryById = createAsyncThunk(
  "category/getById",
  async (slug: string, thunkAPI: any) => {
    try {
      return await categoryService.getCategoryById(slug);
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

// DELETE CATEGORY
export const deleteCategory = createAsyncThunk(
  "category/delete",
  async (id: string, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await categoryService.deleteCategory(id, token);
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

//   SLICES

export const categorySlice = createSlice({
  name: "cateogries",
  initialState,
  reducers: {
    reset: (state: CategoryState) => initialState,
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(HYDRATE, (state: any, action: any) => {
        state.categories = action.payload.category.categories;
        state.category = action.payload.category.category;
        state.isError = action.payload.category.isError;
        state.isLoading = action.payload.category.isLoading;
        state.isSuccess = action.payload.category.isSuccess;
        state.message = action.payload.category.message;
      })
      .addCase(createCategory.pending, (state: CategoryState) => {
        state.isLoading = true;
      })
      .addCase(
        createCategory.fulfilled,
        (state: CategoryState, action: any) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.categories.push(action.payload);
        }
      )
      .addCase(createCategory.rejected, (state: CategoryState, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllCategories.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getAllCategories.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getAllCategories.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCategoryById.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getCategoryById.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.category = action.payload;
      })
      .addCase(getCategoryById.rejected, (state: any, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteCategory.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(deleteCategory.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.categories = state.categories.filter(
          (category: any) => category._id !== action.payload._id
        );
      });
  },
});

export const { reset } = categorySlice.actions;
export default categorySlice.reducer;
