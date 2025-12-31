import { useMutation } from "@tanstack/react-query"
import type { AxiosInstance } from "axios"
import { queryClient } from "../lib/reactQuery"

interface FreeChatConfig {
  api: AxiosInstance
  queryKey: readonly unknown[]
}

interface SendMessageConfig {
  message: string
  url: string
}

export default function useChat({ api, queryKey }: FreeChatConfig) {
  async function sendMessage({ message, url }: SendMessageConfig) {
    const response = await api.post(url, {
      message,
    })

    return response.data
  }

  function useSendMessage() {
    return useMutation({
      mutationFn: sendMessage,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey })
      },
    })
  }

  return {
    useSendMessage,
  }
}
