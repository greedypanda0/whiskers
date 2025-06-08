"use client";

import { useState, useEffect } from "react";
import AvatarSvg from "@/app/components/Avatar";
import Main from "@/app/components/Main";
import useBook from "@/app/hooks/useBook";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import usePages from "@/app/hooks/usePages";
import Link from "next/link";

export default function Edit() {
  const { name } = useParams();
  const { book, error: book_error, book_isLoading } = useBook({ name });
  const { pages, error, isLoading } = usePages({ name });
  const { data: session } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    if (book) {
      setFormData({
        name: book.name || "",
        description: book.description || "",
      });
    }
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddPage = async () => {
    const res = await fetch(`/api/books/${book.name}/pages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    }).then((res) => res.json());

    if (res.success) {
      router.push(`/books/${book.name}/edit/${res.page.index}`);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage("");

    try {
      const res = await fetch(`/api/books/${book.name}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.success) throw new Error();

      await new Promise((res) => setTimeout(res, 800)); // Simulate delay
      setSaveMessage("✅ Saved successfully!");
    } catch {
      setSaveMessage("❌ Failed to save changes.");
    } finally {
      setIsSaving(false);
      return router.push(`/books/${formData.name}/edit`);
    }
  };

  if (book_isLoading) {
    return (
      <Main>
        <div className="max-w-5xl w-full h-full flex items-center justify-center p-4">
          <p className="text-gray-500">Loading book details...</p>
        </div>
      </Main>
    );
  }

  if (book_error || !book) {
    return (
      <Main>
        <div className="max-w-5xl w-full h-full flex items-center justify-center p-4">
          <p className="text-red-500">Failed to load book details.</p>
        </div>
      </Main>
    );
  }

  return (
    <Main>
      <div className="max-w-5xl w-full h-full flex flex-col items-center gap-8 p-4 mb-12 overflow-y-auto">
        {/* Book Edit Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="flex w-full gap-6"
        >
          {/* Avatar */}
          <div className="w-[150px] h-[200px] flex rounded-xl overflow-hidden shadow-md">
            <div className="h-full w-[6px] bg-[var(--border)]" />
            <AvatarSvg name={formData.name} />
          </div>

          {/* Editable Fields */}
          <div className="flex flex-col justify-center gap-4 py-4 flex-grow">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Book Name"
              className="text-xl font-semibold text-[var(--primary)] bg-transparent border-b border-[var(--border)] focus:outline-none focus:border-[var(--accent)]"
            />

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              rows={3}
              className="text-base text-[var(--primary)]/70 bg-transparent border-b border-[var(--border)] resize-none focus:outline-none focus:border-[var(--accent)]"
            />

            <p className="text-sm italic text-[var(--accent)] select-none">
              by {book.author}
            </p>

            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={isSaving}
                className="px-4 py-2 bg-[var(--accent)] text-white rounded-md hover:bg-[var(--accent-hover)] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSaving ? "Saving..." : "Save"}
              </button>

              {saveMessage && (
                <span className="text-sm text-[var(--primary)]/70">
                  {saveMessage}
                </span>
              )}
            </div>
          </div>
        </form>

        {/* Pages Section */}
        <div className="flex flex-col w-full border-t border-[var(--border)] pt-4 h-full">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-[var(--primary)]">
              Pages
            </h2>
            <button
              className="text-sm text-[var(--accent)] hover:underline"
              onClick={handleAddPage}
            >
              + Add Page
            </button>
          </div>

          {isLoading ? (
            <p className="text-sm text-[var(--primary)]/50 italic">
              Loading pages...
            </p>
          ) : pages?.length === 0 ? (
            <p className="text-sm text-[var(--primary)]/50 italic">
              No pages yet.
            </p>
          ) : (
            <div className="h-full rounded-md">
              {pages.map((page) => (
                <Link
                  key={page.index}
                  href={`/books/${book.name}/edit/${page.index}`}
                >
                  <div className="px-4 py-2 cursor-pointer hover:bg-[var(--accent)]/10 rounded-md transition">
                    Page - {page.index}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </Main>
  );
}
