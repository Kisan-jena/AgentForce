"use client";
import { ThemeProvider ,ThemeProviderProps} from 'next-themes';

const ProviderTheme = ({children,...props}:ThemeProviderProps) => {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
};

export { ProviderTheme };
