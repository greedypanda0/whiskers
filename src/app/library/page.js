"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import clsx from "clsx";
import Stared from "../components/Stared";
import MyBooks from "../components/MyBooks";
import { BookA, Search, Star } from "lucide-react";
import useStore from "@/lib/store";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    name: "My Books",
    componenet: MyBooks,
    icon: BookA,
  },
  {
    name: "Stared",
    componenet: Stared,
    icon: Star,
  },
];

export default function Libraray() {
  const [tab, setTab] = useState("My Books");
  const [isSearchOpen, setSearchOpen] = useState(false);
  const { setQuery } = useStore();

  return (
    <main className="fixed flex flex-col md:flex-row w-full h-full">
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
        <div className="w-full h-16 flex flex-row items-center ml-2.5 gap-2">
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
              onChange={(e) => setQuery(e.target.value.trim())}
            />
          </motion.div>

          <Search
            className="shrink-0 cursor-pointer"
            size={20}
            onClick={() => setSearchOpen(!isSearchOpen)}
          />
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
                  <e.componenet />
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </main>
  );
}
