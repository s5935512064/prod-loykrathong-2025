import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  const page_str = request.nextUrl.searchParams.get("page");
  const limit_str = request.nextUrl.searchParams.get("limit");
  const year_str = request.nextUrl.searchParams.get("year");

  const page = page_str ? parseInt(page_str, 10) : 1;
  const limit = limit_str ? parseInt(limit_str, 10) : 100;
  const year = year_str ? parseInt(year_str, 10) : 2024;
  const skip = (page - 1) * limit;

  const token = request.headers.get("X-CSRF-Token");
  if (token != process.env.NEXT_PUBLIC_CSRF_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const response = await prisma.$transaction(async (prisma) => {
      const [total, items] = await Promise.all([
        prisma.krathong.count({
          where: {
            createdAt: {
              gte: new Date(`${year}-01-01`),
              lte: new Date(`${year}-12-31`),
            },
          },
        }),
        prisma.krathong.findMany({
          where: {
            createdAt: {
              gte: new Date(`${year}-01-01`),
              lte: new Date(`${year}-12-31`),
            },
          },
          take: limit,
          skip: skip,
          orderBy: {
            createdAt: "desc",
          },
        }),
      ]);
      return { data: items, total };
    });

    const payload = {
      status: "success",
      data: response.data,
      total: response.total,
      nextPage: response.total / limit > page ? true : false,
    };
    return NextResponse.json(payload, { status: 200 });
  } catch (e) {
    throw e;
  }
}

export async function POST(request: NextRequest) {
  const data = await request.json();

  const token = request.headers.get("X-CSRF-Token");
  if (token != process.env.NEXT_PUBLIC_CSRF_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const krathongItem = await prisma.krathong.create({
      data: data,
    });
    return NextResponse.json(krathongItem, { status: 200 });
  } catch (e) {
    console.log(e);
  }
}
