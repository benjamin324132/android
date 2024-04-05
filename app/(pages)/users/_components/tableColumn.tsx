"use client";

import { User } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import UserActions from "./userActions";
import moment from "moment";

export const UsersColumns: ColumnDef<User>[] = [
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => (
      <>{moment(row.original.createdAt).format("MM/DD/yyyy")}</>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    id: "actions",
    cell: ({ row }) => <UserActions user={row.original} />,
  },
];