import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRecipe, fetchRecipeById, fetchCategories } from "./operations"; 
import {Meal, Category, RecipeState} from "../../type"



  const initialState: RecipeState = {
    meals: [],
    recipe: null,
    categories: [],
    status: 'idle',
    error: null,
    currentPage: 1,
  };
const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchRecipe.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipe.fulfilled, (state, action: PayloadAction<Meal[]>) => {
        state.status = 'succeeded';
        state.meals = action.payload;
        state.error = null;
      })

      .addCase(fetchRecipe.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })

      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(fetchRecipeById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipeById.fulfilled, (state, action: PayloadAction<Meal>) => {
        state.status = 'succeeded';
        state.recipe = action.payload;
        state.error = null;
      })
      .addCase(fetchRecipeById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload instanceof Error ? action.payload.message : 'An error occurred';
      });

  },
});

export const { setPage } = recipeSlice.actions;
export default recipeSlice.reducer;