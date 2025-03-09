
import RecipeDetail from "../../components/RecipeDetail/RecipeDetail"
import CSS from "./RecipePage.module.css"

export default function RecipePage() {
    return (
        <div className={CSS.wrapper}>
            {/* <p>Recipe details</p> */}
        <RecipeDetail/>
    </div>
    )
    
};
