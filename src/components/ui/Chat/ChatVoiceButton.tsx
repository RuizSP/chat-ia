import { VolumeOff, VolumeUp } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useSpeechSynthesis } from "react-speech-kit"

interface ChatVoiceButtonProps {
  message: string
}

export default function ChatVoiceButton(props: ChatVoiceButtonProps) {
  const { message } = props

  const { speak, cancel, speaking } = useSpeechSynthesis()
  const voices = window.speechSynthesis.getVoices()
  const ptBrVoice = voices.find(v => v.lang === "pt-BR")

  return (
    <>
      {!speaking ? (
        <IconButton
          size="small"
          onClick={() => {
            speak({
              text: message,
              voice: ptBrVoice,
            })
          }}
        >
          <VolumeUp />
        </IconButton>
      ) : (
        <IconButton
          size="small"
          onClick={() => {
            cancel()
          }}
        >
          <VolumeOff />
        </IconButton>
      )}
    </>
  )
}
