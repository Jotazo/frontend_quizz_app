import { useContext } from "react";
import Switch from "react-switch";

import { ThemeContextType } from "../../types";
import { Themes } from "../../enums";

import { ThemeContext } from "../../contexts/ThemeContext";

import { MoonIcon, SunIcon } from "../../assets/Icons";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <div className="flex gap-4 items-center">
      <SunIcon theme={theme} />
      <Switch
        onChange={toggleTheme}
        onColor="#A729F5"
        offColor="#A729F5"
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        uncheckedIcon={false}
        checkedIcon={false}
        checked={theme === Themes.DARK}
        height={20}
        width={35}
        handleDiameter={12}
      />
      <MoonIcon theme={theme} />
    </div>
  );
};

export default ThemeToggler;
