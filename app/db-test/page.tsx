import { connectDB } from "@/lib/db";

export default async function DBTest() {
  await connectDB();

  return (
    <div>
      <h1>MongoDB Connection OK ✅</h1>
    </div>
  );
}
