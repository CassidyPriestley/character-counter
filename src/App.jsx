import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App dark:bg-gray-900">
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
