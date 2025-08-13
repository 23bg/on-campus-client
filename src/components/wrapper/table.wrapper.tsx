// components/table/TableWrapper.tsx
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Filter } from "lucide-react";
import { FilterIcon, Eye, Pencil, Trash } from "lucide-react"; // adjust path

interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
}

interface TableWrapperProps<T> {
  data: T[];
  headers: Column<T>[];
  avatarKey?: keyof T;
  showActions?: boolean;
  actionIconsOnly?: boolean;
  searchValue?: string;
  onSearchChange?: (val: string) => void;
  onSort?: (key: keyof T) => void;
  sortColumn?: keyof T;
  sortDirection?: "asc" | "desc";
  onRowClick?: (row: T) => void;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  topActions?: ReactNode;
  rowsPerPage?: number;
  page?: number;
}

export function TableWrapper<T extends Record<string, any>>({
  data,
  headers,
  avatarKey,
  showActions = false,
  actionIconsOnly = true,
  searchValue = "",
  onSearchChange,
  onSort,
  sortColumn,
  sortDirection,
  onRowClick,
  onEdit,
  onDelete,
  topActions,
  rowsPerPage = 10,
  page = 0,
}: TableWrapperProps<T>) {
  const filteredData = searchValue
    ? data.filter((row) =>
        headers.some((col) =>
          String(row[col.key]).toLowerCase().includes(searchValue.toLowerCase())
        )
      )
    : data;

  return (
    <div className="p-4 space-y-4">
      {/* Top Actions */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 w-full">
          <Button>
            <Filter />
          </Button>
          <Input
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="w-1/3"
          />
        </div>
        <div className="flex gap-2">{topActions}</div>
      </div>

      {/* Scrollable Table */}
      <ScrollArea className="h-96 w-full rounded-md border p-5 overflow-y-hidden">
        <Table>
          <TableHeader className="sticky top-0 z-10">
            <TableRow>
              {avatarKey && <TableHead>Avatar</TableHead>}
              {headers.map(({ label, key, sortable }) => (
                <TableHead
                  key={String(key)}
                  className="cursor-pointer whitespace-nowrap"
                  onClick={() => sortable && onSort?.(key)}
                >
                  {label}
                  {sortable && sortColumn === key && (
                    <FilterIcon
                      className={`ml-1 inline ${
                        sortDirection === "asc" ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </TableHead>
              ))}
              {showActions && <TableHead>Actions</TableHead>}
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {avatarKey && (
                    <TableCell>
                      <img
                        src={String(row[avatarKey])}
                        alt="avatar"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </TableCell>
                  )}
                  {headers.map(({ key }) => (
                    <TableCell key={String(key)}>{String(row[key])}</TableCell>
                  ))}
                  {showActions && (
                    <TableCell className="text-right">
                      <div className="flex gap-2">
                        {actionIconsOnly ? (
                          <>
                            <Eye
                              className="w-4 h-4 text-blue-500 cursor-pointer"
                              onClick={() => onRowClick?.(row)}
                            />
                            <Pencil
                              className="w-4 h-4 text-yellow-500 cursor-pointer"
                              onClick={() => onEdit?.(row)}
                            />
                            <Trash
                              className="w-4 h-4 text-red-500 cursor-pointer"
                              onClick={() => onDelete?.(row)}
                            />
                          </>
                        ) : (
                          <>
                            <Button onClick={() => onRowClick?.(row)}>View</Button>
                            <Button onClick={() => onEdit?.(row)}>Edit</Button>
                            <Button
                              onClick={() => onDelete?.(row)}
                              variant="destructive"
                            >
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
    </div>
  );
}
