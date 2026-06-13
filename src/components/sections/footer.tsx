import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Instagram, Linkedin, Mail } from "lucide-react";

// Custom X logo (formerly Twitter) SVG
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-black pb-16 pt-16">
      <Container className="flex flex-col gap-10">
        {/* Large Brand Header */}
        <div>
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white lowercase">
            ECM Studios
          </h2>
        </div>

        {/* Columns: Menu and Social */}
        <div className="flex gap-16 md:gap-24">
          {/* Menu Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[15px] font-bold text-white/40 tracking-wide">
              Menu
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="#hero"
                  className="font-sans text-[15px] font-bold text-white transition-colors hover:text-[#5229CD]"
                >
                  Short-form
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="font-sans text-[15px] font-bold text-white transition-colors hover:text-[#5229CD]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="font-sans text-[15px] font-bold text-white transition-colors hover:text-[#5229CD]"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[15px] font-bold text-white/40 tracking-wide">
              Social
            </h4>
            <ul className="flex items-center gap-5 pt-0.5">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#5229CD] transition-colors"
                  aria-label="X"
                >
                  <XIcon className="size-[20px]" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#5229CD] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="size-[20px]" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#5229CD] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-[20px]" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@ecmstudios.com"
                  className="text-white hover:text-[#5229CD] transition-colors"
                  aria-label="Email"
                >
                  <Mail className="size-[20px]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-none text-[13px] font-bold text-white/40 tracking-wider">
          © 2026 ECM Studios. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}
