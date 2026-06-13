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

  const handleScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleMobileScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <m.header
        className="pointer-events-none fixed inset-x-0 top-0 z-[var(--z-header)] flex justify-center px-[5%] pt-4 md:pt-6"
        variants={headerDrop}
        initial="hidden"
        animate="visible"
      >
        <div className="pointer-events-auto mx-auto w-fit">
          {/* Desktop / tablet pill */}
          <nav
            className="glass-nav hidden items-center gap-10 rounded-full pl-4 pr-3 py-2.5 md:flex border border-white/10 shadow-lg"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className="flex items-center text-white transition-opacity hover:opacity-80"
              aria-label={`${siteConfig.name} home`}
            >
              <span className="flex items-center justify-center rounded-[12px] overflow-hidden">
                <img src="/ecmLogo.png" alt="logo" className="h-10 w-auto object-contain" />
                <rect x="3" y="13" width="3.5" height="7" rx="0.75" />
                <rect x="10.25" y="8" width="3.5" height="12" rx="0.75" />
                <path d="M17.5 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-2 0V4.414l-6.293 6.293a1 1 0 0 1-1.414 0L12 9.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0L14 8.586l5.586-5.586H18.5a1 1 0 0 1-1-1z" />
              </span>
            </Link>

            <ul className="flex items-center gap-8">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-[15px] font-medium leading-[25px] text-white/80 transition-colors hover:text-white"
                    onClick={(e) => handleScroll(e, item.href)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Button
              href={siteConfig.cta.href}
              showArrow={false}
              onClick={(e) => handleScroll(e, siteConfig.cta.href)}
            >
              {siteConfig.cta.label}
            </Button>
          </nav>

          {/* Mobile bar */}
          <div className="glass-nav flex items-center justify-between rounded-2xl px-5 py-4 md:hidden border border-white/10 shadow-lg min-w-[280px]">
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label={`${siteConfig.name} home`}
            >
              <span className="flex items-center justify-center rounded-[12px] overflow-hidden">
                <img src="/ecmLogo.png" alt="logo" className="h-10 w-auto object-contain" />
                <rect x="3" y="13" width="3.5" height="7" rx="0.75" />
                <rect x="10.25" y="8" width="3.5" height="12" rx="0.75" />
                <path d="M17.5 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-2 0V4.414l-6.293 6.293a1 1 0 0 1-1.414 0L12 9.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0L14 8.586l5.586-5.586H18.5a1 1 0 0 1-1-1z" />
                {/* </svg> */}
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
            {/* Close Button inside Mobile Menu */}
            <button
              type="button"
              className="absolute top-6 right-6 flex size-10 items-center justify-center text-white/80 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="size-6" />
            </button>

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
                    onClick={(e) => handleMobileScroll(e, item.href)}
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
                  showArrow={false}
                  onClick={(e) => handleMobileScroll(e, siteConfig.cta.href)}
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
