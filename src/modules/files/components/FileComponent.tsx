import { useMemo, type MouseEvent } from "react";
import type { FileData } from "../schemas/fileSchema"
import { cn } from "@/lib/utils";

type Props = {
  file: FileData;
  isSelected: boolean;
  onClick: (e:  MouseEvent<HTMLDivElement>)=>void;
}

export const FileComponent = ({ file, onClick, isSelected }: Props) => {

  const icon = useMemo(()=>{
    if([".png", ".jpg", ".jpeg", ".gif", ".svg"].includes(
      `.${file.file_name.toLowerCase().split(".").pop() || ""}`
    )){
      return "/assets/icons/img.png"
    }

    if([".pdf"].includes(
      `.${file.file_name.toLowerCase().split(".").pop() || ""}`
    )){
      return "/assets/icons/pdf.png"
    }

    if(['.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx'].includes(
      `.${file.file_name.toLowerCase().split(".").pop() || ""}`
    )){
      return "/assets/icons/pdf.png"
    }

    return '/assets/icons/file.png';
  },[file])

  return (
    <div className={cn("w-28 cursor-pointer",{
      "bg-blue-500": isSelected
    })} onClick={onClick}>
      <img className="w-28" src={icon} alt={file.file_name}/>
      <span className="text-lg text-center line-clamp-1">{file.file_name}</span>
    </div>
  )
}
