import { Routes, Route } from "react-router-dom";
import { HomePage, PageNotFound, Facts } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="chuck-norris-quote" element={<Facts />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
