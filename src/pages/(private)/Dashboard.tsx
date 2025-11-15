import { Button } from "@/components/ui/button";
import { logOut } from "@/modules/auth/actions/authActions";
import { FileComponent } from "@/modules/files/components/FileComponent";
import { FolderComponent } from "@/modules/folders/components/FolderComponent";
import { useFolderContent } from "@/modules/folders/hooks/useFolderContent";
import { Dropzone } from "@/shared/components/Dropzone";
import { useMemo, useState, type DragEvent } from "react";
import { useParams } from "react-router";
import { useCreateFolder } from '../../modules/folders/hooks/useCreateFolder';
import { useAuthStore } from "@/modules/auth/hooks/useAuthStore";
import { useCreateFile } from "@/modules/files/hooks/useCreateFile";
import { Header } from "@/shared/components/Header";

export function DashboardPage(){

  const { id_folder = "root" } = useParams()

  const { folderContent } = useFolderContent(id_folder)
  const { createFolderMutation } = useCreateFolder()
  const { createFileMutation } = useCreateFile();
  const { user } = useAuthStore()
  const [search,setSearch] = useState("");

  const onDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if(e.dataTransfer && e.dataTransfer.items){
      for(let i= 0; i < e.dataTransfer.items.length; i++){
        const item = e.dataTransfer.items[i];
        if(item.webkitGetAsEntry()){
          const entry = item.webkitGetAsEntry();
          if(entry?.isFile){
            const file = await new Promise<File>(resolve => {
              (entry as FileSystemFileEntry).file(file => resolve(file))
            })
            createFileMutation.mutate({
              file_name: entry.name,
              id_folder: id_folder === "root" ? "null" : id_folder,
              file
            })
          }
          if(entry?.isDirectory){
            createFolderMutation.mutate({
              id_user: user?.id_user ?? "",
              folder_name: entry.name,
              id_parent: id_folder === "root" ? "null" : id_folder
            })
          }
        }
      }
    }
  }

  const folders = useMemo(()=>{
    return folderContent.data?.folders.filter(folder=>
      folder.folder_name.toLowerCase().includes(search.toLowerCase())
    )
  },[folderContent.data?.folders, search])

  const files = useMemo(()=>{
    return folderContent.data?.files.filter(file=>
      file.file_name.toLowerCase().includes(search.toLowerCase())
    )
  },[folderContent.data?.files, search])

  return (
    <>
      <Header onSearch={(search)=>setSearch(search)} />
      <main className="container mx-auto">
        <Dropzone
          onDrop={onDrop}
        >
          {
            folders?.map(folder => (
              <FolderComponent key={folder.id_folder} folder={folder} />
            ))
          }

          {
            files?.map(file => (
              <FileComponent key={file.id_file} file={file} />
            ))
          }
        </Dropzone>
        

        <Button
          onClick={logOut}
        >Cerrar sesión</Button>
      </main>
    </>
  )
}