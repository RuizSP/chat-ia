import { Divider, Stack } from "@mui/material"
import type { ReactNode } from "react"

interface ChatFooterProps {
  children?: ReactNode
}

export default function ChatFooter(props: ChatFooterProps) {
  const { children } = props
  return (
    <Stack spacing={1}>
      <Divider variant="fullWidth" />
      {children}
    </Stack>
  )
}
