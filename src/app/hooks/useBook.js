import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function useBook({ name }) {
  const [book, setBook] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/books/${name}`);
        const data = await res.json();

        if (!data.success) {
          setError("Unable to get book");
        } else {
          setBook(data.book || {});
        }
      } catch (err) {
        setError("Fetch failed");
      } finally {
        setLoading(false);
      }
    };

    if (!name) return;
    fetchBooks();
  }, [name]);

  return { book, error, isLoading };
}
