"use client";

import { Movie } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

import moment from "moment";
import MovieActions from "./movieActions";
import Image from "next/image";

export const MoviesColumns: ColumnDef<Movie>[] = [
  {
    accessorKey: "img",
    header: "Image",
    cell: ({ row }) => (
      <div className="relative w-24 h-36 bg-slate-500 overflow-hidden">
        <Image
          src={row.original.img}
          fill
          alt={row.original.name}
          className=" object-contain"
        />
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "year",
    header: "Year",
  },
  {
    accessorKey: "rating",
    header: "Rating",
  },
  {
    id: "actions",
    cell: ({ row }) => <MovieActions movie={row.original} />,
  },
];