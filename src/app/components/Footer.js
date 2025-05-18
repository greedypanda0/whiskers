import {
  Home,
  Library,
  MessageCircleMore,
  Search,
  SearchCheck,
  User,
} from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import useStore from "@/lib/store";

export default function Footer() {
  const { currentTab, setCurrentTab } = useStore();

  const navItems = [
    { icon: <Home size={20} />, label: "Home", href: "/" },
    { icon: <Search size={20} />, label: "Search", href: "/search" },
    { icon: <Library size={20} />, label: "Library", href: "/library" },
  ];

  return (
    <footer className="w-full h-16 flex flex-row items-center justify-evenly bg-[var(--card)] border-t border-[var(--border)] md:flex-col md:w-16 md:h-full ">
      {navItems.map((item, i) => {
        const isActive = currentTab === item.label.toLowerCase();

        return (
          <Link
            key={i}
            href={item.href}
            onClick={() => setCurrentTab(item.label.toLowerCase())}
            className={clsx(
              "flex flex-col items-center justify-center text-[11px] transition-all duration-200 ease-in-out p-2",
              isActive
                ? "text-[var(--primary)] font-semibold"
                : "text-[var(--secondary-hover)] hover:text-[var(--secondary-foreground)] active:text-[var(--secondary-foreground)]"
            )}
          >
            <div
              className={clsx(
                "flex flex-col items-center transition-transform duration-200",
                isActive ? "scale-105" : "hover:scale-105 active:scale-105 "
              )}
            >
              {item.icon}
              <span className="mt-[2px]">{item.label}</span>
              {isActive && (
                <div className="mt-[2px] w-1 h-1 rounded-full bg-[var(--accent)]" />
              )}
            </div>
          </Link>
        );
      })}
    </footer>
  );
}
