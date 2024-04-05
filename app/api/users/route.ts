import prismaDb from "@/lib/db";
import { userSchema } from "@/validations";
import { NextResponse } from "next/server";
import * as z from "zod";

export async function GET() {
    try {
        const users = await prismaDb.user.findMany();

        return NextResponse.json(users);
    } catch (error) {
        console.log("error",error);
        return new Response("Something went wrong", { status: 500 });
    }
 
}



export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email } = userSchema.parse(body);

    const userExist = await prismaDb.user.findUnique({
      where: {
        email,
      },
    });

    if (userExist) {
      return new Response("User already exists.", { status: 400 });
    }

    const newUser = await prismaDb.user.create({
      data: {
        name,
        email,
      },
    });

    return NextResponse.json(newUser);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("Invalid data.", { status: 400 });
    }

    return new Response("Something went wrong", { status: 500 });
  }
}
