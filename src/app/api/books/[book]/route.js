import Book from "@/lib/models/Book";
import { connectToDatabase, sanitizeMongoDoc } from "@/lib/mongoose";
import { json } from "@/lib/utils";

export async function GET(req, { params }) {
  await connectToDatabase();
  const { book } = await params;
  
  let raw = await Book.findOne({ name: book }).lean();
  if (!raw) return json({ message: "no book found" }, false);

  let book_data = sanitizeMongoDoc(raw);

  return json({ book: book_data }, true);
}

export async function POST(req, { params }) {
  await connectToDatabase();
  const { book } = await params;

  try {
    const body = await req.json(); 
    const { name, description } = body;

    if (!name || !description) {
      return json({ message: "Missing required fields" }, false);
    }

    const existing = await Book.findOne({ name: book });
    if (!existing) {
      return json({ message: "Book not found" }, false);
    }

    existing.name = name;
    existing.description = description;
    await existing.save();

    return json({ message: "Book updated successfully" }, true);
  } catch (err) {
    console.error(err);
    return json({ message: "Server error", error: err.message }, false);
  }
}

// DELETE: placeholder (not implemented yet)
export async function DELETE({ params }) {
  return json({ message: "DELETE not implemented yet" }, false);
}
