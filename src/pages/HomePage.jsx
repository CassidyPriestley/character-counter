import { useTitle } from "../hooks/useTitle";
import { Counter } from "../components";

export const HomePage = () => {
  useTitle("Character Counter");

  return (
    <main>
      <Counter />
    </main>
  );
};
