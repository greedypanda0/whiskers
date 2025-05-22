import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function useBooks({ self = false, args = {} }) {
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { data: session } = useSession();
  const name = session?.user?.name;

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams();

        if (self && name) queryParams.append("author", name);
        for (const [key, value] of Object.entries(args)) {
          queryParams.append(key, value);
        }

        const res = await fetch(`/api/books?${queryParams.toString()}`);
        const data = await res.json();

        if (!data.success) {
          setError("Unable to get books");
        } else {
          setBooks(data.books || []);
        }
      } catch (err) {
        setError("Fetch failed");
      } finally {
        setLoading(false);
      }
    };

    if (self && !name) return;
    fetchBooks();
  }, [self, name, JSON.stringify(args)]);

  return { books, error, isLoading };
}
