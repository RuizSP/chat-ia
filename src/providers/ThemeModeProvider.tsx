import { useState, type ReactNode } from "react"
import { ThemeModeContext, type ThemeType } from "../context/ThemeModeContext"

interface Props {
  children: ReactNode
}
export function ThemeModeProvider({ children }: Props) {
  const [theme, setTheme] = useState<ThemeType>("dark")

  return (
    <ThemeModeContext.Provider value={{ themeType: theme, setTheme }}>
      {children}
    </ThemeModeContext.Provider>
  )
}
