import { Outlet } from "react-router-dom"
import { Box, Stack } from "@mui/material"
import AppBar from "../components/ui/AppBar"
import SideMenu from "../components/ui/SideMenu"
import { useState } from "react"

export default function MainLayout() {
  const [open, setOpen] = useState(true)

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar onToggle={() => setOpen(v => !v)} />

      <Stack m={1} spacing={1} direction={"row"}>
        <SideMenu open={open} />

        <Box
          component="main"
          sx={{
            flex: 1,
            p: 2,
            borderRadius: 2,
            bgcolor: "#f3efefff",
          }}
        >
          <Outlet />
        </Box>
      </Stack>
    </Box>
  )
}
