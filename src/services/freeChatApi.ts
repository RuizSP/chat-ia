import axios from "axios"

export const freeChatapi = axios.create({
  baseURL: import.meta.env.VITE_FREE_CHAT_API_URL,
})
