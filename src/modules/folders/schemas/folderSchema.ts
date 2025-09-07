import z from "zod";

export const folderSchema = z.object({
  id_folder: z.uuid(),
  id_parent: z.uuid().nullable(),
  id_user: z.uuid(),
  folder_name: z.string().min(1, "El nombre es obligatorio")
})

export type Folder = z.infer<typeof folderSchema>