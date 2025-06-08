"use client";

import { useState } from "react";
import useBooks from "./hooks/useBooks";
import ListBooks from "./components/ListBooks";
import Main from "./components/Main";

export default function SearchPage() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const { books, error, isLoading } = useBooks({
    args: {},
  });

  return (
    <Main>
      <ListBooks books={books} />
    </Main>
  );
}
