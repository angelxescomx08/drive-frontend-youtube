import type { ReactNode } from "react"

type Props = {
  children: ReactNode;
}

export const Dropzone = ({ children }:Props) => {
  return (
    <div className="w-full h-[calc(100vh-8rem)] border rounded-md shadow-lg flex gap-4 p-4 items-start justify-start flex-wrap"
      onDragOver={e => {
        e.preventDefault();
      }}
      onDrop={async (e)=>{
        e.preventDefault()
        if(e.dataTransfer && e.dataTransfer.items){
          for(let i= 0; i < e.dataTransfer.items.length; i++){
            const item = e.dataTransfer.items[i];
            if(item.webkitGetAsEntry()){
              const entry = item.webkitGetAsEntry();
              console.log(entry)
              if(entry?.isFile){
                console.log("Es archivo")
                const file = await new Promise<File>(resolve => {
                  (entry as FileSystemFileEntry).file(file => resolve(file))
                })
                console.log(file)
              }
              if(entry?.isDirectory){
                console.log("Es carpeta")
              }
            }
          }
        }
      }}
    >
      {children}
    </div>
  )
}
