import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function usePages({ name }) {
  const [pages, setPages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/books/${name.replaceAll("-", " ")}/pages`
        );
        const data = await res.json();

        if (!data.success) {
          setError("Unable to get book pages");
        } else {
          setPages(data.pages || []);
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

  return { pages, error, isLoading };
}
