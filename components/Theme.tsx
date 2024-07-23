import { useEffect, useState } from "react";
import { Moon, Sun } from "./Icons";

const Theme = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [dark]);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <button
      className="z-10 w-10 h-10 items-center justify-center flex fixed right-4 top-3"
      onClick={() => toggleTheme()}
    >
      {dark ? (
        <Moon className="w-8 h-8 fill-black" />
      ) : (
        <Sun className="w-10 h-10 fill-white" />
      )}
    </button>
  );
};

export default Theme;
