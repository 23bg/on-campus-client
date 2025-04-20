// components/custom/table-common.tsx
import React, { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { FilterIcon, Eye, Pencil, Trash, Filter } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

interface TableComponentProps<T> {
    headers: Array<{ label: string; key: keyof T; sortable?: boolean }>;
    data: T[];
    avatarKey?: keyof T;
    showActions?: boolean;
    actionIconsOnly?: boolean;
    onRowClick?: (row: T) => void;
    onEdit?: (row: T) => void;
    onDelete?: (row: T) => void;
    rowsPerPageOptions?: number[];
    defaultRowsPerPage?: number;
}

const TableComponent = <T extends Record<string, any>>({
    headers,
    data,
    avatarKey,
    showActions = false,
    actionIconsOnly = false,
    onRowClick,
    onEdit,
    onDelete,
    rowsPerPageOptions = [5, 10, 15],
    defaultRowsPerPage = 5,
}: TableComponentProps<T>) => {
    const [search, setSearch] = useState("");
    const [sortedData, setSortedData] = useState<T[]>(data);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
    const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

    const filteredData = sortedData.filter((row) =>
        Object.values(row).some((val) =>
            String(val).toLowerCase().includes(search.toLowerCase())
        )
    );

    useEffect(() => {
        let sorted = [...data];
        if (sortColumn) {
            sorted.sort((a, b) => {
                if (a[sortColumn]! < b[sortColumn]!) return sortDirection === "asc" ? -1 : 1;
                if (a[sortColumn]! > b[sortColumn]!) return sortDirection === "asc" ? 1 : -1;
                return 0;
            });
        }
        setSortedData(sorted);
    }, [sortColumn, sortDirection, data]);

    const handleSort = (column: keyof T) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortDirection("asc");
        }
    };

    return (
        <div className="p-4 space-y-4">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 w-full">
                    <Button>
                        <Filter />
                    </Button>
                    <Input
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-1/3"
                    />
                </div>
                <div className="flex gap-2">
                    <Button>
                        Add Students
                    </Button>

                    <Button variant="outline">Export</Button>
                </div>
            </div>


            <ScrollArea className="h-96 w-full rounded-md border p-5 overflow-y-hidden" >
                <Table>
                    <TableHeader className="sticky top-0 z-10">
                        <TableRow>
                            {avatarKey && <TableHead>Avatar</TableHead>}
                            {headers.map(({ label, key, sortable }) => (
                                <TableHead
                                    key={String(key)}
                                    className="cursor-pointer whitespace-nowrap"
                                    onClick={() => sortable && handleSort(key)}
                                >
                                    {label}
                                    {sortable && sortColumn === key && (
                                        <FilterIcon
                                            className={`ml-1 inline ${sortDirection === "asc" ? "rotate-180" : ""}`}
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



        </div>
    );
};

export default TableComponent;