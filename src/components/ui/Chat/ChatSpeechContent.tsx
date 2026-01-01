import { AccessTime, CopyAll, DoneAll } from "@mui/icons-material"
import { Card, Divider, IconButton, Stack, Typography } from "@mui/material"
import { ThreeDotsLoader } from "../ThreeDotsLoader"
import ChatVoiceButton from "./ChatVoiceButton"
import ChatMarkdownMessage from "./ChatMarkDownMessage"
import CopyButton from "../CopyButton"

interface ChatSpeechContentProps {
  isLoading?: boolean
  error?: boolean
  message?: string
  type: "Send" | "Receiver"
}

export default function ChatSpeechContent({
  error,
  isLoading,
  message,
  type,
}: ChatSpeechContentProps) {
  const isReceiver = type === "Receiver"

  if (error) {
    return (
      <Card
        sx={{ px: 2, py: 1, minWidth: "60%", alignSelf: isReceiver ? "flex-start" : "flex-end" }}
      >
        <Typography variant="body2" color="textSecondary">
          {`Não foi Possível ${isReceiver ? "responder" : "responder"} sua mensagem! Tente novamente mais tarde.`}
        </Typography>
      </Card>
    )
  }

  const showTyping = isLoading && isReceiver
  const showPending = isLoading && !isReceiver

  return (
    <Card
      variant="elevation"
      elevation={2}
      sx={{
        px: 2,
        py: 1,
        display: "flex",
        alignSelf: isReceiver ? "flex-start" : "flex-end",
        minWidth: "60%",
      }}
    >
      {showTyping ? (
        <ThreeDotsLoader />
      ) : (
        <Stack spacing={1} width="100%" divider={<Divider />}>
          <ChatMarkdownMessage isReceiver={isReceiver} markdown={message||''} />

          <Stack alignSelf="flex-end">
            {showPending ? (
              <AccessTime  color="disabled" />
            ) : (
              <Stack direction="row" spacing={1} justifyContent={"center"} alignItems={"center"}>
                <ChatVoiceButton message={message || ""} />

                <CopyButton value={message||''}/>

                <DoneAll color="disabled" />
              </Stack>
            )}
          </Stack>
        </Stack>
      )}
    </Card>
  )
}
