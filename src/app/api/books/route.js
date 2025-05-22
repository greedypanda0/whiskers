import { getSession } from "@/lib/auth";
import Book from "@/lib/models/Book";
import User from "@/lib/models/User";
import { connectToDatabase, sanitizeMongoDoc } from "@/lib/mongoose";
import { getRandomId, json } from "@/lib/utils";

export async function GET(req) {
  await connectToDatabase();

  const url = new URL(req.url);
  const query = Object.fromEntries(url.searchParams.entries());
  let conf = {};

  Object.entries(query).forEach(([key, value]) => {
    conf[key] = { $regex: value, $options: "i" };
  });

  const books = (await Book.find(conf).lean()).map((e) => ({
    name: e.name,
    author: e.author,
    description: e.description,
  }));

  return json({ books }, true);
}

export async function POST(req) {
  await connectToDatabase();

  const body = await req.json();
  const id = body.id;

  const session = await getSession();
  const userId = session?.user?.id;

  const user = await User.findById(userId);
  if (!user) return json({ message: "no user" }, false);

  if (!id) {
    const newBook = new Book({
      name: "book_" + getRandomId(),
      description: "new book",
      author: user.name,
    });

    await newBook.save();
    user.books.push(newBook._id);
    await user.save();

    return json(
      {
        name: newBook.name,
      },
      true
    );
  }

  return json({ message: "id already exists or not handled yet" }, false);
}

export async function DELETE() {
  // coming soon to a Lucky near you!
}
