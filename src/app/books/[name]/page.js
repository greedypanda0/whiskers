"use client";
import { useParams } from "next/navigation";

export default function BooksWithName() {
  let params = useParams();
  let { name } = params;

  return <div>{name}</div>;
}
