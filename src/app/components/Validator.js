"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Validator() {
  const { status, data: session } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  if (status === "loading") return null;

  return null;
}
