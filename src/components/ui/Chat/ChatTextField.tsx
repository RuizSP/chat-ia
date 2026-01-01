import { Stack, TextField } from "@mui/material"
import ChatVoiceListener from "./ChatVoiceListener"
import ChatSendButton from "./ChatSendbutton"

interface ChatTextFieldProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  onSendMessage: (message: string) => void
  isLoading?: boolean
}

export default function ChatTextField(props: ChatTextFieldProps) {
  const { onChange, onSendMessage, value, isLoading } = props

  return (
    <TextField
      disabled={isLoading}
      variant="outlined"
      value={value}
      onChange={onChange}
      sx={{ position: "relative", bottom: 0, borderRadius: 5 }}
      slotProps={{
        input: {
          sx: { borderRadius: 5 },
          endAdornment: (
            <Stack spacing={1} direction={"row"}>
              <ChatVoiceListener onSpeechResult={result => onSendMessage(result)} />
              <ChatSendButton onSendMessage={() => onSendMessage(value)} disabled={isLoading} />
            </Stack>
          ),
        },
      }}
      placeholder="Pergunte qualquer coisa ..."
      autoFocus
    />
  )
}
