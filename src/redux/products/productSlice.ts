import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { Data } from "utils/interface";
import productsService from "./productService";

interface ProductState {
  products: any;
  filters: any;
  product: any;
  categories: any;
  subcategories: any;
  subsubcategories: any;
  itemscategories: any;
  category: any;
  subcategory: any;
  subsubcategory: any;
  itemscategory: any;
  topProducts: any;
  page: number;
  pages: number;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: ProductState = {
  products: [],
  categories: [],
  subcategories: [],
  subsubcategories: [],
  itemscategories: [],
  filters: [],
  topProducts: [],
  product: null,
  category: null,
  subcategory: null,
  subsubcategory: null,
  itemscategory: null,
  page: 0,
  pages: 0,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
const initialReview = {
  isError: false,
  isSuccess: false,
  message: "",
};

// CREATE PRODUCTS
export const createProducts = createAsyncThunk(
  "products/create",
  async (productsData: any, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await productsService.createProducts(productsData, token);
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

// GET ALL PRODUCTS
export const getAllProducts = createAsyncThunk(
  "products/getAll",
  async (data: Data, thunkAPI: any) => {
    try {
      return await productsService.getAllProducts(data);
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
// GET ALL PRODUCTS
export const getFiltersProducts = createAsyncThunk(
  "products/getFilters",
  async (data: Data, thunkAPI: any) => {
    try {
      return await productsService.getFilterProducts(data);
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

// GET TOP PROPERTY
export const getTopProducts = createAsyncThunk(
  "property/getTopAll",
  async (_, thunkAPI) => {
    try {
      return await productsService.getTopProducts();
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

// GET PRODUCT BY
export const getProductById = createAsyncThunk(
  "product/getById",
  async (id: string, thunkAPI: any) => {
    try {
      return await productsService.getProductById(id);
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

// DELETE PRODUCT
export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (id: string, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await productsService.deleteProduct(id, token);
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

// UPDATE PRODUCTS
export const updateProduct = createAsyncThunk(
  "product/update",
  async (productsData: any, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const { id } = productsData;

      return await productsService.updateProduct(productsData.data, token, id);
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
// CREATE REVIEWS
export const createReviews = createAsyncThunk(
  "create/review",
  async (productsData: any, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await productsService.createReview(
        productsData.id,
        productsData.data,
        token
      );
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
// CREATE PRODUCT CATEGORY
export const createProductCategory = createAsyncThunk(
  "categories/create-product-category",
  async (categoryData: any, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await productsService.createProductCategory(categoryData, token);
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
export const createSubCategory = createAsyncThunk(
  "categories/create-subcategory",
  async (categoryData: any, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await productsService.createSubCategory(categoryData, token);
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
export const createSubSubCategory = createAsyncThunk(
  "categories/create-subsubcategory",
  async (categoryData: any, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await productsService.createSubSubCategory(categoryData, token);
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
export const createItemCategory = createAsyncThunk(
  "categories/create-item-category",
  async (categoryData: any, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await productsService.createItemCategory(categoryData, token);
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

// GET ALL PRODUCTS
export const getAllProductCategories = createAsyncThunk(
  "categories/getAllProductCat",
  async (_, thunkAPI: any) => {
    try {
      return await productsService.getAllProductCategories();
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
export const getAllSubCategories = createAsyncThunk(
  "categories/getAllSubCat",
  async (_, thunkAPI: any) => {
    try {
      return await productsService.getAllSubCategories();
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
export const getAllSubSubCategories = createAsyncThunk(
  "categories/getAllSubSubCat",
  async (_, thunkAPI: any) => {
    try {
      return await productsService.getAllSubSubCategories();
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
export const getAllItemCategories = createAsyncThunk(
  "categories/getAllItemsCat",
  async (_, thunkAPI: any) => {
    try {
      return await productsService.getAllItemstCategories();
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

// GET PRODUCT BY SLUG
export const getProductCategoryById = createAsyncThunk(
  "category/getProductCatBy",
  async (slug: string, thunkAPI: any) => {
    try {
      return await productsService.getProductCategoryBySlug(slug);
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
export const getSubCategoryById = createAsyncThunk(
  "category/getSubCatBy",
  async (slug: string, thunkAPI: any) => {
    try {
      return await productsService.getSubCategoryBySlug(slug);
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
export const getSubSubCategoryById = createAsyncThunk(
  "category/getSubSubCatBy",
  async (slug: string, thunkAPI: any) => {
    try {
      return await productsService.getSubSubCategoryBySlug(slug);
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
export const getItemsCategoryById = createAsyncThunk(
  "category/getItemsCatBy",
  async (slug: string, thunkAPI: any) => {
    try {
      return await productsService.getItemsCategoryBySlug(slug);
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

// DELETE PRODUCT CATEGORY
export const deleteProductCategory = createAsyncThunk(
  "category/deleteProductCat",
  async (id: string, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await productsService.deleteProductCategoryBySlug(id, token);
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
export const deleteSubCategory = createAsyncThunk(
  "category/deleteSubCat",
  async (id: string, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await productsService.deleteSubCategoryBySlug(id, token);
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
export const deleteSubSubCategory = createAsyncThunk(
  "category/deleteSubSubCat",
  async (id: string, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await productsService.deleteSubSubCategoryBySlug(id, token);
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
export const deleteItemsCategory = createAsyncThunk(
  "category/deleteItemsCat",
  async (id: string, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await productsService.deleteItemsCategoryBySlug(id, token);
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
// PRODUCT SLICE

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetReviews: (state: ProductState) => {
      state.message = "";
      state.isError = false;
      state.isSuccess = false;
    },
    reset: (state: ProductState) => initialState,
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(HYDRATE, (state: any, action: any) => {
        state.products = action.payload.product.products;
        state.categories = action.payload.product.categories;
        state.subcategories = action.payload.product.subcategories;
        state.itemscategories = action.payload.product.itemscategories;
        state.category = action.payload.product.category;
        state.subsubcategories = action.payload.product.subsubcategories;
        state.itemscategory = action.payload.product.itemscategory;
        state.filters = action.payload.product.filters;
        state.product = action.payload.product.product;
        state.topProducts = action.payload.product.topProducts;
        state.isError = action.payload.product.isError;
        state.isLoading = action.payload.product.isLoading;
        state.isSuccess = action.payload.product.isSuccess;
        state.message = action.payload.product.message;
      })
      .addCase(createProducts.pending, (state: ProductState) => {
        state.isLoading = true;
      })
      .addCase(createProducts.fulfilled, (state: ProductState, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products.push(action.payload);
      })
      .addCase(createProducts.rejected, (state: ProductState, action: any) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.message = action.payload);
      })
      .addCase(getAllProducts.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.page = action.payload.page;
        state.pages = action.payload.pages;
        state.products = action.payload.products;
      })
      .addCase(getAllProducts.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTopProducts.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getTopProducts.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.topProducts = action.payload;
      })
      .addCase(getTopProducts.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getFiltersProducts.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getFiltersProducts.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.page = action.payload.page;
        state.pages = action.payload.pages;
        state.filters = action.payload.products;
      })
      .addCase(getFiltersProducts.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getProductById.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getProductById.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(getProductById.rejected, (state: any, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(updateProduct.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state: any, action: any) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(updateProduct.rejected, (state: any, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteProduct.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = state.products.filter(
          (product: any) => product._id !== action.payload._id
        );
      })
      .addCase(createReviews.rejected, (state: any, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(createReviews.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(createReviews.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(createProductCategory.pending, (state: ProductState) => {
        state.isLoading = true;
      })
      .addCase(
        createProductCategory.fulfilled,
        (state: ProductState, action: any) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.categories.push(action.payload);
        }
      )
      .addCase(
        createProductCategory.rejected,
        (state: ProductState, action: any) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        }
      )
      .addCase(createSubCategory.pending, (state: ProductState) => {
        state.isLoading = true;
      })
      .addCase(
        createSubCategory.fulfilled,
        (state: ProductState, action: any) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.subcategories.push(action.payload);
        }
      )
      .addCase(
        createSubCategory.rejected,
        (state: ProductState, action: any) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        }
      )
      .addCase(createSubSubCategory.pending, (state: ProductState) => {
        state.isLoading = true;
      })
      .addCase(
        createSubSubCategory.fulfilled,
        (state: ProductState, action: any) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.subsubcategories.push(action.payload);
        }
      )
      .addCase(
        createSubSubCategory.rejected,
        (state: ProductState, action: any) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        }
      )
      .addCase(createItemCategory.pending, (state: ProductState) => {
        state.isLoading = true;
      })
      .addCase(
        createItemCategory.fulfilled,
        (state: ProductState, action: any) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.itemscategories.push(action.payload);
        }
      )
      .addCase(
        createItemCategory.rejected,
        (state: ProductState, action: any) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        }
      )
      .addCase(getAllProductCategories.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getAllProductCategories.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getAllProductCategories.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllSubCategories.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getAllSubCategories.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.subcategories = action.payload;
      })
      .addCase(getAllSubCategories.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllSubSubCategories.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getAllSubSubCategories.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.subsubcategories = action.payload;
      })
      .addCase(getAllSubSubCategories.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllItemCategories.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getAllItemCategories.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.itemscategories = action.payload;
      })
      .addCase(getAllItemCategories.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getProductCategoryById.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getProductCategoryById.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.category = action.payload;
      })
      .addCase(getProductCategoryById.rejected, (state: any, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(getSubCategoryById.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getSubCategoryById.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.subcategory = action.payload;
      })
      .addCase(getSubCategoryById.rejected, (state: any, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })

      .addCase(getItemsCategoryById.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getItemsCategoryById.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.itemscategory = action.payload;
      })
      .addCase(getItemsCategoryById.rejected, (state: any, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteProductCategory.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(deleteProductCategory.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.categories = state.categories.filter(
          (category: any) => category._id !== action.payload._id
        );
      })
      .addCase(deleteProductCategory.rejected, (state: any, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteSubCategory.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(deleteSubCategory.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.subcategories = state.subcategories.filter(
          (category: any) => category._id !== action.payload._id
        );
      })
      .addCase(deleteSubCategory.rejected, (state: any, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteSubSubCategory.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(deleteSubSubCategory.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.subsubcategories = state.subsubcategories.filter(
          (category: any) => category._id !== action.payload._id
        );
      })
      .addCase(deleteSubSubCategory.rejected, (state: any, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteItemsCategory.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(deleteItemsCategory.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.itemscategories = state.itemscategories.filter(
          (category: any) => category._id !== action.payload._id
        );
      })
      .addCase(deleteItemsCategory.rejected, (state: any, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export const { reset, resetReviews } = productSlice.actions;
export default productSlice.reducer;
