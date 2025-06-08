"use client";

import { LucideMessageCircleQuestion, Search } from "lucide-react";
import { useState, useEffect } from "react";
import useBooks from "../hooks/useBooks";
import ListBooks from "../components/ListBooks";
import Main from "../components/Main";

export default function SearchPage() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const { books, error, isLoading } = useBooks({
    args: {
      name: query,
    },
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setQuery(input.trim());
    }, 1000);

    return () => clearTimeout(handler);
  }, [input]);

  return (
    <Main>
      <div className="h-16 w-full flex flex-row items-center justify-center p-2.5 md:w-[50%] gap-2.5">
        <input
          type="text"
          placeholder="(#-#)^"
          className="flex px-2 py-1 bg-[var(--primary)] outline-0 rounded-l-full text-[var(--primary-foreground)] w-full text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Search />
      </div>
      <ListBooks books={books} />
    </Main>
  );
}
