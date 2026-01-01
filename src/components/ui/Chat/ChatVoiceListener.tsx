import { Mic } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useSpeechRecognition } from "react-speech-kit"

interface ChatVoiceListenerProps {
  onSpeechResult?: (result: string) => void
}

export default function ChatVoiceListener({ onSpeechResult }: ChatVoiceListenerProps) {
  const { listen, stop, listening } = useSpeechRecognition({
    onResult: result => {
      const text = result[0]?.transcript ?? ""
      onSpeechResult?.(text)
    },
  })

  return (
    <IconButton
      title="Segure o botão para falar"
      color={listening ? "info" : "primary"}
      onMouseDown={() => listen({ lang: "pt-BR" })}
      onMouseUp={stop}
      onMouseLeave={stop}
      onTouchStart={() => listen({ lang: "pt-BR" })}
      onTouchEnd={stop}
    >
      <Mic />
    </IconButton>
  )
}
