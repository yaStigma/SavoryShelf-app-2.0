import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchRecipe } from "../../redux/recipe/operations";
import CSS from "./SearchBar.module.css";
export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      dispatch(fetchRecipe({ search: searchTerm }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={CSS.searchForm}>
      <label>Search for a recipe:</label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className={CSS.input}
      />
      <button type="submit" className={CSS.btn}>
        Search
      </button>
    </form>
  );
}
