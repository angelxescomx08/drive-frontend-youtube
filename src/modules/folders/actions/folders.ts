import { api } from "@/lib/api";
import type { CreateFolder, Folder } from "../schemas/folderSchema";
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

export async function createFolder(folder: CreateFolder) {
  const response = await api.post("/folder", folder);
  return response.data;
}