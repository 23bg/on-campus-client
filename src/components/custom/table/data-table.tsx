// components/table/DataTable.tsx
import { ReactNode } from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FilterIcon, Eye, Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (row: T) => ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  avatarKey?: keyof T;
  showActions?: boolean;
  actionIconsOnly?: boolean;
  onRowClick?: (row: T) => void;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  sortColumn?: keyof T;
  sortDirection?: "asc" | "desc";
  onSort?: (key: keyof T) => void;
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  avatarKey,
  showActions = false,
  actionIconsOnly = true,
  onRowClick,
  onEdit,
  onDelete,
  sortColumn,
  sortDirection,
  onSort,
}: DataTableProps<T>) {
  return (
    <ScrollArea className="h-96 w-full rounded-md border p-5 overflow-y-hidden">
      <Table>
        <TableHeader className="sticky top-0 z-10">
          <TableRow>
            {avatarKey && <TableHead>Avatar</TableHead>}
            {columns.map((col) => (
              <TableHead
                key={String(col.key)}
                className="cursor-pointer whitespace-nowrap"
                onClick={() => col.sortable && onSort?.(col.key)}
              >
                {col.label}
                {col.sortable && sortColumn === col.key && (
                  <FilterIcon className={`ml-1 inline ${sortDirection === "asc" ? "rotate-180" : ""}`} />
                )}
              </TableHead>
            ))}
            {showActions && <TableHead>Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow key={idx}>
              {avatarKey && (
                <TableCell>
                  <img
                    src={String(row[avatarKey])}
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </TableCell>
              )}
              {columns.map((col) => (
                <TableCell key={String(col.key)}>
                  {col.render ? col.render(row) : String(row[col.key])}
                </TableCell>
              ))}
              {showActions && (
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end">
                    {actionIconsOnly ? (
                      <>
                        <Eye className="w-4 h-4 text-blue-500 cursor-pointer" onClick={() => onRowClick?.(row)} />
                        <Pencil className="w-4 h-4 text-yellow-500 cursor-pointer" onClick={() => onEdit?.(row)} />
                        <Trash className="w-4 h-4 text-red-500 cursor-pointer" onClick={() => onDelete?.(row)} />
                      </>
                    ) : (
                      <>
                        <Button onClick={() => onRowClick?.(row)}>View</Button>
                        <Button onClick={() => onEdit?.(row)}>Edit</Button>
                        <Button onClick={() => onDelete?.(row)} variant="destructive">
                          Delete
                        </Button>
                      </>
                    )}
                  </div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
}
