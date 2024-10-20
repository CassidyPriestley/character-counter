import { useTitle } from "../hooks/useTitle";
import { Fact } from "../components";

export const FactPage = () => {
  useTitle("Chuck Norris Facts");

  return (
    <main>
      <Fact />
    </main>
  );
};
