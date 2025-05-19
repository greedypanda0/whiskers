import Link from "next/link";
import Avatar from "./Avatar";

export default function ListBooks({ books }) {
  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(170px,_1fr))] gap-2 w-full p-2">
        {books.map((e, i) => (
          <Link
            href={`/books/${slugify(e.name)}`}
            aria-label={`View Book ${e.name}`}
            key={i}
          >
            <div className="group flex flex-col h-[250px] bg-[var(--muted)] overflow-hidden rounded-2xl transition-all duration-300 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)] hover:scale-101 active:scale-95 max-w-[200px]">
              <div className="relative w-full h-full overflow-hidden">
                <Avatar
                  name={e.name}
                  width={150}
                  height={250}
                  className="ml-auto"
                />
                <div className="absolute bottom-0 left-0 w-full h-full bg-[linear-gradient(to_top,_var(--muted)_0%,_var(--muted)_20%,_transparent_100%)] flex justify-center items-end pb-2" />
                <div className="absolute w-full h-[30%] left-0 bottom-0 flex flex-col group-hover:h-[40%] group-active:h-[40%] transition-all duration-300 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]">
                  <div className="w-[150px] ml-auto flex justify-center items-center font-semibold text-md text-center">
                    {e.name}
                  </div>
                  <div className="w-[150px] ml-auto h-full flex justify-center items-center text-sm text-center">
                    {e.description.length > 50
                      ? `${e.description.slice(0, 50)} ...`
                      : e.description}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
