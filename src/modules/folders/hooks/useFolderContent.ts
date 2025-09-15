import { useQuery } from "@tanstack/react-query";
import { getFolderContent } from "../actions/folders";

export function useFolderContent(id_folder: string) {
  const folderContent = useQuery({
    queryKey: ["folder-content", {
      id_folder
    }],
    queryFn: () => getFolderContent(id_folder),
    retry: true,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false
  })

  return {
    folderContent
  }
}