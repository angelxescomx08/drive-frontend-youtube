import { useMutation } from "@tanstack/react-query"
import { createFile } from "../actions/file"

export const useCreateFile = () => {

  const createFileMutation = useMutation({
    mutationFn: createFile,
    meta: {
      successMessage: "Archivo creado correctamente",
      errorMessage: "Error al crear el archivo",
      invalidateQuery: ["folder-content"]
    }
  })

  return {
    createFileMutation
  }
}
