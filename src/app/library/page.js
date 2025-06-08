"use client";

import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import clsx from "clsx";
import Stared from "../components/Stared";
import MyBooks from "../components/MyBooks";
import { BookA, Plus, Search, Star } from "lucide-react";
import useStore from "@/lib/store";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Main from "../components/Main";

const tabs = [
  {
    name: "My Books",
    component: MyBooks,
    icon: BookA,
  },
];

export default function Library() {
  const [tab, setTab] = useState("My Books");
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [input, setInput] = useState("");
  const { setQuery } = useStore();
  const router = useRouter();

  useEffect(() => {
    const handler = setTimeout(() => {
      setQuery(input.trim());
    }, 1000);

    return () => clearTimeout(handler);
  }, [input, setQuery]);

  async function handleNewBook() {
    let res = await fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }).then((res) => res.json());

    return router.push(`books/${res.name}/edit`);
  }

  return (
    <Main>
      <div className="flex flex-col w-full h-full">
        {/* Tabs */}
        <div className="w-full h-16 flex flex-row items-center justify-evenly">
          {tabs.map((e, i) => (
            <div
              key={i}
              className={clsx(
                "flex flex-col items-center justify-center text-md transition-all duration-200 ease-in-out p-2 cursor-pointer",
                tab === e.name
                  ? "text-[var(--primary)] font-semibold -translate-y-0.5"
                  : "text-[var(--secondary-hover)] hover:text-[var(--secondary-foreground)] active:text-[var(--secondary-foreground)]"
              )}
              onClick={() => setTab(e.name)}
            >
              <span>{e.name}</span>
            </div>
          ))}
        </div>

        {/* Search bar */}
        <div className="w-full h-16 flex flex-row items-center pl-2.5 pr-2.5 gap-2">
          <motion.div
            layout
            initial={false}
            animate={{ width: isSearchOpen ? "60%" : "0%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden flex gap-2"
          >
            <input
              type="text"
              placeholder="(#-#)^"
              className="flex px-2 py-1 bg-[var(--primary)] outline-0 rounded-l-full text-[var(--primary-foreground)] w-full text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </motion.div>

          <Search
            className="shrink-0 cursor-pointer"
            size={20}
            onClick={() => setSearchOpen(!isSearchOpen)}
          />

          <div
            className={clsx(
              "w-[150px] flex flex-col bg-[var(--primary)] justify-center items-center rounded-2xl ml-auto py-2.5",
              tab !== "My Books" ? "hidden" : ""
            )}
            onClick={() => handleNewBook()}
          >
            <Plus />
          </div>
        </div>

        {/* Tab content */}
        <div className="w-full h-full overflow-hidden flex flex-row relative">
          <AnimatePresence mode="wait">
            {tabs.map((e, i) =>
              tab === e.name ? (
                <motion.div
                  key={e.name}
                  className="absolute w-full h-full top-0 left-0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <e.component />
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>
    </Main>
  );
}
