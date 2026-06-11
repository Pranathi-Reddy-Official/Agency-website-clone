"use client";

import { m } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { fadeIn, fadeUp, staggerContainer, staggerItem } from "@/lib/motion/variants";

// const clients = [
//   {
//     name: "Alex Rivera",
//     metric: "92K+ Subscribers",
//     image:
//       "https://framerusercontent.com/images/NeudS8SAxw7QroxRFOMjPB1Cqs.jpg?width=512",
//     href: "https://www.youtube.com/@RossGivens",

//   },
//   {
//     name: "Jordan Lee",
//     metric: "118K+ Subscribers",
//     image:
//       "https://framerusercontent.com/images/NeudS8SAxw7QroxRFOMjPB1Cqs.jpg?width=512",
//     href: "https://www.youtube.com/@RossGivens",

//   },
//   {
//     name: "Sam Chen",
//     metric: "245K+ Subscribers",
//     image:
//       "https://framerusercontent.com/images/NeudS8SAxw7QroxRFOMjPB1Cqs.jpg?width=512",
//     href: "https://www.youtube.com/@RossGivens",

//   },
//   {
//     name: "Morgan Blake",
//     metric: "67K+ Subscribers",
//     image:
//       "https://framerusercontent.com/images/NeudS8SAxw7QroxRFOMjPB1Cqs.jpg?width=512",
//     href: "https://www.youtube.com/@RossGivens",

//   },
//   {
//     name: "Taylor Brooks",
//     metric: "410K+ Subscribers",
//     image:
//       "https://framerusercontent.com/images/NeudS8SAxw7QroxRFOMjPB1Cqs.jpg?width=512",
//     href: "https://www.youtube.com/@RossGivens",

//   },
//   {
//     name: "Casey Wells",
//     metric: "156K+ Subscribers",
//     image:
//       "https://framerusercontent.com/images/NeudS8SAxw7QroxRFOMjPB1Cqs.jpg?width=512",
//     href: "https://www.youtube.com/@RossGivens",

//   },
// ];
const clients = [
  {
    name: "Ross Givens",
    subscribers: "88K+ Subscribers",
    image: "https://framerusercontent.com/images/NeudS8SAxw7QroxRFOMjPB1Cqs.jpg",
    link: "https://www.youtube.com/@RossGivens",
  },
  {
    name: "Mariusz Skonieczny",
    subscribers: "105K+ Subscribers",
    image: "https://framerusercontent.com/images/3rn7OKgAFLkjaDOcqYFrzMte6Q.jpg",
    link: "https://www.youtube.com/@stockhunter-1",
  },
  {
    name: "Brian Gornall",
    subscribers: "386K+ Subscribers",
    image: "https://framerusercontent.com/images/per39FTuDY4GfomZFRtcphLOeqI.jpg",
    link: "https://www.youtube.com/@BusinessWithBrian",
  },
  {
    name: "Finskool21",
    subscribers: "72K+ Subscribers",
    image: "https://framerusercontent.com/images/6Uzs8doXY4S4YqibUJkf51IArA.jpg",
    link: "https://www.youtube.com/@Finskool21official",
  },
  {
    name: "Mark Moss",
    subscribers: "822K+ Subscribers",
    image: "https://framerusercontent.com/images/b8A9fPP4ugXTjrchVTDGbD2ps.jpg",
    link: "https://www.youtube.com/@1MarkMoss",
  },
  {
    name: "Market Disruptors",
    subscribers: "44K+ Subscribers",
    image: "https://framerusercontent.com/images/gDKjJoAqavYh819rrlCIzDbA.jpg",
    link: "https://www.youtube.com/@MarketDisruptors1",
  },
  {
    name: "Easy Haii Finance",
    subscribers: "607K+ Subscribers",
    image: "https://framerusercontent.com/images/nDfoufzxwEhKa9bStEQ7C3ZI.jpeg",
    link: "https://www.instagram.com/easyhaiifinance",
  },
  {
    name: "Ritesh Kumar",
    subscribers: "371K+ Subscribers",
    image: "https://framerusercontent.com/images/J10PovqL9WdXr6LYq3nJyWakmE.jpeg",
    link: "https://www.instagram.com/finskool21",
  },
  {
    name: "Theodore Schweitz",
    subscribers: "22K+ Subscribers",
    image: "https://framerusercontent.com/images/fzoxWfcNSZO2G1Pyz5mIpxR7E.jpeg",
    link: "https://www.instagram.com/finskool21",
  },
];
function SocialProofBadge() {
  return (
    // <m.div
    //   className="flex flex-wrap items-center justify-center gap-2 text-sm text-white/80"
    //   variants={fadeUp}
    // >
    //   <span className="text-white/60">Trusted by</span>
    //   <span className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
    //     117
    //   </span>
    //   <span className="font-display text-2xl font-semibold text-white">+</span>
    //   <span className="text-white/60">founders who care about quality</span>
    //   {/* <Star className="size-4 fill-white text-white" aria-hidden /> */}
    // </m.div>

    <m.div
      className="flex items-center gap-3"
      variants={fadeUp}
    >
      {/* Avatars */}
      <div className="flex items-center">
        <img
          src="https://framerusercontent.com/images/3rn7OKgAFLkjaDOcqYFrzMte6Q.jpg?width=512"
          alt=""
          className="h-7 w-7 rounded-full object-cover"
        />
        <img
          src="https://framerusercontent.com/images/per39FTuDY4GfomZFRtcphLOeqI.jpg?width=512"
          alt="profile img"
          className="-ml-2 h-7 w-7 rounded-full object-cover"
        />
        <img
          src="https://framerusercontent.com/images/fzoxWfcNSZO2G1Pyz5mIpxR7E.jpeg?width=512"
          alt="profile img"
          className="-ml-2 h-7 w-7 rounded-full object-cover"
        />
        <img
          src="https://framerusercontent.com/images/b8A9fPP4ugXTjrchVTDGbD2ps.jpg?width=512"
          alt="profile img"
          className="-ml-2 h-7 w-7 rounded-full object-cover"
        />
        <img
          src="https://framerusercontent.com/images/NeudS8SAxw7QroxRFOMjPB1Cqs.jpg?width=512"
          alt="profile img"
          className="-ml-2 h-7 w-7 rounded-[14px] object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex items-center gap-1 text-sm">
        <span className="text-white/70">
          Trusted by
        </span>

        <span className="text-white font-medium">
          117
        </span>

        <span className="text-white font-medium">
          +
        </span>

        <span className="text-white/70">
          founders who care about quality
        </span>
      </div>
    </m.div>
  );
}

