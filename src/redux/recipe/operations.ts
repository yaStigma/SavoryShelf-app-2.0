import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1";

export const fetchRecipe = createAsyncThunk(
  "recipe/fetch",
  async (
    { category, search }: { category?: string; search?: string },
    thunkAPI
  ) => {
    try {
      let url = "/search.php?s=";
      let params = {};

      if (search) {
        params = { s: search.trim() };
      } else if (category) {
        url = "/filter.php";
        params = { c: category.trim() };
      } else {
        url = "/search.php?f=a";
      }
      const { data } = await axios.get(url, { params });

      return data.meals || [];
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "recipe/fetchCategories",
  async () => {
    try {
      const response = await axios.get("/list.php?c=list");
      return response.data.meals;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  }
);

export const fetchRecipeById = createAsyncThunk(
  "recipe/fetchById",
  async (id: string) => {
    try {
      const { data } = await axios.get(`/lookup.php?i=${id}`);
      return data.meals[0];
    } catch (error) {
      console.error("Error fetching recipe by ID:", error);
      throw error;
    }
  }
);
