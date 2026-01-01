import { DarkMode, LightMode } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useThemeModeContext } from "../../../hooks/useThemeModeContext"

export default function ThemeToggleButton() {
  const { setTheme, themeType } = useThemeModeContext()

  const toggleTheme = () => {
    const newTheme = themeType === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <IconButton onClick={toggleTheme}>
      {themeType === "light" ? <DarkMode /> : <LightMode />}
    </IconButton>
  )
}
