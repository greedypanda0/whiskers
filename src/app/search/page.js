"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import useBooks from "../hooks/useBooks";
import ListBooks from "../components/ListBooks";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const { books, error, isLoading } = useBooks({
    args: {
      name: query,
    },
  });

  return (
    <main className="fixed flex flex-col w-full h-full gap-2 items-center">
      <div className="h-16 w-full flex flex-row items-center justify-center p-2.5 md:w-[50%] gap-2.5">
        <input
          type="text"
          placeholder="(#-#)^"
          className="flex px-2 py-1 bg-[var(--primary)] outline-0 rounded-l-full text-[var(--primary-foreground)] w-full text-sm"
          onChange={(e) => setQuery(e.target.value.trim())}
        />
        <Search />
      </div>
      <ListBooks books={books} />
    </main>
  );
}
