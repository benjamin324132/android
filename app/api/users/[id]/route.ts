import prismaDb from "@/lib/db";
import { userSchema } from "@/validations";
import { NextResponse } from "next/server";
import { z } from "zod";

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

export async function PUT(req: Request, { params }: IParams) {
  const body = await req.json();

  try {
    const { name, email } = userSchema.parse(body);

    const userFound = await prismaDb.user.findFirst({
      where: {
        email,
      },
    });

    if (!userFound) {
      return new Response("User not found", { status: 404 });
    }

    const updatedUser = await prismaDb.user.update({
      where: {
        id: params.id,
      },
      data: {
        name,
        email,
      },
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("Invalid data.", { status: 400 });
    }
    return new Response("Something went wrong", { status: 500 });
  }
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
