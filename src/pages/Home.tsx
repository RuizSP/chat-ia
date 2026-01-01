import { useState } from "react"
import { Chat } from "../components/ui/Chat"
import { useChatContext } from "../hooks/useChatContext"
import useChat from "../hooks/useChat"

import { freeChatapi } from "../services/freeChatApi"

export default function Home() {
  const { chats, dispatch } = useChatContext()

  const [message, setMessage] = useState<string>("")

  const { useSendMessage } = useChat({ api: freeChatapi, queryKey: ["FREECHAT"] })

  const { mutateAsync: sendMessage, isPending } = useSendMessage<
    { message: string },
    { response: string }
  >()

  async function handleSendMessage(message: string) {
    if (!message) return

    dispatch({ type: "SEND_MESSAGE", payload: { message } })
    setMessage("")

    try {
      const response = await sendMessage({
        url: "chat",
        params: {
          message,
        },
      })
      dispatch({ type: "WAITING_RESPONSE" })
      dispatch({ type: "RECEIVE_MESSAGE", payload: { message: response?.response } })
    } catch {
      dispatch({ type: "MESSAGE_ERROR" })
    }
  }

  function handleDeleteMessage(id: string) {
    dispatch({ type: "DELETE_MESSAGE", payload: { id } })
  }

  return (
    <Chat.Root>
      <Chat.Container>
        {chats.map(item => (
          <Chat.SpeechContent
            key={item.id}
            type={item?.type}
            message={item?.message}
            isLoading={item?.status === "loading"}
            status={item?.status as "deleted" | "error"}
            onDelete={() => {
              handleDeleteMessage(item?.id)
            }}
          />
        ))}
      </Chat.Container>
      <Chat.Footer>
        <Chat.TextField
          isLoading={isPending}
          onChange={e => setMessage(e.target.value)}
          onSendMessage={message => handleSendMessage(message)}
          value={message}
        />
      </Chat.Footer>
    </Chat.Root>
  )
}
