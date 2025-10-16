import { MutationCache, QueryCache, QueryClient, type QueryKey } from "@tanstack/react-query";
import { showError } from "./showError";
import { toast } from "sonner";

declare module "@tanstack/react-query" {
  interface Register {
    mutationMeta: {
      invalidateQuery?: QueryKey;
      successMessage?: string;
      errorMessage?: string;
    }
  }
}

export const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onSuccess: (_data, _variables, _context, mutation) => {
      if (mutation.meta?.successMessage) {
        toast.success(mutation.meta?.successMessage)
      }
    },
    onError: (error, _variables, _context, mutation) => {
      if (mutation.meta?.errorMessage) {
        showError(error, mutation.meta?.errorMessage);
        return;
      }
      showError(error, "Ocurrió un error inesperado")
    },
    onSettled: (_data, _error, _variables, _context, mutation) => {
      if (mutation.meta?.invalidateQuery) {
        queryClient.invalidateQueries({
          queryKey: mutation.meta?.invalidateQuery
        })
      }
    }
  }),
  queryCache: new QueryCache({
    onError: error => {
      showError(error)
    }
  }),
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5
    }
  }
})