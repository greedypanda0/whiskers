import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function usePage({ name, index }) {
  const [page, setPage] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/books/${name.replaceAll("-", " ")}/pages/${index}`);
        const data = await res.json();

        if (!data.success) {
          setError("Unable to get book");
        } else {
          setPage(data.page || {});
        }
      } catch (err) {
        setError("Fetch failed");
      } finally {
        setLoading(false);
      }
    };

    if (!index) return;
    fetchBooks();
  }, [index]);

  return { page, error, isLoading };
}
