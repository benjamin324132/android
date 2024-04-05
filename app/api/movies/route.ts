import prismaDb from "@/lib/db";
import { movieSchema } from "@/validations";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET() {
  const movies = await prismaDb.movie.findMany();

  return NextResponse.json(movies);
}

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const { name, plot, year, rating, img, url } = movieSchema.parse(body);

    const movie = await prismaDb.movie.create({
      data: {
        name,
        plot,
        year: parseInt(year),
        rating: parseFloat(rating),
        img,
        url,
      },
    });

    return NextResponse.json(movie);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("Invalid data.", { status: 400 });
    }
    return new Response("Something went wrong", { status: 500 });
  }
}
