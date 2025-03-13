import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { selectRecipeState } from "../../redux/recipe/selectors";
import { setPage } from "../../redux/recipe/slice";
import CSS from "./Pagination.module.css"

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }

export default function Pagination({  totalPages  }: PaginationProps) {

  const dispatch = useDispatch<AppDispatch>();
  const { currentPage } = useSelector(selectRecipeState);
  if (totalPages <= 1) return null;

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  const renderPagination = () => {
    const pages = [];
    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1, 2, 3, 4, 5, 6, 7, "...", totalPages);
    }

    return pages.map((page, index) => (
      <button
        key={index}
        onClick={() => typeof page === "number" && handlePageChange(page)}
        style={{
          margin: "5px",
          padding: "5px 10px",
          background: page === currentPage ? "#007bff" : "#ddd",
          color: page === currentPage ? "white" : "black",
          border: "none",
          cursor: "pointer",
        }}
      >
        {page}
      </button>
    ));
  };

  return (
    <div>
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Prev
      </button>
      {renderPagination()}
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};
