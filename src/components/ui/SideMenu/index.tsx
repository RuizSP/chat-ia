import { Box, useTheme, useMediaQuery } from "@mui/material"

const DRAWER_WIDTH = 240
const MINI_WIDTH = 64

interface Props {
  open: boolean
}

export default function SideMenu({ open }: Props) {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"))

  const width = isDesktop ? (open ? DRAWER_WIDTH : MINI_WIDTH) : DRAWER_WIDTH

  return (
    <Box
      component="aside"
      sx={{
        width,
        position: isDesktop ? "relative" : "fixed",
        inset: isDesktop ? "auto" : "0 auto 0 0",
        zIndex: theme.zIndex.drawer,
        transform: !isDesktop && !open ? "translateX(-100%)" : "translateX(0)",
        transition: theme.transitions.create(["width", "transform"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.standard,
        }),
        flexShrink: 0,
        overflowX: "hidden",
        borderRadius: 2,
        bgcolor: theme.palette.background.paper,
      }}
    >
      {/* conteúdo do menu */}
    </Box>
  )
}
