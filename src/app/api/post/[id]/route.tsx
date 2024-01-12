import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req: any, { params }: any) {
  const id = params.id;
  console.log({ id });
  const postDeleted = await prisma.post.delete({
    where: {
      id,
    },
  });
  return NextResponse.json(postDeleted);
}
