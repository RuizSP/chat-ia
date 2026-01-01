import { createContext } from "react"

export type ThemeType = "light" | "dark"

interface ThemeModeModel {
  themeType: ThemeType
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>
}

export const ThemeModeContext = createContext<ThemeModeModel | null>(null)
