import { Outlet } from "react-router-dom"
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material"
import AppBar from "../components/ui/AppBar"
import SideMenu from "../components/ui/SideMenu"
import { useEffect, useState } from "react"

export default function MainLayout() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"))

  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(isDesktop)
  }, [isDesktop])

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar onToggle={() => setOpen(v => !v)} />

      <Stack m={1} spacing={1} direction={{ xs: "column", md: "row" }}>
        <SideMenu open={open} />

        <Box
          component="main"
          sx={{
            flex: 1,
            p: { xs: 1.5, md: 2 },
            borderRadius: 2,
            bgcolor: "#f3efefff",
            minWidth: 0,
          }}
        >
          <Outlet />
        </Box>
      </Stack>
    </Box>
  )
}
