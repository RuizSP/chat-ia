import { Mic } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useSpeechRecognition } from "react-speech-kit"

interface ChatVoiceListenerProps {
  onSpeechResult?: () => void
}

export default function ChatVoiceListener({ onSpeechResult }: ChatVoiceListenerProps) {
  const { listen, stop, listening } = useSpeechRecognition({ onResult: onSpeechResult })

  return (
    <IconButton
      title={"Segure o botão para falar"}
      color={listening ? "info" : "primary"}
      onKeyDown={() => listen({ lang: "pt-Br" })}
      onKeyUp={() => stop()}
    >
      <Mic />
    </IconButton>
  )
}
