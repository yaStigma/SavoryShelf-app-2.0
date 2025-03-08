import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchCategories, fetchRecipe } from "../../redux/recipe/operations";
import { selectCategories } from "../../redux/recipe/selectors";

import CSS from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryChange = (category: string) => {
    dispatch(fetchRecipe({ category }));
  };

  return (
    <div className={CSS.filterContainer}>
      <label htmlFor="categorySelect">Select a Category:</label>
      <select
        id="categorySelect"
        onChange={(e) => handleCategoryChange(e.target.value)}
        className={CSS.select}
      >
        <option value="">Choose a category</option>
        {categories.map((category) => (
          <option key={category.strCategory} value={category.strCategory}>
            {category.strCategory}
          </option>
        ))}
      </select>
    </div>
  );
}
