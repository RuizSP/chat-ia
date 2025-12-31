import { createContext } from "react"
import { v4 } from "uuid"

export type ChatStatus = "idle" | "loading" | "success" | "error"

type ChatAction =
  | { type: "SEND_MESSAGE"; payload: { message: string } }
  | { type: "WAITING_RESPONSE" }
  | { type: "RECEIVE_MESSAGE"; payload: { message: string } }
  | { type: "MESSAGE_ERROR" }

export interface ChatModel {
  id: string
  type: "Send" | "Receiver"
  message?: string
  status: ChatStatus
}

export function chatReducer(state: ChatModel[], action: ChatAction): ChatModel[] {
  switch (action.type) {
    case "SEND_MESSAGE": {
      const sendId = v4()
      const receiverId = v4()

      return [
        ...state,
        {
          id: sendId,
          type: "Send",
          message: action?.payload?.message,
          status: "loading",
        },
        {
          id: receiverId,
          type: "Receiver",
          status: "loading",
        },
      ]
    }

    case "WAITING_RESPONSE": {
      return state.map(chat =>
        chat?.type === "Send" && chat?.status === "loading" ? { ...chat, status: "success" } : chat,
      )
    }

    case "RECEIVE_MESSAGE": {
      return state.map(chat =>
        chat.type === "Receiver" && chat.status === "loading"
          ? { ...chat, message: action?.payload.message, status: "success" }
          : chat,
      )
    }

    case "MESSAGE_ERROR": {
      return state.map(chat =>
        chat?.type === "Receiver" && chat.status === "loading"
          ? { ...chat, status: "error" }
          : chat,
      )
    }
    default:
      return state
  }
}

export interface ConversationModel {
  chats: ChatModel[]
  dispatch: React.Dispatch<ChatAction>
}

export const ChatContext = createContext<ConversationModel | null>(null)
