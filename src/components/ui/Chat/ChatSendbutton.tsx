import { Send } from "@mui/icons-material"
import { IconButton, type IconButtonProps } from "@mui/material"

interface ChatSendButtonProps extends IconButtonProps {
  onSendMessage: () => void
}

export default function ChatSendButton(props: ChatSendButtonProps) {
  const { onSendMessage, disabled } = props

  return (
    <IconButton title="Enviar" color="primary" onClick={onSendMessage} disabled={disabled}>
      <Send />
    </IconButton>
  )
}
