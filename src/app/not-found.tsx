import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-black text-white px-4">
      <h2 className="text-4xl font-bold mb-4 font-display text-white">404 - Page Not Found</h2>
      <p className="text-white/70 mb-6 max-w-md text-center">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-full bg-brand px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        Go Home
      </Link>
    </div>
  );
}
