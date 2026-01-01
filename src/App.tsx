import { ThemeProvider, CssBaseline } from "@mui/material"
import AppRoutes from "./routes/AppRoutes"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./lib/reactQuery"
import { Chat } from "./components/ui/Chat"
import { useThemeModeContext } from "./hooks/useThemeModeContext"
import { ThemeModeProvider } from "./providers/ThemeModeProvider"
import { themeDark } from "./themes/themeDark"
import { themeLight } from "./themes/themeLight"

function AppContent() {
  const { themeType } = useThemeModeContext()

  const theme = themeType === "dark" ? themeDark : themeLight

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Chat.Provider>
          <AppRoutes />
        </Chat.Provider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default function App() {
  return (
    <ThemeModeProvider>
      <AppContent />
    </ThemeModeProvider>
  )
}
