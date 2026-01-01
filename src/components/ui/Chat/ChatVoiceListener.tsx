import { Mic } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useRef } from "react"
import { useSpeechRecognition } from "react-speech-kit"

interface ChatVoiceListenerProps {
  onSpeechResult?: (result: string) => void
}

export default function ChatVoiceListener({ onSpeechResult }: ChatVoiceListenerProps) {
  const speechRef = useRef("")

  const { listen, stop, listening } = useSpeechRecognition({
    onResult: result => {
      speechRef.current = result as unknown as string
    },
  })

  function handleStartListen() {
    speechRef.current = ""
    listen({ lang: "Pt-BR" })
  }

  function handleStopListem() {
    stop()
    const finalText = speechRef.current.trim()
    if (!finalText) return

    onSpeechResult?.(finalText)
  }

  return (
    <IconButton
      title="Segure o botão para falar"
      color={listening ? "info" : "primary"}
      onMouseDown={handleStartListen}
      onMouseUp={handleStopListem}
    >
      <Mic />
    </IconButton>
  )
}
