import z from "zod";

export const fileSchema = z.object({
  id_file: z.uuid(),
  id_folder: z.uuid().nullable(),
  file_name: z.string().min(1, "El nombre del archivo es obligatorio"),
  url: z.string(),
  aws_key: z.string()
})

export const createFileSchema = fileSchema.omit({
  id_file: true,
  aws_key: true,
  url: true
}).extend({
  file: z.instanceof(File, {
    error: "El archivo debe ser un archivo válido"
  })
})

export type FileData = z.infer<typeof fileSchema>
export type CreateFile = z.infer<typeof createFileSchema>