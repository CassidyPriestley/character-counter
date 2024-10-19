import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle("Page Not Found");
  return (
    <main>
      <span className="mt-32 text-center">
        <h1 className="text-4xl dark:text-white">
          Oops! Sorry this page does not exist!
        </h1>
      </span>
    </main>
  );
};
