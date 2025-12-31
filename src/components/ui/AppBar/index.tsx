import { Menu } from "@mui/icons-material"
import { IconButton, AppBar as MuiAppBar, Stack, Toolbar, Typography } from "@mui/material"

interface AppBarProps {
  onToggle: () => void
}

export default function AppBar(props: AppBarProps) {
  const { onToggle } = props

  return (
    <MuiAppBar
      position="static"
      sx={theme => ({
        width: "100%",
        border: "none",
        backgroundColor: theme?.palette?.background?.default,
      })}
      variant="outlined"
    >
      <Toolbar>
        <Stack direction={"row"} spacing={4}>
          <IconButton color="primary" onClick={() => onToggle()}>
            <Menu />
          </IconButton>
          <Typography variant="h4">ChatIA</Typography>
        </Stack>
      </Toolbar>
    </MuiAppBar>
  )
}
