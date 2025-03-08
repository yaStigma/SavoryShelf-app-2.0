import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Layout from "../Layout/Layout";

export default function App() {
  const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
  const RecipePage = lazy(() => import("../../pages/RecipePage/RecipePage"));
  const RecipesShelf = lazy(
    () => import("../../pages/RecipesShelf/RecipesShelf")
  );
  const NotFoundPage = lazy(
    () => import("../../pages/NotFoundPage/NotFoundPage")
  );
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="recipe/:id" element={<RecipePage />} />
            <Route path="recipesShelf" element={<RecipesShelf />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
