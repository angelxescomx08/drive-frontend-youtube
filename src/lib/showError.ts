import { AxiosError } from "axios";
import { toast } from "sonner";

export function showError(error: unknown, defaultMessage = "Ocurrió un error inesperado") {

  if (error instanceof AxiosError)
    return toast.error(error.response?.data?.message || defaultMessage);

  if (error instanceof String)
    return toast.error(error || defaultMessage);

  if (error instanceof Error)
    return toast.error(error.message || defaultMessage);

  return toast.error(defaultMessage);
}