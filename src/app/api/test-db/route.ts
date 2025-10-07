import { connectToDatabase } from "@/database/mongoose"; // adjust path as needed

export async function GET() {
  try {
    await connectToDatabase();
    return Response.json({ message: "Connected successfully!" });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Database connection failed", error: (error as Error).message }, { status: 500 });
  }
}
