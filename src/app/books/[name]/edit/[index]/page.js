"use client";

import Main from "@/app/components/Main";
import useBook from "@/app/hooks/useBook";
import usePage from "@/app/hooks/usePage";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function EditPage() {
  const { name, index } = useParams();
  const { book, error: bookError, book_isLoading } = useBook({ name });
  const { page, error, isLoading } = usePage({ name, index });
  const [content, setContent] = useState("");

  useEffect(() => {
    if (page?.content) setContent(page.content);
  }, [page]);

  async function handleSave() {
    if (!content.trim()) return alert("Content is empty!");
    try {
      const res = await fetch(`/api/books/${book?.name}/pages/${index}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      if (!res.ok) throw new Error("Failed to save");
      alert("Page saved successfully!");
    } catch (err) {
      console.error(err);
      alert("Error saving the page.");
    }
  }

  if (book_isLoading || isLoading) {
    return (
      <Main>
        <div className="text-center text-lg text-[var(--foreground)]">
          Loading...
        </div>
      </Main>
    );
  }

  if (error || bookError) {
    return (
      <Main>
        <div className="text-center text-lg text-[var(--accent)]">
          Failed to load page or book.
        </div>
      </Main>
    );
  }

  return (
    <Main>
      <div className="max-w-5xl w-full mx-auto h-full px-4 py-8 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[var(--foreground)]">
            Editing Page {index} of{" "}
            <span className="text-[var(--accent)]">{name.replaceAll("%20", " ")}</span>
          </h1>
          <button
            onClick={handleSave}
            className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--primary-foreground)] px-4 py-2 rounded-[var(--radius)] shadow transition font-medium"
          >
            Save
          </button>
        </div>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-[500px] resize-none p-4 text-base font-mono bg-[var(--input)] text-[var(--foreground)] border border-[var(--border)] rounded-[var(--radius)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] shadow-sm placeholder-[var(--muted-foreground)]"
          placeholder="Start writing your content here..."
        />
      </div>
    </Main>
  );
}
