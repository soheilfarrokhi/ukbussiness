import { useState } from "react";
import "./assets/styles/home.css";
import { AllRoutes } from "./AllRoutes";
import { HomeContextProvider } from "./context/HomeContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomeContextProvider>
        <AllRoutes />
      </HomeContextProvider>
    </>
  );
}

export default App;
