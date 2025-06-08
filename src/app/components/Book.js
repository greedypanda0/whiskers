import { motion } from "framer-motion";
import Link from "next/link";
import Avatar from "./Avatar";
import { memo } from "react";

function Book({ book }) {
  console.log(book);
  
  return (
    <motion.div
      layout
      key={book.name}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Link
        href={`/books/${book.name}`}
        aria-label={`View Book ${book.name}`}
      >
        <div
          className="group relative flex flex-col bg-[var(--secondary)] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 rounded-xl w-full max-w-[240px] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] aspect-[2/3]"
        >
          <div className="relative w-full h-full overflow-hidden flex">
            <div className="w-[90%] h-full ml-auto">
              <Avatar name={book.name} />
            </div>

            <div className="absolute bottom-0 left-0 w-full h-full bg-[linear-gradient(to_top,_var(--muted)_0%,_var(--muted)_20%,_transparent_100%)] flex justify-center items-end pb-2">
              <div className="absolute w-full h-[30%] left-0 bottom-0 flex flex-col group-hover:h-[40%] group-active:h-[40%] transition-all duration-300 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]">
                <div className="w-[90%] ml-auto flex justify-center items-center font-semibold text-md text-center">
                  {book.name}
                </div>
                <div className="w-[90%] ml-auto h-full flex justify-center items-center text-sm text-center">
                  {book.description.length > 50
                    ? `${book.description.slice(0, 50)} ...`
                    : book.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default memo(Book);
