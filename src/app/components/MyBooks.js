import useStore from "@/lib/store";
import ListBooks from "./ListBooks";
import useBooks from "../hooks/useBooks";

export default function MyBooks() {
  const { query } = useStore();
  const { books = [], error, isLoading } = useBooks({ self: true });
  if (error) {
  }

  return (
    <div className="flex h-full w-full flex-col overflow-auto">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <ListBooks
          books={books?.filter(
            (c) =>
              c.name.toLowerCase().includes(query) ||
              c.description.toLowerCase().includes(query) ||
              c.author.toLowerCase().includes(query)
          )}
        />
      )}
    </div>
  );
}
