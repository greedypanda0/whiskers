"use client";

import Main from "@/app/components/Main";
import useBook from "@/app/hooks/useBook";
import usePage from "@/app/hooks/usePage";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function EditPage() {
  const { name, index } = useParams();
  const { book, error: bookError, book_isLoading } = useBook({ name });
  const { page, error, isLoading } = usePage({ name, index });

  const title = decodeURIComponent(name);

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
      <div className="max-w-5xl w-full h-full mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-[var(--accent)]">
          Page {index} of{" "}
          <span className="text-[var(--foreground)]">
            <Link href={`/books/${title}`}>{title}</Link>
          </span>
        </h1>

        <div className="p-6 rounded-[var(--radius)] shadow border w-full bg-[var(--card)] text-[var(--foreground)] border-[var(--border)] whitespace-pre-wrap break-words break-all overflow-hidden">
          {page.content?.length > 0 ? page.content : "no content"}
        </div>
      </div>
    </Main>
  );
}
