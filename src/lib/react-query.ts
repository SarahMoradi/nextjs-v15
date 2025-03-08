import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";


// fetch data
export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      // show notification
    },
  }),

  // update data
  mutationCache: new MutationCache({
    onError: (error) => {
      // show notification
    },
  }),

  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      gcTime: 1000 * 60 * 60 * 24,
      throwOnError: false,
    },
  },
});
