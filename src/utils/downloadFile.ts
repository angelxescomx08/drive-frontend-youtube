import type { FileData } from "@/modules/files/schemas/fileSchema";

export async function downloadFile(file: FileData) {
  const response = await fetch(file.url);
  const blob = await response.blob();

  const blobUrl = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = blobUrl;
  link.download = file.file_name;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(blobUrl);
}