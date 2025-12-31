import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 5,
      retryDelay: 5000,
      staleTime: 0,
      refetchOnWindowFocus: false,
    },
  },
})
