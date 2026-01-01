import { useState, type ReactNode } from "react"
import { ThemeModeContext, type ThemeType } from "../context/ThemeModeContext"

interface Props {
  children: ReactNode
}
export function ThemeModeProvider({ children }: Props) {
  const localTheme = localStorage.getItem("theme") as ThemeType
  const [theme, setTheme] = useState<ThemeType>(localTheme || "dark")

  return (
    <ThemeModeContext.Provider value={{ themeType: theme, setTheme }}>
      {children}
    </ThemeModeContext.Provider>
  )
}
