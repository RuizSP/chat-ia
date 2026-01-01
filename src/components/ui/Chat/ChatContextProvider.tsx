import { type ReactNode, useReducer } from "react"
import { ChatContext, chatReducer } from "../../../context/ChatContext"

interface Props {
  children: ReactNode
}

export function ChatContextProvider({ children }: Props) {
  const [chats, dispatch] = useReducer(chatReducer, [])

  return <ChatContext.Provider value={{ chats, dispatch }}>{children}</ChatContext.Provider>
}
