import { useMutation } from "@tanstack/react-query";
import { createFolder } from "../actions/folders";

export function useCreateFolder() {
  const createFolderMutation = useMutation({
    mutationFn: createFolder,
    meta: {
      successMessage: "Carpeta creada correctamente",
      errorMessage: "Error al crear la carpeta",
      invalidateQuery: ["folder-content"]
    }
  })

  return {
    createFolderMutation
  }
}