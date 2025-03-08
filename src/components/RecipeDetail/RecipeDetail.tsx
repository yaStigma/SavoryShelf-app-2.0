// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch } from "../../redax/store";
// import { useParams } from "react-router-dom";
// import { fetchRecipeById } from "../../redax/recipe/operations";
// import { selectRecipe } from "../../redax/recipe/selectors";

// import CSS from "./RecipeDetail.module.css";

// export default function RecipeDetail() {
//   const dispatch = useDispatch<AppDispatch>();
//   const { id } = useParams();
//   const recipeState = useSelector(selectRecipe);

//   const { recipe, status, error } = recipeState || {
//     recipe: null,
//     status: "idle",
//     error: null,
//   };

//   useEffect(() => {
//     if (id) {
//       dispatch(fetchRecipeById(id));
//     }
//   }, [dispatch, id]);

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   if (status === "failed") {
//     return <div>Error: {error}</div>;
//   }

//   if (!recipe) {
//     return <div>No recipe found</div>;
//   }

//   const ingredients = [];
//   for (let i = 1; i <= 20; i++) {
//     const ingredient = recipe[`strIngredient${i}`];
//     const measure = recipe[`strMeasure${i}`];
//     if (ingredient && ingredient !== "" && measure && measure !== "") {
//       ingredients.push(`${measure} ${ingredient}`);
//     }
//   }

//   return (
//     <div className={CSS.wrapper}>
//       <img
//         src={recipe.strMealThumb}
//         alt={recipe.strMeal}
//         className={CSS.image}
//       />
//       <h2 className={CSS.title}>{recipe.strMeal}</h2>
//       <p className={CSS.category}>
//         {recipe.strCategory} - {recipe.strArea}
//       </p>
//       <div className={CSS.instructions}>
//         <h3>Instructions:</h3>
//         <p>{recipe.strInstructions}</p>
//       </div>

//       <div className={CSS.ingredients}>
//         <h3>Ingredients:</h3>
//         <ul>
//           {ingredients.length > 0 ? (
//             ingredients.map((ingredient, index) => (
//               <li key={index}>{ingredient}</li>
//             ))
//           ) : (
//             <p>No ingredients available</p>
//           )}
//         </ul>
//       </div>

//       <div className={CSS.tags}>
//         <h3>Tags:</h3>
//         <p>{recipe.strTags || "No tags available"}</p>
//       </div>

//       {recipe.strYoutube && (
//         <div className={CSS.youtube}>
//           <h3>Watch on YouTube:</h3>
//           <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer">
//             {recipe.strYoutube}
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }
