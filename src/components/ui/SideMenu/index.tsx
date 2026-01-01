import { Box } from "@mui/material"

const DRAWER_WIDTH = 240
const MINI_WIDTH = 64

interface Props {
  open: boolean
}

export default function SideMenu({ open }: Props) {
  const width = open ? DRAWER_WIDTH : MINI_WIDTH

  return (
    <Box
      component="aside"
      sx={theme => ({
        width,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.standard,
        }),
        flexShrink: 0,
        overflowX: "hidden",
        borderRadius: 2,
        border: "none",
        bgcolor: theme.palette.background.paper,
      })}
    >
      {/* conteúdo do menu */}
    </Box>
  )
}
