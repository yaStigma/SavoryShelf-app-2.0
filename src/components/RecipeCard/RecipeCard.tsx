import CSS from "./RecipeCard.module.css";
import { Link } from "react-router";
import {Meal} from "../../type"

interface RecipeCardProps {
  meal: Meal;
}
export default function RecipeCard({ meal }: RecipeCardProps) {
  const { idMeal, strMeal, strCategory, strArea, strMealThumb } = meal;
  return (
    <div className={CSS.wrapperCard}>
      <img src={strMealThumb} alt={strMeal} className={CSS.image} />
      <div className={CSS.cardInfo}>
        <p className={CSS.location}>Area: {strArea}</p>
        <h3 className={CSS.name}>{strMeal}</h3>
        <p className={CSS.category}>Category: {strCategory}</p>
        <Link to={`recipe/${idMeal}`}>
          <button type="button" className={CSS.btn}>
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
}
