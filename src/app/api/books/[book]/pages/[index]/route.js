import Page from "@/lib/models/Page";
import Book from "@/lib/models/Book";
import { connectToDatabase, sanitizeMongoDoc } from "@/lib/mongoose";
import { json } from "@/lib/utils";

export async function GET(req, { params }) {
  const { book: bookName, index } = await params;
  await connectToDatabase();

  const bookData = await Book.findOne({ name: bookName });
  if (!bookData) {
    return json({ message: "Book not found" }, false);
  }

  const raw = await Page.findOne({ book: bookData._id, index }).lean();
  if (!raw) {
    return json({ message: "page not found" }, false);
  }

  const pages = sanitizeMongoDoc(raw);

  return json(
    {
      page: raw,
    },
    true
  );
}

export async function POST(req, { params }) {
  const { book: bookName, index } = await params;
  const body = await req.json();
  const { content } = body;
  await connectToDatabase();

  const bookData = await Book.findOne({ name: bookName });
  if (!bookData) {
    return json({ message: "Book not found" }, false);
  }

  const raw = await Page.findOne({ book: bookData._id, index });
  if (!raw) {
    return json({ message: "page not found" }, false);
  }
  raw.content = content;
  await raw.save();

  return json({ message: "Page updated" }, true);
}
