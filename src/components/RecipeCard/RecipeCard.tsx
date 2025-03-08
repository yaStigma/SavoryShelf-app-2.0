import CSS from "./RecipeCard.module.css";
import { Link } from "react-router";

interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
}

interface RecipeCardProps {
  meal: Meal;
}
export default function RecipeCard({ meal }: RecipeCardProps) {
  const { idMeal, strMeal, strCategory, strArea, strMealThumb } = meal;
  return (
    <div className={CSS.wrapperCard}>
      <img src={strMealThumb} alt={strMeal} className={CSS.image} />
      <div className={CSS.cardInfo}>
        <p className={CSS.location}>Country: {strArea}</p>
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
