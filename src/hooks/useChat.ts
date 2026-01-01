import { useMutation } from "@tanstack/react-query"
import type { AxiosInstance } from "axios"
import { queryClient } from "../lib/reactQuery"

interface FreeChatConfig {
  api: AxiosInstance
  queryKey: readonly unknown[]
}

interface SendMessageConfig<TParams> {
  params: TParams
  url: string
}

export default function useChat({ api, queryKey }: FreeChatConfig) {
  async function sendMessage<TParams>({ params, url }: SendMessageConfig<TParams>) {
    const response = await api.post(url, params)
    return response.data
  }

  function useSendMessage<TParams, TResponse = unknown>() {
    return useMutation<TResponse, unknown, SendMessageConfig<TParams>>({
      mutationFn: variables => sendMessage<TParams>(variables),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey })
      },
    })
  }

  return {
    useSendMessage,
  }
}
