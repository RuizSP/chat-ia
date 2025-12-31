import { Stack } from "@mui/material"
import type { ReactNode } from "react"

interface ChatRootProps {
  children: ReactNode
}

export default function ChatRoot(props: ChatRootProps) {
  const { children } = props

  return (
    <Stack justifyContent={"space-between"} spacing={2}>
      {children}
    </Stack>
  )
}
