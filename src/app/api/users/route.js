import User from "@/lib/models/User";
import { connectToDatabase, sanitizeMongoDoc } from "@/lib/mongoose";
import { json } from "@/lib/utils";

export async function GET(req) {
  await connectToDatabase();

  const url = new URL(req.url);
  const query = Object.fromEntries(url.searchParams.entries());
  let conf = {};

  Object.entries(query).forEach(([key, value]) => {
    conf[key] = { $regex: value, $options: "i" };
  });

  const users = (await User.find(conf).lean()).map((e) => ({
    name: e.name,
  }));

  return json({ users }, true);
}
