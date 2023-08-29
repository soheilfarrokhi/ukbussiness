import { useState } from "react";
import "./assets/styles/home.css";
import { AllRoutes } from "./AllRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
