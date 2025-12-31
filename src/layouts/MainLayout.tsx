import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"
import AppBar from "../components/ui/AppBar"
import SideMenu from "../components/ui/SideMenu"
import { useState } from "react"

export default function MainLayout() {
  const [open, setOpen] = useState<boolean>(true)
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <AppBar onToggle={() => setOpen(!open)} />

      <Box
        sx={{
          display: "flex",
          flex: 1,
          position: "relative",
        }}
      >
        <SideMenu open={open} />
        <Box
          component="main"
          sx={{
            flex: 1,
            m: 1,
            p: 2,
            borderRadius: 2,
            backgroundColor: "#f3efefff",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
