import { Button } from "@/components/ui/button";
import { logOut } from "@/modules/auth/actions/authActions";
import { FileComponent } from "@/modules/files/components/FileComponent";
import { FolderComponent } from "@/modules/folders/components/FolderComponent";
import { useFolderContent } from "@/modules/folders/hooks/useFolderContent";
import { Dropzone } from "@/shared/components/Dropzone";
import { useParams } from "react-router";

export function DashboardPage(){

  const { id_folder = "root" } = useParams()

  const { folderContent } = useFolderContent(id_folder)

  return (
    <main className="container mx-auto">
      <Dropzone>
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
      </Dropzone>
      

      <Button
        onClick={logOut}
      >Cerrar sesión</Button>
    </main>
  )
}