import { connectToDatabase, sanitizeMongoDoc } from "@/lib/mongoose";
import User from "@/lib/models/User";
import { json } from "@/lib/utils";

export async function GET(req, { params }) {
  await connectToDatabase();
  const { name } = await params;

  let raw = await User.findOne({ name }).lean();
  let user = sanitizeMongoDoc(raw);

  return json(
    {
      user,
    },
    true
  );
}
