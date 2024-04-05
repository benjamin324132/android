import prismaDb from "@/lib/db";
import { NextResponse } from "next/server";

interface IParams {
  params: {
    id: string;
  };
}

export async function GET(req: Request, { params }: IParams) {
  const user = await prismaDb.user.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!user) {
    return new Response("User not found", { status: 404 });
  }

  return NextResponse.json(user);
}

export async function DELETE(req: Request, { params }: IParams) {
  const user = await prismaDb.user.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!user) {
    return new Response("User not found", { status: 404 });
  }

  await prismaDb.user.delete({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(user);
}
