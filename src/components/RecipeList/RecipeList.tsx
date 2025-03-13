import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchRecipe } from "../../redux/recipe/operations";
import { selectRecipeState } from "../../redux/recipe/selectors";
import { setPage } from "../../redux/recipe/slice";
import { useLocation, useNavigate } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import Pagination from "../Pagination/Pagination";

import CSS from "./RecipeList.module.css";

  const ITEMS_PER_PAGE = 4; // Винесли фіксовану змінну за межі компонента

  export default function RecipeList() {

    const dispatch = useDispatch<AppDispatch>();
    const { meals, status, currentPage } = useSelector(selectRecipeState);
 
  
    const location = useLocation();
    const navigate = useNavigate();
  
    useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const pageFromURL = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
    
      if (pageFromURL !== currentPage) {
        dispatch(setPage(pageFromURL));
      }
    
      dispatch(fetchRecipe({ category: "", search: "" }));
    }, [dispatch, location.search]);
  

  
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentMeals = meals.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    const totalPages = Math.ceil(meals.length / ITEMS_PER_PAGE);

    const handlePageChange = (newPage: number) => {
      dispatch(setPage(newPage));
      const searchParams = new URLSearchParams(location.search);
      searchParams.set("page", String(newPage));
      navigate(`?${searchParams.toString()}`);
    };
  
  

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Something went wrong!</div>;
  }

  return (
    <div className={CSS.wrapperList}>
      <ul className={CSS.list}>
      {currentMeals.length > 0 ? (
          currentMeals.map((meal) => (
            <li key={meal.idMeal} className={CSS.item}>
              <RecipeCard meal={meal} />
            </li>
          ))
        ) : (
          <li>No Recipes found</li>
        )}
      </ul>
      {meals.length > ITEMS_PER_PAGE && (
  <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
)}
    </div>
  );
}
