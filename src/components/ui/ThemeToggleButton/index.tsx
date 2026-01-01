import { DarkMode, LightMode } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useThemeModeContext } from "../../../hooks/useThemeModeContext"

export default function ThemeToggleButton() {
  const { setTheme, themeType } = useThemeModeContext()
  return (
    <IconButton onClick={() => setTheme(themeType === "light" ? "dark" : "light")}>
      {themeType === "light" ? <DarkMode /> : <LightMode />}
    </IconButton>
  )
}
