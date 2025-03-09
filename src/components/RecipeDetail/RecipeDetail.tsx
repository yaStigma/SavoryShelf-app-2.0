import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useParams } from "react-router";
import { fetchRecipeById } from "../../redux/recipe/operations";
import { selectRecipeState } from "../../redux/recipe/selectors";
import { Meal } from "../../type";
import CSS from "./RecipeDetail.module.css";

export default function RecipeDetail() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();
  const { recipe, status, error } = useSelector(selectRecipeState);

  useEffect(() => {
    if (id) {
      dispatch(fetchRecipeById(id));
    }
  }, [dispatch, id]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  if (!recipe) {
    return <div>No recipe found</div>;
  }

  const ingredientNames: string[] = [];
  const ingredientMeasures: string[] = [];
  
  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}` as keyof Meal;
    const measureKey = `strMeasure${i}` as keyof Meal;
  
    const ingredient = recipe[ingredientKey]?.trim();
    const measure = recipe[measureKey]?.trim();
  
    if (ingredient && measure) {
      ingredientNames.push(ingredient);
      ingredientMeasures.push(measure);
    }
  }

  return (
    <div className={CSS.wrapperDetail}>
      <div className={CSS.DetailsHeader}>
        <div className={CSS.box}>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className={CSS.image}
          />
          <div className={CSS.cardInfo}>
            <p className={CSS.location}>Area: {recipe.strArea}</p>
            <h3 className={CSS.name}>{recipe.strMeal}</h3>
            <p className={CSS.category}>Category: {recipe.strCategory}</p>
            <p className={CSS.category}>
              Tags: {recipe.strTags || "No tags available"}
            </p>
            {recipe.strYoutube && (
              <a
                href={recipe.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className={CSS.video}
              >
                Watch cooking video
              </a>
            )}
          </div>
        </div>
        <button type="button" className={CSS.btn}>
          Add recipe to Shelf
        </button>
      </div>

      <div>
        <h4 className={CSS.title}>Instructions:</h4>
        <p className={CSS.text}>{recipe.strInstructions}</p>
      </div>

      <div>
        <h4 className={CSS.title}>Ingredients:</h4>
        <ul className={CSS.ingredientList}>
  {ingredientNames.length > 0 ? (
    ingredientNames.map((ingredient, index) => (
      <li key={index} className={CSS.ingredientItem}>
        <span >{ingredient}</span>  
        <span >{ingredientMeasures[index]}</span>
      </li>
    ))
  ) : (
    <p className={CSS.text}>No ingredients available</p>
  )}
</ul>
      </div>
    </div>
  );
}
