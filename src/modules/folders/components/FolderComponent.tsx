import type { MouseEvent } from "react";
import type { Folder } from "../schemas/folderSchema"
import { cn } from "@/lib/utils";

type Props = {
  folder: Folder;
  isSelected: boolean;
  onDoubleClick: (folder: Folder) => void;
  onClick: (e: MouseEvent<HTMLDivElement>)=>void;
}

export const FolderComponent = ({ folder, onDoubleClick, onClick, isSelected }:Props) => {
  return (
    <div 
      className={cn("w-28 cursor-pointer",{
        "bg-blue-500": isSelected
      })} 
      onDoubleClick={()=>{
        onDoubleClick(folder);
      }}
      onClick={onClick}
    >
      <img className="w-28" src="/assets/icons/folder.png" alt={folder.folder_name}/>
      <span className="text-lg text-center line-clamp-1">{folder.folder_name}</span>
    </div>
  )
}
