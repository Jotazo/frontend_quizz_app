import { createContext } from "react";

import { ThemeContextType } from "../types";

import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext<ThemeContextType | null>(null);

interface Props {
  children: React.JSX.Element;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
