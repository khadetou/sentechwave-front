import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import tagsService from "./tagService";

interface TagsState {
  tags: any;
  tag: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: TagsState = {
  tag: null,
  tags: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// CREATE TAG
export const createTag = createAsyncThunk(
  "tags/create",
  async (tagData: any, thunkAPI: any) => {
    try {
      const { token } = thunkAPI.getState().auth;
      return await tagsService.createTag(token, tagData);
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

// GET ALL tags
export const getAllTags = createAsyncThunk(
  "tags/getAll",
  async (_, thunkAPI: any) => {
    try {
      return await tagsService.getAllTag();
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

// GET tag BY
export const getTagById = createAsyncThunk(
  "tag/getById",
  async (slug: string, thunkAPI: any) => {
    try {
      return await tagsService.getTagById(slug);
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

// DELETE tag
export const deleteTag = createAsyncThunk(
  "tag/delete",
  async (slug: string, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;

      return await tagsService.deleteTag(slug, token);
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

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    reset: (state: TagsState) => initialState,
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(HYDRATE, (state: any, action: any) => {
        state.tags = action.payload.tag.tags;
        state.tag = action.payload.tag.tag;
        state.isError = action.payload.tag.isError;
        state.isLoading = action.payload.tag.isLoading;
        state.isSuccess = action.payload.tag.isSuccess;
        state.message = action.payload.tag.message;
      })
      .addCase(createTag.pending, (state: TagsState) => {
        state.isLoading = true;
      })
      .addCase(createTag.fulfilled, (state: TagsState, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tags.push(action.payload);
      })
      .addCase(createTag.rejected, (state: TagsState, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllTags.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getAllTags.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(getAllTags.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTagById.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getTagById.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.tag = action.payload;
      })
      .addCase(getTagById.rejected, (state: any, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteTag.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(deleteTag.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tags = state.tags.filter(
          (tag: any) => tag._id !== action.payload._id
        );
      });
  },
});

export const { reset } = tagsSlice.actions;
export default tagsSlice.reducer;
