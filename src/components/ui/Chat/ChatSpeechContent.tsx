import { AccessTime, DoneAll } from "@mui/icons-material"
import { Card, Divider, Stack, Typography } from "@mui/material"
import { ThreeDotsLoader } from "../ThreeDotsLoader"
import ChatVoiceButton from "./ChatVoiceButton"
import ChatMarkdownMessage from "./ChatMarkdownMessage"
import CopyButton from "../CopyButton"
import { markdownToFormattedText } from "../../../utils/markdownToFormattedText"
import ChatDeleteButton from "./ChatDeleteButton"

interface ChatSpeechContentProps {
  isLoading?: boolean
  status: "error" | "deleted"
  message?: string
  type: "Send" | "Receiver"

  onDelete?: () => void
}

export default function ChatSpeechContent({
  status,
  isLoading,
  message,
  type,
  onDelete,
}: ChatSpeechContentProps) {
  const isReceiver = type === "Receiver"

  const error = status === "error"
  const deleted = status === "deleted"

  if (error || deleted) {
    return (
      <Card
        sx={{
          px: 2,
          py: 1.5,
          display: "flex",
          alignSelf: isReceiver ? "flex-start" : "flex-end",
          maxWidth: "75%",
          minWidth: "40%",
          backgroundColor: isReceiver ? "background.paper" : "primary.dark",
          color: isReceiver ? "text.primary" : "#E5E7EB",
          borderBottom: 3,
          borderTopLeftRadius: isReceiver ? 3 : 12,
          borderTopRightRadius: isReceiver ? 12 : 3,
          border: isReceiver ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          {error
            ? `Não foi Possível ${isReceiver ? "responder" : "responder"} sua mensagem! Tente novamente mais tarde.`
            : "Mensagem Apagada"}
        </Typography>
      </Card>
    )
  }

  const showTyping = isLoading && isReceiver
  const showPending = isLoading && !isReceiver

  const formattedText = markdownToFormattedText(message || "")

  return (
    <Card
      variant="elevation"
      elevation={isReceiver ? 5 : 1}
      sx={{
        px: 2,
        py: 1.5,
        display: "flex",
        alignSelf: isReceiver ? "flex-start" : "flex-end",
        maxWidth: "75%",
        minWidth: "40%",
        backgroundColor: isReceiver ? "background.paper" : "primary.dark",
        color: isReceiver ? "text.primary" : "#E5E7EB",
        borderBottom: 3,
        borderTopLeftRadius: isReceiver ? 3 : 12,
        borderTopRightRadius: isReceiver ? 12 : 3,
        border: isReceiver ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      {showTyping ? (
        <ThreeDotsLoader />
      ) : (
        <Stack spacing={1} width="100%" divider={<Divider />}>
          <ChatMarkdownMessage isReceiver={isReceiver} markdown={message || ""} />

          <Stack alignSelf="flex-end">
            {showPending ? (
              <AccessTime color="disabled" />
            ) : (
              <Stack direction="row" spacing={1} justifyContent={"center"} alignItems={"center"}>
                <ChatVoiceButton message={formattedText || ""} />

                <ChatDeleteButton onDelete={onDelete} />

                <CopyButton value={formattedText || ""} />

                <DoneAll color="disabled" />
              </Stack>
            )}
          </Stack>
        </Stack>
      )}
    </Card>
  )
}
