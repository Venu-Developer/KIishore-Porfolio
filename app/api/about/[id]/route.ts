import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Product } from "@/models/about";

export async function GET(req: Request, context: any) {
  await connectDB();

  const { id } = await context.params; // ✅ Fix

  if (!id) {
    return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
  }

  const product = await Product.findById(id);

  return NextResponse.json(product);
}

export async function PUT(req: Request, context: any) {
  await connectDB();

  const { id } = await context.params; // ✅ Fix
  const body = await req.json();

  const updatedProduct = await Product.findByIdAndUpdate(id, body, {
    new: true,
  });

  return NextResponse.json(updatedProduct);
}

export async function DELETE(req: Request, context: any) {
  await connectDB();

  const { id } = await context.params; // ✅ Fix

  await Product.findByIdAndDelete(id);

  return NextResponse.json({ message: "Product deleted" });
}
