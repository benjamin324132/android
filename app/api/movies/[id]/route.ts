import prismaDb from "@/lib/db";
import { NextResponse } from "next/server";

interface IParams {
  params: {
    id: string;
  };
}

export async function GET(req: Request, { params }: IParams) {
  const movie = await prismaDb.movie.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!movie) {
    return new Response("Movie not found", { status: 404 });
  }

  return NextResponse.json(movie);
}

export async function DELETE(req: Request, { params }: IParams) {
  const movie = await prismaDb.movie.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!movie) {
    return new Response("Movie not found", { status: 404 });
  }

  await prismaDb.movie.delete({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(movie);
}
