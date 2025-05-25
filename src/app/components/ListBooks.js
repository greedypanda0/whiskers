import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Book from "./Book";

export default function ListBooks({ books }) {
  const batchSize = 20;
  const [visibleCount, setVisibleCount] = useState(batchSize);

  const loadMoreRef = useRef(null);

  const onIntersect = useCallback(
    (entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((count) => Math.min(count + batchSize, books.length));
      }
    },
    [books.length]
  );

  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(onIntersect, {
      root: null,
      rootMargin: "100px",
      threshold: 1.0,
    });

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [onIntersect]);

  return (
    <div
      className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] auto-rows-min w-full h-fit gap-4 p-2 sm:p-4"
    >
      {books.slice(0, visibleCount).map((book) => (
        <motion.div
          key={book.name}
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.25,
            ease: [0.4, 0, 0.2, 1],
            scale: { type: "spring", stiffness: 200 },
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Book book={book} />
        </motion.div>
      ))}

      {/* Sentinel div with height */}
      <div ref={loadMoreRef} style={{ height: "20px" }} />
    </div>
  );
}
