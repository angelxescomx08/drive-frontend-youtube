import { Button } from "@/components/ui/button";
import { logOut } from "@/modules/auth/actions/authActions";
import { useFolderContent } from "@/modules/folders/hooks/useFolderContent";

export function DashboardPage(){

  const { folderContent } = useFolderContent("root")

  return (
    <main className="container mx-auto">

      {
        folderContent.data?.folders.map(folder => (
          <p key={folder.id_folder}>{folder.folder_name}</p>
        ))
      }

      {
        folderContent.data?.files.map(file => (
          <p key={file.id_file}>{file.file_name}</p>
        ))
      }

      <Button
        onClick={logOut}
      >Cerrar sesión</Button>
    </main>
  )
}