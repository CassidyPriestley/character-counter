import { Routes, Route } from "react-router-dom";
import { HomePage, PageNotFound, FactPage } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="chuck-norris-quote" element={<FactPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
