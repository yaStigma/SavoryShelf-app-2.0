import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchRecipe } from "../../redux/recipe/operations";
import { selectRecipeState } from "../../redux/recipe/selectors";

import CSS from "./RecipeList.module.css";
import RecipeCard from "../RecipeCard/RecipeCard";
export default function RecipeList() {
  const dispatch = useDispatch<AppDispatch>();
  const { meals, status } = useSelector(selectRecipeState);

  useEffect(() => {
    dispatch(fetchRecipe({ category: "", search: "" }));
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Something went wrong!</div>;
  }

  return (
    <div className={CSS.wrapperList}>
      <ul className={CSS.list}>
        {meals.length > 0 ? (
          meals.map((meal) => (
            <li key={meal.idMeal} className={CSS.item}>
              <RecipeCard meal={meal} />
            </li>
          ))
        ) : (
          <li>No Recipes found</li>
        )}
      </ul>
    </div>
  );
}
