import type { Folder } from "../schemas/folderSchema"

type Props = {
  folder: Folder;
}

export const FolderComponent = ({ folder }:Props) => {
  return (
    <div className="w-28 cursor-pointer">
      <img className="w-28" src="/assets/icons/folder.png" alt={folder.folder_name}/>
      <span className="text-lg text-center line-clamp-1">{folder.folder_name}</span>
    </div>
  )
}