function LogoTicker() {
  const track = [...clients, ...clients];

  return (
    <m.div className="w-full max-w-[1000px]" variants={fadeIn}>
      <p className="mb-6 text-center text-sm text-white/60">
        Founders who trust us to grow their channels
      </p>
      <div className="fade-edge-x relative overflow-hidden">
        <m.div
          className="flex w-max gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {track.map((client, i) => (
            <a
              key={`${client.name}-${i}`}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[75px] w-[180px] shrink-0 items-center gap-3"
            >
              <img
                src={client.image}
                alt={client.name}
                className="h-[50px] w-[50px] rounded-full object-cover"
              />

              <div className="flex flex-col">
                <h3 className="font-[Poppins] text-[18px] font-medium leading-none tracking-[-0.02em] text-white">
                  {client.name}
                </h3>

                <p className="mt-1 text-[12px] leading-none tracking-[-0.02em] text-[#A6A6A6]">
                  {client.subscribers}
                </p>
              </div>
            </a>
          ))}
        </m.div>
      </div>
    </m.div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden pt-24 pb-16 md:pt-28 lg:min-h-screen lg:py-[100px]"
    >
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-[312px] z-0 h-[min(1112px,120vh)] overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(82,41,205,0.18),transparent_70%)]" />
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[min(100%,900px)] -translate-x-1/2 rounded-[40px] border border-brand/20 bg-gradient-to-b from-white/[0.04] to-transparent opacity-60" />
      </div>

      <Container className="relative z-10 flex flex-col items-center gap-6 text-center md:gap-6 lg:max-w-[80%]">
        <m.div
          className="flex w-full max-w-4xl flex-col items-center gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <m.div variants={staggerItem}>
            <SocialProofBadge />
          </m.div>

          <m.h1
            variants={staggerItem}
            className="font-display text-[24px] font-medium leading-[28px] tracking-[-0.02em] text-white sm:text-[36px] sm:leading-[1.2] sm:tracking-[-0.02em] lg:text-[51px] lg:font-semibold lg:tracking-[-0.04em] xl:text-[64px] xl:leading-[1.2]"
          >
            Build authority with videos that actually convert.
          </m.h1>

          <m.p
            variants={staggerItem}
            className="max-w-[85%] text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            We turn your raw footage into videos that build authority, grow your audience, and actually convert. No fluff. No delays. Just results.
          </m.p>

          <m.div variants={staggerItem} className="pt-2">
            <Button href={siteConfig.cta.href}>
              Book Your Free Strategy Call
            </Button>
          </m.div>

          <m.div variants={staggerItem} className="w-full pt-6">
            <LogoTicker />
          </m.div>
        </m.div>
      </Container>
    </section>
  );
}
