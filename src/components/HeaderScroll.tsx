"use client";

import { useEffect, useState, type ReactNode } from "react";

/** Encabezado pegajoso: agrega un borde inferior al hacer scroll. */
export function HeaderScroll({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className={scrolled ? "hdr scrolled" : "hdr"}>{children}</header>;
}
