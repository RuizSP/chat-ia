import { Card, Stack } from "@mui/material"
import type { ReactNode } from "react"

interface ChatContainerProps {
  children: ReactNode
  height?: string
}

export default function ChatContainer(props: ChatContainerProps) {
  const { children, height = "80vh" } = props
  return (
    <Card
      variant="elevation"
      elevation={2}
      sx={{
        height,
        p: 2,
        overflowY: "auto",
        backgroundColor: "transparent",
      }}
    >
      <Stack spacing={2}>{children}</Stack>
    </Card>
  )
}
