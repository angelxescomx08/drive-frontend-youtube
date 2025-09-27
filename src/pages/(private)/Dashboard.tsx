import { Button } from "@/components/ui/button";
import { logOut } from "@/modules/auth/actions/authActions";
import { FileComponent } from "@/modules/files/components/FileComponent";
import { FolderComponent } from "@/modules/folders/components/FolderComponent";
import { useFolderContent } from "@/modules/folders/hooks/useFolderContent";
import { useParams } from "react-router";

export function DashboardPage(){

  const { id_folder = "root" } = useParams()

  const { folderContent } = useFolderContent(id_folder)

  return (
    <main className="container mx-auto">
      <div className="w-full h-[calc(100vh-8rem)] border rounded-md shadow-lg flex gap-4 p-4 items-start justify-start flex-wrap">
        {
          folderContent.data?.folders.map(folder => (
            <FolderComponent key={folder.id_folder} folder={folder} />
          ))
        }

        {
          folderContent.data?.files.map(file => (
            <FileComponent key={file.id_file} file={file} />
          ))
        }
      </div>

      <Button
        onClick={logOut}
      >Cerrar sesión</Button>
    </main>
  )
}