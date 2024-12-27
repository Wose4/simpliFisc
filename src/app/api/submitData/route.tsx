// app/api/submitData/route.ts
import { NextResponse } from "next/server";
import postgres from "postgres";

export async function POST(req: Request) {
  const data = await req.json();
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not defined");
    }
    const sql = postgres(process.env.DATABASE_URL, { ssl: "require" });

    // Create table if it doesn't exist
    await sql`
    CREATE TABLE IF NOT EXISTS answers (
      id SERIAL PRIMARY KEY,
      answers JSONB NOT NULL
    )
  `;

    // Insert answers
    await sql`
    INSERT INTO answers (answers)
    VALUES (${JSON.stringify(data.answers)})
  `;
    return NextResponse.json({ message: "Data successfully inserted!" });

  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json(
      { error: "Error inserting data" },
      { status: 500 }
    );
  }
}
