import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { BreadcrumbEllipsis } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';

type Props = {
  paths: string[];
  ids: string[];
  itemsToDisplay: number;
  onClick: (id: string, path: string) => void;
};

export const BreadcrumbComponent = ({
  paths,
  ids,
  itemsToDisplay,
  onClick,
}: Props) => {
  const [open, setOpen] = useState(false);

  const isSingle = paths.length === 1;
  const middle = paths.slice(1, paths.length - 1);

  const handleClick = (index: number, value: string) => {
    onClick(ids[index], value);
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* HOME */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild href="/home">
            <Button
              variant="ghost"
              className="text-2xl"
              onClick={() => handleClick(0, paths[0])}
            >
              {paths[0]}
            </Button>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {/* Caso: solo un elemento */}
        {isSingle ? null : (
          <>
            {/* ELLIPSIS (solo si hay suficientes items) */}
            {paths.length >= itemsToDisplay && (
              <>
                <BreadcrumbItem>
                  
                  <DropdownMenu open={open} onOpenChange={setOpen}>
                    <DropdownMenuTrigger
                      aria-label="Toggle menu"
                      className="flex items-center gap-1"
                    >
                      <BreadcrumbEllipsis className="size-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {middle.map((path, i) => (
                        <DropdownMenuItem key={i}>
                          <Button
                            variant="ghost"
                            className="text-2xl"
                            onClick={() => handleClick(i + 1, path)}
                          >
                            {path}
                          </Button>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                </BreadcrumbItem>

                <BreadcrumbSeparator />
              </>
            )}

            {/* Último elemento */}
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="max-w-20 truncate md:max-w-none">
                <Button
                  variant="ghost"
                  className="text-2xl"
                  onClick={() =>
                    handleClick(ids.length - 1, paths[paths.length - 1])
                  }
                >
                  {paths[paths.length - 1]}
                </Button>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
