import Book from "@/lib/models/Book";

export async function GET({ params }) {
  await connectToDatabase();
  const { name } = await params;

  let raw = await Book.findOne({ name }).lean();
  let book = sanitizeMongoDoc(raw);

  return json(
    {
      book,
    },
    true
  );
}

export async function POST({ params }) {}

export async function DELETE({ params }) {}
