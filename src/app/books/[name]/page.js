"use client";

import AvatarSvg from "@/app/components/Avatar";
import Main from "@/app/components/Main";
import useBook from "@/app/hooks/useBook";
import usePages from "@/app/hooks/usePages";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BooksWithName() {
  const { name } = useParams();
  const { book, error: bookError, book_isLoading } = useBook({ name });
  const { pages, error, isLoading } = usePages({ name });
  const { data: session } = useSession();

  if (book_isLoading) {
    return (
      <Main>
        <div className="max-w-5xl w-full h-full flex items-center justify-center p-4">
          <p className="text-gray-500">Loading book details...</p>
        </div>
      </Main>
    );
  }

  if (bookError || !book) {
    return (
      <Main>
        <div className="max-w-5xl w-full h-full flex items-center justify-center p-4">
          <p className="text-red-500">Failed to load book details.</p>
        </div>
      </Main>
    );
  }

  const canEdit = session?.user.auth_name === book.author;

  return (
    <Main>
      <div className="max-w-5xl w-full flex flex-col items-center p-4 overflow-y-auto">
        <div className="flex w-full max-h-[200px] gap-6">
          {/* Avatar container with border accent */}
          <div className="w-[150px] h-[200px] flex rounded-xl overflow-hidden shadow-md">
            <div className="h-full w-[6px] bg-[var(--border)]"></div>
            <AvatarSvg name={name} />
          </div>

          {/* Book details */}
          <div className="flex flex-col justify-center gap-3 py-4 flex-grow">
            <h1 className="text-xl font-semibold text-[var(--primary)]">
              {book.name}
            </h1>
            <p className="text-base text-[var(--primary)]/70">{book.description}</p>
            <p className="text-sm text-[var(--accent)] italic">by {book.author}</p>
          </div>

          {/* Edit button only visible if logged in */}
          {canEdit && (
            <div className="flex items-center">
              <Link
                href={`/books/${book.name}/edit`}
                className="px-6 py-2 bg-[var(--accent)] text-white rounded-md hover:bg-[var(--accent-hover)] transition"
                aria-label={`Edit book ${book.name}`}
              >
                Edit
              </Link>
            </div>
          )}
        </div>

        <div className="flex flex-col w-full border-t border-[var(--border)] pt-4 h-full">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-[var(--primary)]">Pages</h2>
          </div>

          {isLoading ? (
            <p className="text-sm text-[var(--primary)]/50 italic">Loading pages...</p>
          ) : pages?.length === 0 ? (
            <p className="text-sm text-[var(--primary)]/50 italic">No pages yet.</p>
          ) : (
            <div className="h-full rounded-md space-y-2">
              {pages.map((page) => (
                <div
                  key={page.index}
                  className="flex items-center justify-between px-4 py-2 rounded-md hover:bg-[var(--accent)]/10 transition cursor-pointer"
                >
                  <Link
                    href={`/books/${book.name}/read/${page.index}`}
                    className="text-[var(--foreground)]"
                  >
                    Page - {page.index}
                  </Link>

                  {canEdit && (
                    <Link
                      href={`/books/${book.name}/edit/${page.index}`}
                      className="px-4 py-1 bg-[var(--accent)] text-white rounded-md hover:bg-[var(--accent-hover)] transition text-sm"
                      aria-label={`Edit page ${page.index} of ${book.name}`}
                    >
                      Edit
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Main>
  );
}
