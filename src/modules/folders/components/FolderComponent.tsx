import type { Folder } from "../schemas/folderSchema"

type Props = {
  folder: Folder;
  onDoubleClick: (folder: Folder) => void;
}

export const FolderComponent = ({ folder, onDoubleClick }:Props) => {
  return (
    <div className="w-28 cursor-pointer" onDoubleClick={()=>{
      onDoubleClick(folder);
    }}>
      <img className="w-28" src="/assets/icons/folder.png" alt={folder.folder_name}/>
      <span className="text-lg text-center line-clamp-1">{folder.folder_name}</span>
    </div>
  )
}
