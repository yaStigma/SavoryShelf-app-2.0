import Filter from "../Filter/Filter";
import SearchBar from "../SearchBar/SearchBar";
import CSS from "./Dashboard.module.css";
export default function Dashboard() {
  return (
    <div className={CSS.wrapper}>
      <SearchBar />
      <Filter />
    </div>
  );
}
