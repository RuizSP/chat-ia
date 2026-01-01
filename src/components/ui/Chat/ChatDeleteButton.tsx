import { Delete } from "@mui/icons-material"
import { IconButton } from "@mui/material"

interface ChatDeleteButtonProps {
  onDelete?: () => void
}

export default function ChatDeleteButton(props: ChatDeleteButtonProps) {
  const { onDelete } = props

  function handleDelete() {
    onDelete?.()
  }

  return (
    <IconButton title="Apagar mensagem" color="error" onClick={handleDelete}>
      <Delete />
    </IconButton>
  )
}
