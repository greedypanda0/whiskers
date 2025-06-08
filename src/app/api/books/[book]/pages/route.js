import Page from "@/lib/models/Page";
import Book from "@/lib/models/Book";
import { connectToDatabase, sanitizeMongoDoc } from "@/lib/mongoose";
import { json } from "@/lib/utils";

export async function GET(req, { params }) {
  const { book: bookName } = await params;
  await connectToDatabase();

  const bookData = await Book.findOne({ name: bookName });
  if (!bookData) {
    return json({ message: "Book not found" }, false);
  }

  const raw = await Page.find({ book: bookData._id })
    .sort({ index: -1 })
    .lean();
  const pages = sanitizeMongoDoc(raw);

  return json(
    {
      pages,
    },
    true
  );
}

export async function POST(req, { params }) {
  const { book: bookName } = await params;
  await connectToDatabase();

  const bookData = await Book.findOne({ name: bookName });
  if (!bookData) {
    return json({ message: "Book not found" }, false);
  }

  const latestPage = await Page.findOne({ book: bookData._id })
    .sort({ index: -1 })
    .lean();

  const nextIndex = (latestPage?.index ?? 0) + 1;

  const newPage = await Page.create({
    book: bookData._id,
    index: nextIndex,
  });

  return json({ message: "Page created", page: newPage }, true);
}
