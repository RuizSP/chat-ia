import { Mic } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useSpeechRecognition } from "react-speech-kit"

interface ChatVoiceListenerProps {
  onSpeechResult?: (result: string) => void
}

export default function ChatVoiceListener({ onSpeechResult }: ChatVoiceListenerProps) {
  const { listen, stop, listening } = useSpeechRecognition({
    onResult: a => {
      console.log({ a })
      onSpeechResult?.("")
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
