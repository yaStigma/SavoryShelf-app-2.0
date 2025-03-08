import RecipeList from "../../components/RecipeList/RecipeList"
import CSS from "./HomePage.module.css"
export default function HomePage() {
  return (
    <div className={CSS.wrapper}>
        <h2>Pecipe List</h2>
        <RecipeList />
    </div>
  )  
};
