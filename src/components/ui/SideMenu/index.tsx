import { Drawer, Toolbar } from "@mui/material"

const drawerWidth = 240
const miniWidth = 64

interface Props {
  open: boolean
}

export default function SideMenu({ open }: Props) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidth : miniWidth,
        transition: theme =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
          }),
        flexShrink: 0,
        whiteSpace: "nowrap",
        "& .MuiDrawer-paper": {
          mt: 8.1,
          overflowX: "hidden",
          border: "none",
          width: open ? drawerWidth : miniWidth,
          transition: theme =>
            theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.standard,
            }),
        },
      }}
    >
      <Toolbar />
    </Drawer>
  )
}
