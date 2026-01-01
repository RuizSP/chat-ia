import { Stack, TextField } from "@mui/material"
import ChatVoiceListener from "./ChatVoiceListener"
import ChatSendButton from "./ChatSendbutton"
import { useEffect } from "react"

interface ChatTextFieldProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  onSendMessage: (message: string) => void
  isLoading?: boolean
}

export default function ChatTextField(props: ChatTextFieldProps) {
  const { onChange, onSendMessage, value, isLoading } = props

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        if (value) {
          onSendMessage(value)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [value])

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
              <ChatVoiceListener
                onSpeechResult={result => {
                  console.log("teste" + result)
                  onSendMessage(result)
                }}
              />
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
