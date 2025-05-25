"use client";
import useBook from "@/app/hooks/useBook";
import { useParams } from "next/navigation";

export default function BooksWithName() {
  let params = useParams();
  let { name } = params;
  const { book, error, isLoading } = useBook({ name });

  console.log(book);

  return <div>{name}</div>;
}
