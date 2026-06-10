import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { Instagram, Linkedin, Twitter, Zap } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Long Form", href: "#services" },
    { label: "Short Form", href: "#services" },
    { label: "Podcast Edits", href: "#services" },
    { label: "Ad Creatives", href: "#services" },
  ],
  company: [
    { label: "Results", href: "#results" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
};

const socials = [
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Instagram", href: "#", icon: Instagram },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-black pb-8 pt-[30px]">
      <Container className="flex flex-col gap-8 pl-[30px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="max-w-xl">
            <Link href="/" className="mb-4 flex items-center gap-2 text-white">
              <span className="flex size-7 items-center justify-center rounded-md bg-brand/20">
                <Zap className="size-4 text-brand" aria-hidden />
              </span>
              <span className="font-display font-semibold">{siteConfig.name}</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Original video production for founders and creators who care about
              quality, consistency, and conversion.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 md:gap-16">
            <div>
              <p className="mb-3 text-sm font-medium text-white">Services</p>
              <ul className="flex flex-col gap-2">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-sm font-medium text-white">Company</p>
              <ul className="flex flex-col gap-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-[var(--color-border)] pt-6 sm:flex-row sm:items-center">
          <ul className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex size-[25px] items-center justify-center text-white/60 transition-colors hover:text-white"
                  aria-label={label}
                >
                  <Icon className="size-4" aria-hidden />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-1 text-sm text-white/50 sm:flex-row sm:gap-4">
            <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          </div>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-6 md:hidden">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/60 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
