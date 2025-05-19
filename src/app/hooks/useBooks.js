import { useEffect, useState } from "react";

export default function useBooks() {
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(async() => {

  }, [setBooks, setLoading, setError])
}
