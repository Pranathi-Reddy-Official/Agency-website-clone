"use client";

import { AnimatePresence, m } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { headerDrop } from "@/lib/motion/variants";
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <m.header
        className="pointer-events-none fixed inset-x-0 top-0 z-[var(--z-header)] flex justify-center px-[5%] pt-0 md:pt-0 max-md:pt-2.5"
        variants={headerDrop}
        initial="hidden"
        animate="visible"
      >
        <div className="pointer-events-auto w-full max-w-[1200px]">
          {/* Desktop / tablet pill */}
          <nav
            className="glass-nav hidden items-center justify-between gap-4 rounded-full px-6 py-3 md:flex"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className="flex items-center gap-2 text-white transition-opacity hover:opacity-80"
              aria-label={`${siteConfig.name} home`}
            >
              <span className="flex size-7 items-center justify-center rounded-md bg-brand/20">
                <Zap className="size-4 text-brand" strokeWidth={2.5} aria-hidden />
              </span>
              <span className="font-display text-sm font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </Link>

            <ul className="flex items-center gap-8">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-[15px] font-medium leading-[25px] text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Button href={siteConfig.cta.href}>{siteConfig.cta.label}</Button>
          </nav>

          {/* Mobile bar */}
          <div className="glass-nav flex items-center justify-between rounded-2xl px-5 py-4 md:hidden">
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label={`${siteConfig.name} home`}
            >
              <span className="flex size-7 items-center justify-center rounded-md bg-brand/20">
                <Zap className="size-4 text-brand" strokeWidth={2.5} aria-hidden />
              </span>
            </Link>

            <button
              type="button"
              className="flex size-8 items-center justify-center text-white"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </m.header>

      <AnimatePresence>
        {menuOpen ? (
          <m.div
            id="mobile-menu"
            className="fixed inset-0 z-[var(--z-overlay)] bg-black/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
              {siteConfig.nav.map((item, i) => (
                <m.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={item.href}
                    className="font-display text-2xl font-medium text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </m.div>
              ))}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Button
                  href={siteConfig.cta.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {siteConfig.cta.label}
                </Button>
              </m.div>
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
