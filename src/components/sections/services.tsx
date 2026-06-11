"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { staggerContainer, staggerItem } from "@/lib/motion/variants";
import { Play, X, BarChart3, Linkedin, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";

// Custom keyframe styles for animated podcast waveform
const waveStyle = `
  @keyframes wave-height-1 { 0%, 100% { height: 6px; } 50% { height: 18px; } }
  @keyframes wave-height-2 { 0%, 100% { height: 16px; } 50% { height: 6px; } }
  @keyframes wave-height-3 { 0%, 100% { height: 8px; } 50% { height: 20px; } }
  @keyframes wave-height-4 { 0%, 100% { height: 14px; } 50% { height: 8px; } }
  @keyframes wave-height-5 { 0%, 100% { height: 10px; } 50% { height: 16px; } }
  .animate-wave-1 { animation: wave-height-1 1.2s ease-in-out infinite; }
  .animate-wave-2 { animation: wave-height-2 1.2s ease-in-out infinite 0.2s; }
  .animate-wave-3 { animation: wave-height-3 1.2s ease-in-out infinite 0.4s; }
  .animate-wave-4 { animation: wave-height-4 1.2s ease-in-out infinite 0.1s; }
  .animate-wave-5 { animation: wave-height-5 1.2s ease-in-out infinite 0.3s; }
`;

interface VideoModalProps {
  isOpen: boolean;
  videoId: string | null;
  aspect?: "video" | "portrait";
  onClose: () => void;
}

function VideoModal({ isOpen, videoId, aspect = "video", onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && videoId && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <m.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={cn(
              "relative overflow-hidden rounded-2xl border border-white/10 bg-[#050505] shadow-2xl",
              aspect === "portrait"
                ? "w-full max-w-[380px] aspect-[9/16] max-h-[85vh]"
                : "w-full max-w-4xl aspect-video"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 flex size-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-sm transition-transform hover:scale-105 hover:bg-black/60"
              aria-label="Close video player"
            >
              <X className="size-4" />
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title="Video player"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

function YouTubeThumbnail({ videoId, alt = "Video Thumbnail" }: { videoId: string; alt?: string }) {
  const [imgSrc, setImgSrc] = useState(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => {
        if (imgSrc.includes("maxresdefault")) {
          setImgSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
        }
      }}
    />
  );
}

function LongFormShowcase({ onPlayVideo }: { onPlayVideo: (id: string, aspect?: "video" | "portrait") => void }) {
  const videoIds = [
    "yD0b2PXuwNI",
    "QnDHbvCqvkM",
    "ZQxIHUTJin0",
    "qtIU_EvM-cM",
    "0ZHo_POnZ4w",
    "Xcdhw0BSSEw",
  ];

  return (
    <m.div
      variants={staggerItem}
      className="border border-white/10 bg-[#050505] rounded-[25px] p-6 md:p-10 lg:p-12 flex flex-col gap-8 md:gap-10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-3 max-w-2xl">
          <h3 className="text-2xl md:text-3xl lg:text-[32px] font-display font-semibold text-white tracking-tight">
            Long Form Content
          </h3>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            Turn your long-form videos into binge-worthy experiences that boost watch time, build authority, and grow subscribers fast.
          </p>
        </div>
        <div className="shrink-0">
          <Button href="#contact" variant="primary">Explore Pricing</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoIds.map((id, index) => (
          <div
            key={id}
            onClick={() => onPlayVideo(id, "video")}
            className="group relative aspect-video overflow-hidden rounded-[16px] border border-white/10 bg-black/40 cursor-pointer shadow-md"
          >
            <YouTubeThumbnail videoId={id} alt={`Long form showcase video ${index + 1}`} />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/15" />

            {/* Play Button Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex size-14 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#5229CD] group-hover:border-[#5229CD]">
              <Play className="size-5 fill-white text-white translate-x-0.5" />
            </div>
          </div>
        ))}
      </div>
    </m.div>
  );
}

function ShortformShowcase({ onPlayVideo }: { onPlayVideo: (id: string, aspect?: "video" | "portrait") => void }) {
  const shorts = [
    { id: "k2RzU-J_m0Y", title: "Retention Hook Secret", views: "1.2M views" },
    { id: "5_XzD3H3S4s", title: "SaaS Scaling Framework", views: "850K views" },
    { id: "SjLwE0Fz8qQ", title: "Editing Process Breakdown", views: "640K views" },
    { id: "QzSND9N04nE", title: "Organic Funnels Rule", views: "2.1M views" },
    { id: "m2X-wY2k4rE", title: "Founder Authority Strategy", views: "930K views" },
  ];

  return (
    <m.div
      variants={staggerItem}
      className="border border-white/10 bg-[#050505] rounded-[25px] p-6 md:p-10 lg:p-12 flex flex-col gap-8 md:gap-10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-3 max-w-2xl">
          <h3 className="text-2xl md:text-3xl lg:text-[32px] font-display font-semibold text-white tracking-tight">
            Shortform Content
          </h3>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            Grab attention in seconds with scroll-stopping shorts built to convert viewers into followers and buyers.
          </p>
        </div>
        <div className="shrink-0">
          <Button href="#contact" variant="primary">Explore Pricing</Button>
        </div>
      </div>

      <div className="relative fade-edge-x">
        <div className="flex gap-6 overflow-x-auto pb-4 pt-2 hide-scrollbar snap-x snap-mandatory scroll-smooth">
          {shorts.map((short) => (
            <div
              key={short.id}
              onClick={() => onPlayVideo(short.id, "portrait")}
              className="group relative w-[210px] sm:w-[250px] aspect-[9/16] shrink-0 snap-start overflow-hidden rounded-[20px] border border-white/10 bg-black/40 cursor-pointer shadow-md transition-transform duration-300 hover:scale-[1.01]"
            >
              <div className="h-full w-full overflow-hidden">
                <YouTubeThumbnail videoId={short.id} alt={short.title} />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300 group-hover:from-black/95" />

              {/* Play Button Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#5229CD] group-hover:border-[#5229CD]">
                <Play className="size-4 fill-white text-white translate-x-0.5" />
              </div>

              {/* Bottom text info overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col gap-1.5 pointer-events-none">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#5229CD] bg-[#5229CD]/10 px-2 py-0.5 rounded-full w-fit">
                  {short.views}
                </span>
                <h4 className="text-sm sm:text-base font-semibold leading-snug text-white line-clamp-2">
                  {short.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </m.div>
  );
}

function PodcastShowcase({ onPlayVideo }: { onPlayVideo: (id: string, aspect?: "video" | "portrait") => void }) {
  const episodes = [
    {
      id: "Xcdhw0BSSEw",
      episode: "EPISODE 84",
      title: "How to Scale Your Agency in 2026",
      length: "42 min",
    },
    {
      id: "qtIU_EvM-cM",
      episode: "EPISODE 85",
      title: "Inside the Mind of an Eight-Figure Founder",
      length: "58 min",
    },
    {
      id: "0ZHo_POnZ4w",
      episode: "EPISODE 86",
      title: "The Creator Economy is Just Getting Started",
      length: "38 min",
    },
  ];

  return (
    <m.div
      variants={staggerItem}
      className="border border-white/10 bg-[#050505] rounded-[25px] p-6 md:p-10 lg:p-12 flex flex-col gap-8 md:gap-10"
    >
      <style>{waveStyle}</style>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-3 max-w-2xl">
          <h3 className="text-2xl md:text-3xl lg:text-[32px] font-display font-semibold text-white tracking-tight">
            Podcast Edits
          </h3>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            Transform your recordings into engaging, polished episodes that keep listeners hooked from start to finish.
          </p>
        </div>
        <div className="shrink-0">
          <Button href="#contact" variant="primary">Explore Pricing</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {episodes.map((ep) => (
          <div
            key={ep.id}
            onClick={() => onPlayVideo(ep.id, "video")}
            className="group relative aspect-video overflow-hidden rounded-[16px] border border-white/10 bg-black/40 cursor-pointer shadow-md transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="h-full w-full overflow-hidden">
              <YouTubeThumbnail videoId={ep.id} alt={ep.title} />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/20" />

            {/* Sound Wave indicator badge at top left */}
            <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-sm">
              <div className="flex items-end gap-[2px] h-3.5 w-5 justify-center">
                <div className="w-[3px] bg-[#5229CD] rounded-full animate-wave-1" />
                <div className="w-[3px] bg-[#5229CD] rounded-full animate-wave-2" />
                <div className="w-[3px] bg-[#5229CD] rounded-full animate-wave-3" />
                <div className="w-[3px] bg-[#5229CD] rounded-full animate-wave-4" />
                <div className="w-[3px] bg-[#5229CD] rounded-full animate-wave-5" />
              </div>
              <span className="text-[10px] font-semibold uppercase text-white tracking-wider">
                {ep.length}
              </span>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#5229CD] group-hover:border-[#5229CD]">
              <Play className="size-4 fill-white text-white translate-x-0.5" />
            </div>

            {/* Lower info overlay */}
            <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col gap-1 pointer-events-none">
              <span className="text-[10px] font-bold text-white/50 tracking-widest uppercase">
                {ep.episode}
              </span>
              <h4 className="text-sm sm:text-base font-semibold leading-snug text-white line-clamp-1">
                {ep.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </m.div>
  );
}

function AdCreativesVSLShowcase({ onPlayVideo }: { onPlayVideo: (id: string, aspect?: "video" | "portrait") => void }) {
  const placeholderId = "yD0b2PXuwNI";

  return (
    <div className="border border-white/10 bg-[#050505] rounded-[25px] p-6 md:p-8 flex flex-col justify-between gap-6 h-full">
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl font-display font-semibold text-white tracking-tight flex items-center gap-2">
          <BarChart3 className="size-5 text-[#5229CD]" />
          Ad Creatives & VSLs
        </h3>
        <p className="text-sm text-white/70 leading-relaxed min-h-[60px]">
          High-performing ad creatives and VSLs designed to hook attention, spark action, and maximize conversions.
        </p>
        <div>
          <Button href="#contact" variant="primary" className="w-full">Explore Pricing</Button>
        </div>
      </div>

      <div className="mt-2">
        <div
          onClick={() => onPlayVideo(placeholderId, "video")}
          className="group relative aspect-video w-full overflow-hidden rounded-[16px] border border-white/10 bg-black/40 cursor-pointer shadow-md"
        >
          <YouTubeThumbnail videoId={placeholderId} alt="Ad Creative Preview" />
          <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/20" />

          {/* Ad Stats Mock Overlay */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/70 px-2.5 py-1 backdrop-blur-sm">
            <span className="flex size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-semibold text-white tracking-wide">
              4.8x ROAS
            </span>
          </div>

          <div className="absolute bottom-3 right-3 rounded-lg border border-white/10 bg-black/70 px-2 py-1 backdrop-blur-sm text-[9px] font-semibold text-white/80 tracking-wider">
            VSL SHOWCASE
          </div>

          {/* Play Button Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#5229CD] group-hover:border-[#5229CD]">
            <Play className="size-4 fill-white text-white translate-x-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkedInVideosShowcase({ onPlayVideo }: { onPlayVideo: (id: string, aspect?: "video" | "portrait") => void }) {
  const placeholderId = "QnDHbvCqvkM";

  return (
    <div className="border border-white/10 bg-[#050505] rounded-[25px] p-6 md:p-8 flex flex-col justify-between gap-6 h-full">
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl font-display font-semibold text-white tracking-tight flex items-center gap-2">
          <Linkedin className="size-5 text-[#5229CD]" />
          LinkedIn Videos
        </h3>
        <p className="text-sm text-white/70 leading-relaxed min-h-[60px]">
          Shortform and longform LinkedIn videos that build authority, earn trust, and attract inbound clients effortlessly.
        </p>
        <div>
          <Button href="#contact" variant="primary" className="w-full">Explore Pricing</Button>
        </div>
      </div>

      <div className="mt-2">
        <div
          onClick={() => onPlayVideo(placeholderId, "video")}
          className="group relative aspect-video w-full overflow-hidden rounded-[16px] border border-white/10 bg-black/40 cursor-pointer shadow-md"
        >
          <YouTubeThumbnail videoId={placeholderId} alt="LinkedIn Video Preview" />
          <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/20" />

          {/* LinkedIn UI Badge Overlay */}
          <div className="absolute top-3 left-3 flex items-center gap-2 rounded-lg border border-white/10 bg-black/70 px-2 py-1 backdrop-blur-sm">
            <div className="size-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
            <span className="text-[9px] font-semibold text-white/90">
              Pranathi Reddy • Founder
            </span>
          </div>

          <div className="absolute bottom-3 right-3 rounded-lg border border-white/10 bg-black/70 px-2 py-1 backdrop-blur-sm text-[9px] font-semibold text-white/80 tracking-wider">
            AUTHORITY EDIT
          </div>

          {/* Play Button Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#5229CD] group-hover:border-[#5229CD]">
            <Play className="size-4 fill-white text-white translate-x-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ExplainersShowcase({ onPlayVideo }: { onPlayVideo: (id: string, aspect?: "video" | "portrait") => void }) {
  const placeholderId = "ZQxIHUTJin0";

  return (
    <div className="border border-white/10 bg-[#050505] rounded-[25px] p-6 md:p-8 flex flex-col justify-between gap-6 h-full">
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl font-display font-semibold text-white tracking-tight flex items-center gap-2">
          <Laptop className="size-5 text-[#5229CD]" />
          Explainers
        </h3>
        <p className="text-sm text-white/70 leading-relaxed min-h-[60px]">
          Story-driven explainer videos for SaaS, transforming complex products into clear, persuasive narratives that sell.
        </p>
        <div>
          <Button href="#contact" variant="primary" className="w-full">Explore Pricing</Button>
        </div>
      </div>

      <div className="mt-2">
        <div
          onClick={() => onPlayVideo(placeholderId, "video")}
          className="group relative aspect-video w-full overflow-hidden rounded-[16px] border border-white/10 bg-black/40 cursor-pointer shadow-md"
        >
          <YouTubeThumbnail videoId={placeholderId} alt="Explainer Video Preview" />
          <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/20" />

          {/* SaaS Overlay */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/70 px-2 py-1 backdrop-blur-sm">
            <span className="text-[10px] font-semibold text-white">
              SaaS Explainer
            </span>
          </div>

          <div className="absolute bottom-3 right-3 rounded-lg border border-white/10 bg-black/70 px-2 py-1 backdrop-blur-sm text-[9px] font-semibold text-white/80 tracking-wider">
            PRODUCT DEMO
          </div>

          {/* Play Button Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#5229CD] group-hover:border-[#5229CD]">
            <Play className="size-4 fill-white text-white translate-x-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [activeAspect, setActiveAspect] = useState<"video" | "portrait">("video");

  const handlePlayVideo = (id: string, aspect: "video" | "portrait" = "video") => {
    setActiveVideoId(id);
    setActiveAspect(aspect);
    setModalOpen(true);
  };

  return (
    <section id="services" className="section-padding relative">
      <Container>
        <SectionShell className="flex flex-col items-center gap-16 px-4 pb-8 pt-16 md:px-8 md:pt-[100px] border-none bg-transparent">
          <SectionHeading
            label="Services"
            title="Everything you need to dominate every platform"
          />

          <m.div
            className="flex flex-col gap-12 md:gap-16 w-full p-0"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Flagship Showcases */}
            <LongFormShowcase onPlayVideo={handlePlayVideo} />
            <ShortformShowcase onPlayVideo={handlePlayVideo} />
            <PodcastShowcase onPlayVideo={handlePlayVideo} />

            {/* Bottom features row */}
            <m.div
              variants={staggerItem}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full"
            >
              <AdCreativesVSLShowcase onPlayVideo={handlePlayVideo} />
              <LinkedInVideosShowcase onPlayVideo={handlePlayVideo} />
              <ExplainersShowcase onPlayVideo={handlePlayVideo} />
            </m.div>
          </m.div>
        </SectionShell>
      </Container>

      {/* Video Playback Lightbox */}
      <VideoModal
        isOpen={modalOpen}
        videoId={activeVideoId}
        aspect={activeAspect}
        onClose={() => {
          setModalOpen(false);
          setActiveVideoId(null);
        }}
      />
    </section>
  );
}
