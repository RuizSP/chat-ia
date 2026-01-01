import { Menu } from "@mui/icons-material"
import { AppBar as MuiAppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material"
import ThemeToggleButton from "../ThemeToggleButton"

interface AppBarProps {
  onToggle: () => void
}

export default function AppBar({ onToggle }: AppBarProps) {
  return (
    <MuiAppBar
      position="relative"
      variant="outlined"
      sx={theme => ({
        border: "none",
        backgroundColor: theme.palette.background.default,
        zIndex: theme.zIndex.drawer + 1,
      })}
    >
      <Toolbar>
        <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
          <Stack direction="row" spacing={4}>
            <IconButton color="primary" onClick={onToggle}>
              <Menu />
            </IconButton>
            <Typography variant="h4">ChatIA</Typography>
          </Stack>

          <ThemeToggleButton />
        </Stack>
      </Toolbar>
    </MuiAppBar>
  )
}
