"use client";
import { useEffect } from "react";
import useStore from "@/lib/store";

export default function Metadata() {
  const { metadata } = useStore();
  console.log(useStore);
  

  useEffect(() => {
    document.title = metadata.title;
    let descTag = document.querySelector('meta[name="description"]');

    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.name = "description";
      document.head.appendChild(descTag);
    }

    descTag.content = metadata.description;
  }, [metadata.title, metadata.description]);

  return null;
}
