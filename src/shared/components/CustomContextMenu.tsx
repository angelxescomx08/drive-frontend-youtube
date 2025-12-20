import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuShortcut, ContextMenuTrigger } from "@/components/ui/context-menu"
import { Download, File, Folder, Trash } from "lucide-react";
import type { ReactNode } from "react"

type Props = {
  children: ReactNode;
  onNewFolder?: ()=>void;
  onUploadFile?: ()=>void;
  onDownloadFile?: ()=>void;
  onDelete?: ()=>void;
}

export const CustomContextMenu = ({ 
  children, onDelete, onDownloadFile, onNewFolder, onUploadFile 
}: Props) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        {children}
      </ContextMenuTrigger>

      <ContextMenuContent className="w-52">
        <ContextMenuItem onClick={onNewFolder}>
          Nueva carpeta
          <ContextMenuShortcut>
            <Folder></Folder>
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem onClick={onUploadFile}>
          Subir archivo
          <ContextMenuShortcut>
            <File></File>
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem onClick={onDownloadFile}>
          Descargar archivo
          <ContextMenuShortcut>
            <Download></Download>
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem onClick={onDelete}>
          Eliminar
          <ContextMenuShortcut>
            <Trash></Trash>
          </ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
