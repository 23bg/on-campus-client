// data/columns.ts

import { Column } from "@/components/custom/table/data-table";


export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

export const userColumns: Column<User>[] = [
  { key: "name", label: "Name", sortable: true },
  { key: "email", label: "Email" },
  { key: "role", label: "Role", sortable: true },
];
