"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function RootLangRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/fr");
  }, [router]);

  return null;
}
