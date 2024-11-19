import MiniProjects from "./components/MiniProjects.jsx";
import Header from "./components/Header.jsx";
import ThemeSelector from "./components/ThemeSelector.jsx";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <>
      <Header />

      <MiniProjects />
    </>
  );
};

export default App;
