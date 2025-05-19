"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import clsx from "clsx";
import Stared from "../components/Stared";
import MyBooks from "../components/MyBooks";
import { BookA, Search, Star } from "lucide-react";
import useStore from "@/lib/store";

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
    <main className="fixed flex flex-col md:flex-row w-full h-full ">
      <div className="flex flex-col w-full h-full">
        <div className="w-full h-16 flex flex-row items-center justify-evenly">
          {tabs.map((e, i) => (
            <div
              key={i}
              className={clsx(
                "flex flex-col items-center justify-center text-md transition-all duration-200 ease-in-out p-2",
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
        <div className="w-full h-16 flex flex-row items-center ml-2.5 gap-2">
          <div
            className={clsx(
              "flex transition-all duration-300 ease-in-out rounded overflow-hidden gap-2",
              isSearchOpen ? "md:w-[40%] w-[60%]" : "w-0"
            )}
          >
            <input
              type="text"
              placeholder="(#-#)^"
              className="flex px-2 py-1 bg-[var(--primary)] outline-0 rounded-l-full text-[var(--primary-foreground)] w-full overflow-scroll text-sm"
              onChange={(e) => setQuery(e.target.value.trim())}
            />
          </div>

          <Search
            className="shrink-0"
            size={20}
            onClick={() => setSearchOpen(!isSearchOpen)}
          />
        </div>
        <div className="w-full h-full overflow-hidden flex flex-row">
          {tabs.map((e, i) => (
            <div
              className={clsx(
                "h-full flex overflow-hidden",
                tab === e.name ? "w-full" : "w-0"
              )}
              key={i + 99}
            >
              <e.componenet />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
