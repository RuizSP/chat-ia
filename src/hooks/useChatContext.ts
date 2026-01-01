import { useContext } from "react"
import { ChatContext } from "../context/ChatContext"

export function useChatContext() {
  const context = useContext(ChatContext)

  if (!context) {
    throw new Error("useChat deve ser usado dentro de ChatContextProvider")
  }

  return context
}
