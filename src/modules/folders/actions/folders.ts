import { api } from "@/lib/api";
import type { Folder } from "../schemas/folderSchema";
import type { FileData } from "@/modules/files/schemas/fileSchema";

type FolderContentResponse = {
  message: string;
  folders: Folder[];
  files: FileData[];
}

export async function getFolderContent(id_folder: string) {
  const { data } = await api.get<FolderContentResponse>(`/folder/content/${id_folder}`);
  return data;
}