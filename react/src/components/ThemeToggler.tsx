import { useState, useEffect } from "react";

import "../css/ThemeToggler.css";
import moonWhite from "../images/moonWhite.png";
import sunBlack from "../images/sunBlack.png";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <button className="view-mode-toggle-button" onClick={() => setDarkMode(!darkMode)}>
      <img src={darkMode ? moonWhite : sunBlack} alt="" />
    </button>
  );
}
