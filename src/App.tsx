import { ThemeProvider, CssBaseline } from "@mui/material"
import AppRoutes from "./routes/AppRoutes"
import theme from "./theme"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { Chat } from "./components/ui/Chat"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./lib/reactQuery"

export default function App() {
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
