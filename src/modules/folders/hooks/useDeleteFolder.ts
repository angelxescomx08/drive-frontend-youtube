import { useMutation } from "@tanstack/react-query"
import { deleteFolder } from "../actions/folders"

export const useDeleteFolder = () => {

  const deleteFolderMutation = useMutation({
    mutationFn: deleteFolder,
    meta: {
      successMessage: "Folder eliminado correctamente",
      errorMessage: "Error al eliminar el folder",
      invalidateQuery: ["folder-content"]
    }
  })

  return {
    deleteFolderMutation
  }
}
