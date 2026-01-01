import { useContext } from "react"
import { ThemeModeContext } from "../context/ThemeModeContext"

export function useThemeModeContext() {
  const context = useContext(ThemeModeContext)
  if (!context) {
    throw new Error("useThemeMode deve ser usado dentro de ThemeModeProvider")
  }
  return context
}
