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
      className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] w-full h-fit overflow-auto gap-2 p-2"
    >
      {books.slice(0, visibleCount).map((book) => (
        <motion.div
          key={book.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Book book={book} />
        </motion.div>
      ))}

      {/* Sentinel div with height */}
      <div ref={loadMoreRef} style={{ height: "20px" }} />
    </div>
  );
}
